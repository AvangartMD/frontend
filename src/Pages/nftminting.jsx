import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { HashLink as Link } from "react-router-hash-link";
import Sticky from "react-sticky-el";
import NFTModal from "../Component/nftpopups";

import NFT2 from "../Assets/images/nft2.jpg";
import UserImg from "../Assets/images/user-img.jpg";
import DDdownA from "../Assets/images/dd-down-arrow.svg";
import Auction from "../Assets/images/icon-set-auction.svg";
import Money from "../Assets/images/icon-set-money.svg";
import Art from "../Assets/images/icon-set-art.svg";
import Sport from "../Assets/images/icon-set-sport.svg";
import Celebrity from "../Assets/images/icon-set-celebrity.svg";
import NFTCard from "../Component/Cards/nftCard";
import { services } from "../services";
import { defiActions } from "../actions/defi.action";
import Compressor from "compressorjs";
import {
  compressImage,
  capitalizeFirstLetter,
  getContractInstance,
} from "../helper/functions";
import { LookoutMetrics } from "aws-sdk";
import { web3 } from "../web3";
import { actions } from "../actions";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Autosuggest from "react-autosuggest";
import Autosuggestion from "../Component/autoSuggestion";
function getSuggestionValue(suggestion) {
  console.log("this is called 1", suggestion.username);

  return suggestion.username;
}

function renderSuggestion(suggestion) {
  console.log("this is called", suggestion);
  return <span>{suggestion.username}</span>;
}

class NFTPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3Data: {
        isLoggedIn: false,
        accounts: [],
      },
      nftObj: {
        title: "Artwork name / title dolor lorem ipsum sit adipiscing",
        description: "",
        coCreatorUserName: "",
        percentShare: 0,
        category: [],
        collection: "",
        saleState: "",
        auctionTime: "",
        edition: "",
        price: "0.00",
        digitalKey: "",
        nftFile: {},
        imgSrc: "",
        categoryList: null,
        collectionList: [],
      },
      suggestionVAl: "",
      suggestions: [],
    };
  }
  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
  }

  async componentDidUpdate(prevProps, prevState) {
    let { web3Data, createdNFTID, collectionList, categoryList } = this.props;

    if (web3Data.isLoggedIn !== prevProps.web3Data.isLoggedIn) {
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.isLoggedIn) {
          this.props.getCollectionList();
        }
      });
    }
    if (web3Data.accounts[0] !== prevProps.web3Data.accounts[0]) {
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          console.log("wll do something in future");
        }
      });
    }
    if (collectionList !== prevProps.collectionList)
      this.setState({ collectionList });
    if (categoryList !== prevProps.categoryList)
      this.setState({ categoryList });
    if (createdNFTID !== prevProps.createdNFTID) {
      console.log("new id", createdNFTID);
      this.mintNFT(createdNFTID);
    }
  }

  componentDidMount() {
    let {
      web3Data,
      categoryList,
      collectionList,
      nftContractInstance,
    } = this.props;
    if (!nftContractInstance) this.props.getNFTContractInstance();
    if (!categoryList) this.props.getCategoryList();
    else this.setState({ categoryList });
    if (collectionList) this.setState({ collectionList });
    if (!web3Data) {
      // this.props.getWeb3();
    } else {
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          // this.signatureRequest(undefined, true);
        }
      });
    }
  }

  async mintNFT(_tokenURI) {
    const { web3Data, nftObj } = this.state;
    const obj = [
      nftObj.edition,
      _tokenURI,
      web3Data.accounts[0],
      nftObj.coCreatorUserName
        ? nftObj.coCreatorUserName
        : "0x0000000000000000000000000000000000000000",
      Number(100 - nftObj.percentShare),
      Number(nftObj.percentShare),
      nftObj.saleState === "BUY" ? "0" : "1",
      nftObj.auctionTime ? Number(nftObj.auctionTime) : "0",
      web3.utils.toWei(nftObj.price, "ether"),
      "0",
    ];
    console.log("mint obj", obj);
    // uint256 _editions, (no of Editions)
    //     string memory _tokenURI, (NFT image code)
    //     address _creator,
    //     address _coCreator,
    //     uint256 _creatorPercent,
    //     uint256 _coCreatorPercent,
    //     Type _saleType, (0 for Buy now and 1 for Auction)
    //     uint256 _timeline, (0 for Buy now and end time in unix timestamp for Auction)
    //     uint256 _pricePerNFT, (price for each edition of the NFT)
    //     uint256 _adminPlatformFee (if admin is the minter then he can pass the fee, else 0)
    await this.props.nftContractInstance.methods
      .mintToken(...obj)
      .send({ from: web3Data.accounts[0] })
      .on("transactionHash", (hash) => {
        // this.onTransactionHash(hash);
        console.log(hash);
      })
      .on("receipt", (receipt) => {
        // this.onReciept();
        console.log("recoihlk", receipt);
      })
      .on("error", (error) => {
        // this.onTransactionError(error);
      });
  }
  onFileUpload = async () => {
    const formData = new FormData();
    const { selectedFile } = this.state;
    if (!selectedFile) {
      alert("upload a file");
      return false;
    }
    const en_src = await services.uploadFileOnBucket(selectedFile, "nft");
    let dataObj = {
      title: "SPORT !!",
      description: "SPORTS !!!!",
      image: {
        original: en_src,
        compressed:
          "https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg",
      },
      // "collectionId": "60ace3f509005e63311cd510",
      unlockContent: true,
      digitalKey: "HELLO!!!!!",
    };
    const result = defiActions.addNFT(dataObj);
    console.log("final result", result);

    formData.append("file", selectedFile, selectedFile.name);
    // submit formData
  };

  formchange(e) {
    const nftObj = { ...this.state.nftObj };
    if (e.target.name === "coCreatorUserName") {
      // this.setState({ suggestionVAl: e.target.value });
      if (e.target.value.length >= 3) {
        console.log("t");
      }
    } else if (e.target.name === "category") {
      const exists = nftObj["category"].includes(e.target.value);
      if (exists) {
        // nftObj["category"].filter((c) => {
        //   return c !== e.target.value;
        // });
        const index = nftObj["category"].indexOf(e.target.value);
        if (index > -1) {
          nftObj["category"].splice(index, 1);
        }
      } else {
        nftObj["category"].push(e.target.value);
      }

      // nftObj[e.target.name].push(e.target.value);
    } else if (e.target.name === "nftFile") {
      nftObj[e.target.name] = e.target.files[0];
      nftObj.imgSrc = URL.createObjectURL(e.target.files[0]);
      if (e.target.files[0].size > 3145728) {
        nftObj.compressionRequired = true;
      }
    } else {
      nftObj[e.target.name] = e.target.value;
    }
    this.setState({ nftObj });
  }
  async createNFT(e) {
    e.preventDefault();
    const { nftObj } = this.state;
    const { nftFile, compressionRequired } = this.state.nftObj;
    let compressedNFTFile = nftFile;
    if (compressionRequired) {
      compressedNFTFile = await compressImage(nftFile);
    }
    Promise.all([
      services.uploadFileOnBucket(nftFile, "nft"),
      services.uploadFileOnBucket(compressedNFTFile, "compressedNft", true),
    ]).then((urls) => {
      let dataObj = {
        title: nftObj.title,
        description: nftObj.description,
        image: {
          original: urls[0],
          compressed: urls[1],
        },
        category: nftObj.category,
        price: nftObj.price,
        saleState: nftObj.saleState,
        auctionTime: nftObj.auctionTime,
        edition: nftObj.edition,
        unlockContent: false,
      };
      if (nftObj.collection) {
        dataObj.collectionId = nftObj.collection;
      }
      if (nftObj.coCreatorUserName) {
        dataObj.coCreator = {
          userId: "60acafd546e2ab3d8b547557",
          percentage: nftObj.percentShare,
        };
      }
      if (nftObj.digitalKey) {
        dataObj.unlockContent = true;
        dataObj.digitalKey = nftObj.digitalKey;
      }
      console.log("dataObj", dataObj);
      const result = this.props.addNFT(dataObj);
    });
  }
  onSuggestionsFetchRequested = ({ value }) => {
    // const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    if (inputLength >= 3) {
      const coCreator = services.get(`user/searchCreator/${value}`, true);
      coCreator.then((resp) => {
        if (resp.data.status) {
          console.log(resp.data.data);
          this.setState({ suggestions: resp.data.data });
          return resp.data.data;
        }
      });
    }
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    // const renderSuggestion = (suggestion) => <div>{suggestion.username}</div>;
    // const getSuggestionValue = (suggestion) => suggestion.username;
    function pointSelect(curr) {
      let hash = window.location.hash.substr(1);
      if (hash == curr) return "active";
      else return "inactive";
    }
    const { categoryList, collectionList } = this.state;
    const nftObj = this.state.nftObj;
    return (
      <Gs.MainSection>
        <div style={{ minHeight: "100vh", width: "100%" }}>
          <Gs.Container>
            <NFTminting>
              <Gs.W200px>
                <Sticky>
                  <NFTLeft>
                    <Link
                      className={pointSelect("itemDecription")}
                      to="nftminting#itemDecription"
                      smooth={true}
                    >
                      Item Description
                    </Link>
                    <Link
                      className={pointSelect("creator")}
                      to="nftminting#creator"
                      smooth={true}
                    >
                      Co-Creator
                    </Link>
                    <Link
                      className={pointSelect("collection")}
                      to="nftminting#collection"
                      smooth={true}
                    >
                      Category & Collection
                    </Link>
                    <Link
                      className={pointSelect("marketplace")}
                      to="nftminting#marketplace"
                      smooth={true}
                    >
                      Marketplace Settings
                    </Link>
                    <Link
                      className={pointSelect("unlockable")}
                      to="nftminting#unlockable"
                      smooth={true}
                    >
                      Unlockable Content
                    </Link>
                    {/* <Link
                      to="nftminting#admins"
                      className="AdminLink"
                      smooth={true}
                    >
                      for Admins
                    </Link> */}
                  </NFTLeft>
                </Sticky>
              </Gs.W200px>
              <Gs.W880px className="displayflex">
                <Gs.W605px>
                  <NFTMiddle>
                    <AlertNote>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </AlertNote>
                  </NFTMiddle>
                </Gs.W605px>
                <Gs.W605px>
                  <NFTMiddle>
                    <NFTtitle id="itemDecription">
                      <h4>Item Description</h4>
                      <p className="mb-30">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </NFTtitle>
                    <form
                      onChange={(e) => this.formchange(e)}
                      onSubmit={(e) => this.createNFT(e)}
                    >
                      <NFTForm>
                        <div className="label-line">
                          <label>Title</label>
                        </div>
                        <input
                          type="text"
                          name="title"
                          placeholder="Type something…"
                        />
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Description</label>
                          <span>optional</span>
                        </div>
                        <input
                          type="text"
                          name="description"
                          placeholder="Type something…"
                        />
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Upload File</label>
                          <FlexDiv className="JCSB">
                            <p>Upload PNG, GIF, WEBP, MP4 or MP3 files.</p>
                            <p>
                              <b>Max 30 mb.</b>
                            </p>
                          </FlexDiv>
                        </div>
                        <FileuploadBox>
                          <label class="custom-file-upload">
                            <input type="file" name="nftFile" />
                            Choose
                          </label>
                          <input type="file" placeholder="Choose" />
                        </FileuploadBox>
                      </NFTForm>
                      <NFTtitle id="creator">
                        <h4 className="mt-30">Co-Creator</h4>
                        <p className="mb-30">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <div className="label-line">
                          <label>Co-Creator Username</label>
                        </div>
                        <div className="iLeft errorinput">
                          <i>@</i>
                          <Autosuggestion />
                          {/* <Autosuggest
                            suggestions={this.state.suggestions}
                            onSuggestionsFetchRequested={
                              this.onSuggestionsFetchRequested
                            }
                            onSuggestionsClearRequested={
                              this.onSuggestionsClearRequested
                            }
                            getSuggestionValue={() => getSuggestionValue}
                            renderSuggestion={() => renderSuggestion}
                            inputProps={{
                              type: "text",
                              name: "coCreatorUserName",
                              placeholder: "Type something…",
                              value: this.state.suggestionVAl,
                              onChange: (e) => {
                                this.setState({
                                  suggestionVAl: e.target.value,
                                });
                              },
                            }}
                          /> */}
                          {/* <ReactSearchAutocomplete
                            resultStringKeyName="coCreatorUserName"
                            showIcon={false}
                            inputSearchString="coCreatorUserName"
                            // items={items}
                            // onSearch={handleOnSearch}
                            // onHover={handleOnHover}
                            // onSelect={handleOnSelect}
                            // onFocus={handleOnFocus}
                            autoFocus
                          /> */}
                          {/* <input
                            type="text"
                            name="coCreatorUserName"
                            placeholder="Type something…"
                          /> */}
                          <p className="error">user doesn’t exist</p>
                        </div>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Percentage</label>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                        <div className="iRight">
                          <input
                            type="text"
                            name="percentShare"
                            placeholder="0"
                          />
                          <i>%</i>
                        </div>
                      </NFTForm>
                      <NFTtitle id="collection">
                        <h4 className="mt-30">Category & Collection</h4>
                        <p className="mb-30">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <div className="label-line">
                          <label>Category</label>
                          <p>
                            Choose category for listing your NFT. You can choose
                            up to 2.
                          </p>
                        </div>
                        <CustomCheckbox1>
                          {categoryList?.map((category) => (
                            <label class="checkbox-container">
                              <img src={Art} alt="" />
                              {capitalizeFirstLetter(category.categoryName)}
                              <input
                                type="checkbox"
                                name="category"
                                value={category._id}
                              />
                              <span class="checkmark"></span>
                            </label>
                          ))}
                          {/* <label class="checkbox-container">
                            <img src={Celebrity} alt="" />
                            Celebrity
                            <input
                              type="checkbox"
                              name="category"
                              value="celebrity"
                            />
                            <span class="checkmark"></span>
                          </label> */}
                          {/* <label class="checkbox-container">
                            <img src={Sport} alt="" />
                            Sport
                            <input
                              type="checkbox"
                              name="category"
                              value="sport"
                            />
                            <span class="checkmark"></span>
                          </label> */}
                        </CustomCheckbox1>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Collection</label>
                        </div>
                        <CollectionSelect>
                          <Gs.W80>
                            <select name="collection">
                              <option>Select or Create</option>
                              {collectionList?.map((collection) => (
                                <option value={collection._id}>
                                  {capitalizeFirstLetter(collection.name)}
                                </option>
                              ))}
                            </select>
                          </Gs.W80>
                          <Gs.W20>
                            <button onClick={() => this.toggle(4)}>
                              + Create
                            </button>
                          </Gs.W20>
                        </CollectionSelect>
                      </NFTForm>
                      <NFTtitle id="marketplace">
                        <h4 className="mt-30">Marketplace Settings</h4>
                        <p className="mb-30">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <div className="label-line">
                          <label>Sale State</label>
                        </div>
                        <CustomRadio1>
                          <label class="radio-container">
                            <img src={Auction} alt="" /> Auction
                            <input
                              type="radio"
                              name="saleState"
                              value="AUCTION"
                            />
                            <span class="checkmark"></span>
                          </label>
                          <label class="radio-container">
                            <img src={Money} alt="" /> Buy now
                            <input type="radio" name="saleState" value="BUY" />
                            <span class="checkmark"></span>
                          </label>
                        </CustomRadio1>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Auction Time</label>
                        </div>
                        <CustomRadio1>
                          <label class="radio-container">
                            12 hours
                            <input type="radio" name="auctionTime" value="12" />
                            <span class="checkmark"></span>
                          </label>
                          <label class="radio-container">
                            24 hours
                            <input type="radio" name="auctionTime" value="24" />
                            <span class="checkmark"></span>
                          </label>
                          <label class="radio-container">
                            48 hours
                            <input type="radio" name="auctionTime" value="48" />
                            <span class="checkmark"></span>
                          </label>
                        </CustomRadio1>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Edition</label>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                        <input type="text" placeholder="0" name="edition" />
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Price</label>
                        </div>
                        <input type="text" placeholder="0.00" name="price" />
                        <AccountBX onClick={() => this.toggle(2)}>
                          <span>
                            BNB <img src={DDdownA} alt="" />
                          </span>
                          <Collapse
                            isOpen={this.state.isOpen2}
                            className={
                              "app__collapse collapse-css-transition  " +
                              (this.state.isOpen2 ? "collapse-active" : "")
                            }
                          >
                            <DDContainer className="ver2">
                              <DDBtnbar02>
                                <button>ETH</button>
                                <button>BTC</button>
                              </DDBtnbar02>
                            </DDContainer>
                          </Collapse>
                        </AccountBX>
                      </NFTForm>
                      <NFTtitle id="unlockable">
                        <h4 className="mt-30">Unlockable Content</h4>
                        <p className="mb-30">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <div className="label-line">
                          <label>
                            Digital key, code to redeem or link to file
                          </label>
                        </div>
                        <input
                          type="text"
                          placeholder="Type something…"
                          name="digitalKey"
                        />
                      </NFTForm>

                      {/* <NFTtitle id="admins">
                        <h4 className="mt-30 text-till-blue">for Admins</h4>
                        <p className="mb-30">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </NFTtitle> */}
                      {/* <NFTForm>
                        <div className="label-line">
                          <label>Wallet Address</label>
                        </div>
                        <input type="text" placeholder="Type something…" />
                      </NFTForm> */}
                      {/* <NFTForm>
                        <div className="label-line">
                          <label>First Hand Fee</label>
                        </div>
                        <div className="iRight">
                          <input type="text" placeholder="Type something…" />
                          <i>%</i>
                        </div>
                      </NFTForm> */}
                      <CreateItemButton>
                        <button type="submit">Create Item</button>
                      </CreateItemButton>
                    </form>
                  </NFTMiddle>
                </Gs.W605px>
                <Gs.W275px>
                  <Sticky topOffset={30}>
                    <NFTRight>
                      <NFTtitle>
                        <h4>Preview</h4>
                        <p>Your NFT look like that on Marketplace</p>
                      </NFTtitle>
                      <NFTfourbox className="nftnift">
                        <NFTCard nftObj={nftObj} />
                      </NFTfourbox>
                      {/* <NFTfourbox>
                        <div className='NFT-home-box'>
                          <NFTImgBX>
                            {' '}
                            <img src={NFT2} alt='' />{' '}
                          </NFTImgBX>
                          <div className='NFT-home-box-inner'>
                            <h4>
                              Artwork name / title dolor lorem ipsum sit
                              adipiscing
                            </h4>
                            <CollectionBar>
                              <p>
                                25 <span>of 2500</span>
                              </p>
                              <p>
                                <Link to='/'>
                                  See the collection{' '}
                                  <i className='fas fa-angle-right'></i>
                                </Link>
                              </p>
                            </CollectionBar>
                            <Edition className='edition2'>
                              <div className='ed-box'>
                                <p>Current bid</p>
                                <h3>0.00 BNB</h3>
                              </div>
                              <div className='ed-box'>
                                <p>Ending in</p>
                                <h3>13h 12m 11s</h3>
                              </div>
                            </Edition>
                            <UserImgName>
                              <img src={UserImg} alt='' />
                              @username
                            </UserImgName>
                          </div>
                        </div>
                      </NFTfourbox> */}
                    </NFTRight>
                  </Sticky>
                </Gs.W275px>
              </Gs.W880px>
            </NFTminting>
          </Gs.Container>
        </div>
        <Collapse
          isOpen={this.state.isOpen4}
          className={
            "app__collapse " + (this.state.isOpen4 ? "collapse-active" : "")
          }
        >
          <NFTModal toggle={this.toggle} />
        </Collapse>
      </Gs.MainSection>
    );
  }
  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}
// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .JCSB {
    justify-content: space-between;
  }
`;

const NFTminting = styled(FlexDiv)`
  align-items: flex-start;
  position: relative;
  margin: 60px 0px;
  .sticky {
    top: 20px !important;
  }
  .displayflex {
    display: flex;
    flex-wrap: wrap;
  }
`;

const NFTLeft = styled.div`
  margin: 0px 10px;
  .active {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.8px;
    margin: 0px 0px 15px;
    border-bottom: 3px solid #000;
    padding-bottom: 5px;
    display: inline-block;
  }
  a {
    display: block;
    margin: 0px 0px 22px;
    font-size: 18px;
    color: rgb(0 0 0 / 30%);
    font-weight: 600;
    letter-spacing: -0.8px;
    :hover {
      color: rgb(0 0 0 / 60%);
    }
    &.AdminLink {
      color: rgb(0 186 188 / 30%);
      :hover {
        color: rgb(0 186 188 / 60%);
      }
    }
  }
`;

const NFTRight = styled.div`
  margin: 0px 10px;
`;

// const NFTImgBX = styled(FlexDiv)`
//   width: 100%;
//   height: 253px;
//   border-radius: 10px 10px 0 0;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

const NFTtitle = styled.div`
  h4 {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1.07px;
    margin: 0px 0px 9px;
    &.mt-30 {
      margin-top: 30px;
    }
    &.text-till-blue {
      color: #00babc;
    }
  }
  p {
    color: #000000;
    font-size: 16px;
    letter-spacing: -0.8px;
    margin: 0px 0px 20px;
    &.mb-30 {
      margin-bottom: 30px;
    }
  }
`;

const NFTfourbox = styled(FlexDiv)`
  img.main {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .NFT-home-box {
    border-radius: 10px;
    border: 1px solid #dddddd;
    .NFT-home-box-inner {
      padding: 20px 15px;
      h4 {
        margin: 0px 0px 10px;
        font-size: 18px;
        color: #000000;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.67px;
      }
    }
  }
`;

Gs.W25V2 = styled(Gs.W25V2)`
  ${NFTfourbox}.nftnift & {
    width: 100%;
  }
`;

Gs.TenpxGutter = styled(Gs.TenpxGutter)`
  ${NFTfourbox}.nftnift & {
    margin: 0px;
  }
`;

// const Edition = styled(FlexDiv)`
//   justify-content: space-between;
//   background-color: #eef2f7;
//   border-radius: 10px;
//   padding: 10px 15px;
//   margin: 0px 0px 20px;
//   .ed-box {
//     p {
//       color: #8e9194;
//       font-size: 10px;
//       letter-spacing: -0.6px;
//       font-weight: 600;
//       margin: 0px 0px 5px;
//     }
//     h3 {
//       color: #000;
//       font-size: 16px;
//       letter-spacing: -0.89px;
//       font-weight: 700;
//       margin: 0px;
//       span {
//         font-size: 10px;
//         font-weight: 300;
//         letter-spacing: -0.44px;
//       }
//     }
//   }
// `;

// const UserImgName = styled(FlexDiv)`
//   justify-content: flex-start;
//   color: #000;
//   font-size: 14px;
//   letter-spacing: -0.7px;
//   font-weight: 600;
//   margin: 0px;
//   img {
//     border-radius: 50%;
//     margin-right: 10px;
//     width: 32px;
//     height: 32px;
//   }
// `;

// const CollectionBar = styled(FlexDiv)`
//   justify-content: space-between;
//   margin-bottom: 20px;
//   p {
//     font-size: 14px;
//     letter-spacing: -0.62px;
//     font-weight: 600;
//     margin: 0px;
//     color: #000;
//     span {
//       font-size: 12px;
//       letter-spacing: -0.53px;
//       font-weight: 300;
//     }
//     a {
//       font-size: 10px;
//       letter-spacing: -0.5px;
//       font-weight: 600;
//       color: #000;
//       :hover {
//         color: #555;
//         text-decoration: underline;
//       }
//     }
//   }
// `;

const NFTMiddle = styled.div`
  margin: 0px 40px;
`;

const NFTForm = styled.div`
  position: relative;
  .label-line {
    margin: 0px 0px 6px;
    label {
      font-size: 16px;
      color: #8e9194;
      letter-spacing: -0.8px;
      font-weight: 600;
    }
    span {
      color: #8e9194;
      font-size: 12px;
      letter-spacing: -0.6px;
      margin-left: 6px;
    }
    p {
      color: #8e9194;
      font-size: 14px;
      letter-spacing: -0.7px;
      font-weight: 300;
      margin: 0px;
    }
  }
  input,
  select {
    width: 100%;
    height: 54px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 18px;
    color: #000000;
    letter-spacing: -0.9px;
    margin: 0px 0px 30px;
    ::placeholder {
      color: #000;
      opacity: 20%;
    }
  }
  .iLeft {
    position: relative;
    i {
      position: absolute;
      left: 15px;
      top: 16px;
      font-size: 18px;
      color: #000;
      font-weight: bold;
    }
    input {
      padding-left: 45px;
    }
  }
  .iRight {
    position: relative;
    i {
      position: absolute;
      right: 15px;
      top: 17px;
      font-size: 18px;
      color: #000;
      font-weight: bold;
    }
    input {
      padding-right: 45px;
    }
  }
  .errorinput {
    position: relative;
    input {
      border-color: #ff2a44;
    }
    p.error {
      color: #ff2a44;
      font-size: 12px;
      letter-spacing: -0.6px;
      font-weight: 600;
      margin: 0px;
      position: absolute;
      top: 18px;
      right: 15px;
    }
  }
`;

const FileuploadBox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin: 0px 0px 60px;
  input {
    display: none;
  }
  .custom-file-upload {
    border: 1px solid #000000;
    border-radius: 15px;
    font-size: 14px;
    color: #000;
    letter-spacing: -0.5px;
    padding: 13px 28px;
    cursor: pointer;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const CreateItemButton = styled.div`
  margin: 50px 0px 80px;
  button {
    font-size: 14px;
    color: #fff;
    letter-spacing: -0.5px;
    padding: 13px 60px;
    cursor: pointer;
    border-radius: 15px;
    background-color: rgb(0 0 0 / 30%);
    :hover {
      background-color: #000;
    }
  }
`;

const CustomRadio1 = styled(FlexDiv)`
  justify-content: flex-start;
  margin-bottom: 30px;
  .radio-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 54px;
    width: calc(170px - 5px);
    margin-right: 10px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.9px;
    color: #000;
    img {
      margin-right: 5px;
    }
  }
  .radio-container input {
    position: absolute;
    left: 0;
    opacity: 0;
    cursor: pointer;
    margin: 0px;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 54px;
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #dddddd;
  }
  .radio-container input:checked ~ .checkmark {
    border: 1px solid #00babc;
  }
`;

const CustomCheckbox1 = styled(FlexDiv)`
  justify-content: flex-start;
  margin-bottom: 30px;
  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 54px;
    width: calc(170px - 5px);
    margin-right: 10px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.9px;
    color: #000;
    img {
      margin-right: 5px;
    }
  }
  .checkbox-container input {
    position: absolute;
    left: 0;
    opacity: 0;
    cursor: pointer;
    margin: 0px;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 54px;
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #dddddd;
  }
  .checkbox-container input:checked ~ .checkmark {
    border: 1px solid #00babc;
  }
`;

const CollectionSelect = styled(FlexDiv)`
  margin-bottom: 60px;
  position: relative;
  select {
    margin-bottom: 0px;
    -webkit-appearance: none;
    background: url(${DDdownA}) no-repeat 97% 55%;
    option {
      border-radius: 10px;
      box-shadow: 0 10px 20px 0 rgb(0 0 0 / 30%);
      margin: 30px;
    }
  }
  button {
    font-size: 14px;
    letter-spacing: -0.5px;
    color: #000;
    font-weight: 700;
    border-radius: 15px;
    border: 1px solid #000000;
    padding: 16px 20px;
    margin-left: 10px;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const AccountBX = styled(FlexDiv)`
  position: absolute;
  top: 37px;
  right: 0px;
  width: auto;
  justify-content: flex-end;
  padding: 8px 10px;
  z-index: 101;
  cursor: pointer;
  & i {
    width: 50px;
    height: 50px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  & span {
    font-size: 18px;
    letter-spacing: -0.9px;
    font-weight: 700;
    color: #000;
    display: block;
    text-align: right;
    line-height: 16px;
    padding-right: 8px;
    span {
      font-size: 10px;
      color: #b3b3b3;
      width: 100%;
      padding-right: 0;
    }
  }
`;

const DDBtnbar02 = styled(FlexDiv)`
  width: 100%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #eef2f7;
    & i {
      width: 34px;
      height: 34px;
      margin: 0 8px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    & span {
      margin-left: auto;
    }
    &:nth-last-child(01) {
      border-bottom: 0px;
    }
    &:hover {
      background-color: #d9f5f5;
    }
  }
`;

const DDContainer = styled(FlexDiv)`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  top: calc(100% + 30px);
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 100;
  &.ver2 {
    width: 150px;
    left: auto;
    transform: translateX(0);
    right: 0;
    top: calc(100% + 20px);
    padding: 0;
  }
`;

const AlertNote = styled.div`
  background-color: #ffe5e9;
  border: 1px solid #ff2a44;
  border-radius: 10px;
  margin: 0px 0px 40px;
  padding: 17px 15px;
  p {
    margin: 0px;
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.8px;
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getWeb3: () => dispatch(actions.getWeb3()),
    enableMetamask: () => dispatch(actions.enableMetamask()),
    addNFT: (obj) => dispatch(actions.addNFT(obj)),
    getCollectionList: () => dispatch(actions.getCollectionList()),
    getCategoryList: () => dispatch(actions.getCategoryList()),
    getNFTContractInstance: () => dispatch(actions.getNFTContractInstance()),
  };
};
const mapStateToProps = (state) => {
  return {
    web3Data: state.fetchWeb3Data,
    networkId: state.fetchNetworkId,
    isMetamaskEnabled: state.fetchMetamask,
    createdNFTID: state.fetchNewNFTId,
    categoryList: state.fetchCategoryList,
    collectionList: state.fetchCollectionList,
    authData: state.fetchAuthData,
    nftContractInstance: state.fetchNFTContractInstance,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(NFTPage);
