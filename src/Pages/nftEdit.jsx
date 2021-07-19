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
// import CreateCollection from "../Component/Modals/createCollection";

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
import CreateCollection from "../Component/Modals/createCollection";
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
import MintNFTPopup from "../Component/Modals/mintNFTPopup";
import NFT3 from "../Assets/images/nft3.jpg";

class EditNFTPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      web3Data: {
        isLoggedIn: false,
        accounts: [],
      },
      nftObj: {
        id: "",
        title: "",
        description: "",
        coCreatorUserName: "",
        percentShare: 0,
        category: [],
        collection: "",
        saleState: "",
        auctionTime: "0",
        edition: 0,
        price: "0.00",
        digitalKey: "",
        nftFile: undefined,
        imgSrc: NFT3,
        categoryList: null,
        collectionList: [],
        image: null,
      },
      NFTDetails: false,
      suggestionVAl: [],
      error: { isError: false, msg: "", isCocreatorError: false },
      mintNFTStatus: "",
    };
  }
  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
  }

  async componentDidUpdate(prevProps, prevState) {
    let { web3Data, updatedNFTID, collectionList, categoryList, NFTDetails } = this.props;

    if (NFTDetails !== prevProps.NFTDetails) {
      this.setState({
        nftObj: {
          ...this.state.nftObj,
          id: NFTDetails.id,
          title: NFTDetails.title,
          description: NFTDetails.description,
          coCreatorUserName: NFTDetails.coCreator.userId,
          percentShare: NFTDetails.coCreator.percentage,
          category: NFTDetails.category ? NFTDetails.category.filter(cat => cat).map(catt => catt.id) : [],
          collection: NFTDetails.collectionId ? NFTDetails.collectionId.id : [] ,
          saleState: `${NFTDetails.saleState}`,
          auctionTime: `${NFTDetails.auctionTime}`,
          edition: `${NFTDetails.edition}`,
          price: `${NFTDetails.price}`,
          digitalKey: NFTDetails.unlockContent ? NFTDetails.digitalKey : "",
          imgSrc: NFTDetails.image.compressed,
          image: NFTDetails.image
        } 
      })
    }

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
          // console.log("will do something in future");
        }
      });
    }
    if (collectionList !== prevProps.collectionList)
      this.setState({ collectionList });
    if (categoryList !== prevProps.categoryList)
      this.setState({ categoryList });
    if (updatedNFTID !== prevProps.updatedNFTID) {
      this.setState({ mintNFTStatus: "" });
    }
  }

  componentDidMount() {
    let {
      web3Data,
      categoryList,
      collectionList,
      nftContractInstance,
    } = this.props;
    this.props.getSingleNFTDetails(this.props.match.params.id); // fetch the single nft details
    if (!nftContractInstance) this.props.getNFTContractInstance();
    if (!categoryList) this.props.getCategoryList();
    else this.setState({ categoryList });
    if (collectionList) this.setState({ collectionList });
    else this.props.getCollectionList();
    if (!web3Data) {
      // this.props.getWeb3();
    } else {
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          //somethng
        }
      });
    }
  }

  mintNFT = async (_tokenURI) => {
    this.setState({ mintNFTStatus: "initiate" });
    const { web3Data, nftObj, suggestionVAl } = this.state;
    const obj = [
      nftObj.edition,
      nftObj.id,
      web3Data.accounts[0],
      suggestionVAl.walletAddress
        ? suggestionVAl.walletAddress
        : "0x0000000000000000000000000000000000000000",
      suggestionVAl.walletAddress ? Number(100 - nftObj.percentShare) : 100,
      suggestionVAl.walletAddress ? Number(nftObj.percentShare) : 0,
      nftObj.saleState === "BUY" ? "0" : "1",
      nftObj.saleState === "BUY" ? 0 : Number(nftObj.auctionTime),
      web3.utils.toWei(nftObj.price, "ether"),
      "0",
    ];
    await this.props.nftContractInstance.methods
      .mintToken(...obj)
      .send({ from: web3Data.accounts[0] })
      .on("transactionHash", (hash) => {
        this.setState({ mintNFTStatus: "progress" });
      })
      .on("receipt", (receipt) => {
        this.setState({ mintNFTStatus: "complete" });
      })
      .on("error", (error) => {
        this.setState({ mintNFTStatus: "complete" });
      });
  };

  formchange(e) {
    const nftObj = { ...this.state.nftObj };
    if (e.target.name === "coCreatorUserName") {
      // this.setState({ suggestionVAl: e.target.value });
      if (e.target.value.length >= 3) {
        // console.log("t", e.target.value);
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
  checkFormErrors() {
    const {
      title,
      percentShare,
      category,
      saleState,
      auctionTime,
      edition,
      price,
    } = this.state.nftObj;
    if (!title) this.setError("Please enter the Title", true);
    else if (this.state.suggestionVAl.length && !percentShare)
      this.setError("Please set the percent share of your Co-creator", true);
    else if (!category.length)
      this.setError(
        "Please select atleast 1 category.You can choose up to 2.",
        true
      );
    else if (category.length >= 3)
      this.setError("You can choose up to 2 category.", true);
    else if (!saleState) this.setError("Please select sale state.", true);
    else if (saleState === "AUCTION" && !+auctionTime)
      this.setError("Please select the auction time.", true);
    else if (!edition || (+edition < 0 || +edition) > 20)
      this.setError("Edition ranges between 1 to 20", true);
    else if (!+price) this.setError("Please enter the price", true);
    else {
      this.setError("", false);
      return true;
    }
  }
  async submitNFT(e) {
    e.preventDefault();
    const checked = this.checkFormErrors();
    if (checked) {
      this.setState({ mintNFTStatus: "progress1" }, () => this.toggle(3));
      const { nftObj } = this.state;
      const { nftFile, compressionRequired } = this.state.nftObj;
      let compressedNFTFile = nftFile;
      let image = nftObj.image;
      if (compressionRequired) {
        compressedNFTFile = await compressImage(nftFile); // compressed the uploaded image
      }
      if (nftFile) {
        await services.removeFileOnBucket(nftObj.image.compressed); // remove the previous image
        await services.removeFileOnBucket(nftObj.image.original); // remove the previous image
        const url = await services.uploadFileOnBucket(nftFile, "nft"); // upload the image
        const comUrl = await services.uploadFileOnBucket(compressedNFTFile, "compressedNft", true); // upload the image
        image = {
          original: url,
          compressed: comUrl
        }
      }
      let dataObj = {
        id: nftObj.id,
        title: nftObj.title,
        description: nftObj.description,
        image: image,
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
      if (this.state.suggestionVAl) {
        dataObj.coCreator = {
          userId: this.state.suggestionVAl.id,
          percentage: nftObj.percentShare,
        };
      }
      if (nftObj.digitalKey) {
        dataObj.unlockContent = true;
        dataObj.digitalKey = nftObj.digitalKey;
      }
      this.props.updateNFT(dataObj); // update nft api called
    }
  }

  setSuggestionValue = (val) => this.setState({ suggestionVAl: val });
  
  setError = (msg, toggleVal, isCocreator) => {
    this.setState({
      error: { isError: toggleVal, msg: msg, isCocreatorError: isCocreator },
    });
  };

  render() {
    function pointSelect(curr) {
      let hash = window.location.hash.substr(1);
      if (hash === curr) return "active";
      else return "inactive";
    }
    const { categoryList, collectionList, error } = this.state;
    const { nftObj } = this.state;

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
                  </NFTLeft>
                </Sticky>
              </Gs.W200px>
              <Gs.W880px className="displayflex">
                {error.isError && !error.isCocreatorError && (
                  <Gs.W605px>
                    <NFTMiddle>
                      <AlertNote>
                        <p>{error.msg}</p>
                      </AlertNote>
                    </NFTMiddle>
                  </Gs.W605px>
                )}
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
                      onSubmit={(e) => this.submitNFT(e)}
                    >
                      <NFTForm>
                        <div className="label-line">
                          <label>Title</label>
                        </div>
                        <input
                          type="text"
                          name="title"
                          defaultValue={nftObj.title}
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
                          defaultValue={nftObj.description}
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
                          <label className="custom-file-upload">
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
                        <div
                          className={`iLeft ${
                            error.isError &&
                            error.isCocreatorError &&
                            "errorinput"
                          }`}
                        >
                          <i>@</i>
                          <Autosuggestion
                            setSuggestionValue={this.setSuggestionValue}
                            setError={this.setError}
                          />
                          {error.isError && error.isCocreatorError && (
                            <p className="error">user doesn’t exist</p>
                          )}
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
                            defaultValue={nftObj.percentShare}
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
                          {categoryList?.map((category, key) => (
                            <label className="checkbox-container" key={key}>
                              <img src={Art} alt="" />
                              {capitalizeFirstLetter(category.categoryName)}
                              <input
                                type="checkbox"
                                name="category"
                                checked={nftObj.category.filter(obj => obj === category.id).length > 0 ? true:false}
                                value={category._id}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                        </CustomCheckbox1>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Collection</label>
                        </div>
                        <CollectionSelect>
                          <Gs.W80>
                            <select name="collection" value={nftObj.collection}>
                              <option>Select or Create</option>
                              {collectionList?.map((collection, key) => (
                                <option value={collection._id} key={key} >
                                  {capitalizeFirstLetter(collection.name)}
                                </option>
                              ))}
                            </select>
                          </Gs.W80>
                          <Gs.W20>
                            <button onClick={() => this.toggle(2)}>
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
                          <label className="radio-container">
                            <img src={Auction} alt="" /> Auction
                            <input
                              type="radio"
                              name="saleState"
                              value="AUCTION"
                              checked={nftObj.saleState === "AUCTION" ? true:false}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio-container">
                            <img src={Money} alt="" /> Buy now
                            <input type="radio"
                              name="saleState"
                              value="BUY"
                              checked={nftObj.saleState === "BUY" ? true:false}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </CustomRadio1>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Auction Time</label>
                        </div>
                        <CustomRadio1>
                          <label className="radio-container">
                            12 hours
                            <input type="radio" name="auctionTime" value="12"
                              checked={nftObj.auctionTime === "12"}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio-container">
                            24 hours
                            <input type="radio" name="auctionTime" value="24"
                              checked={nftObj.auctionTime === "24"}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio-container">
                            48 hours
                            <input type="radio" name="auctionTime" value="48"
                              checked={nftObj.auctionTime === "48"}
                            />
                            <span className="checkmark"></span>
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
                        <input type="text" placeholder="0" name="edition" value={nftObj.edition} />
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Price</label>
                        </div>
                        <input type="text" placeholder="0.00" name="price" value={nftObj.price} />
                        <AccountBX onClick={() => this.toggle(1)}>
                          <span>
                            BNB <img src={DDdownA} alt="" />
                          </span>
                          <Collapse
                            isOpen={this.state.isOpen1}
                            className={
                              "app__collapse collapse-css-transition  " +
                              (this.state.isOpen1 ? "collapse-active" : "")
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
                          defaultValue={nftObj.unlockContent?.digitalKey}
                        />
                      </NFTForm>

                      <CreateItemButton>
                        <button type="submit">Update Item</button>
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
                        <NFTCard
                          nftSold={0}
                          nftId={nftObj?.id}
                          collectionId={nftObj?.collectionId?._id}
                          auctionEndDate={
                            nftObj?.saleState == "BUY"
                              ? null
                              : nftObj?.auctionTime
                          }
                          nftImg={nftObj?.imgSrc}
                          title={nftObj?.title}
                          edition={nftObj?.edition}
                          price={nftObj?.price}
                          auctionTime={
                            nftObj?.saleState == "BUY"
                              ? null
                              : nftObj?.auctionTime
                          }
                          userImg={this.props.authData?.data.profile}
                          username={this.props.authData?.data.username}
                          previewCard={true}
                        />
                      </NFTfourbox>
                    </NFTRight>
                  </Sticky>
                </Gs.W275px>
              </Gs.W880px>
            </NFTminting>
          </Gs.Container>
        </div>
        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse " + (this.state.isOpen2 ? "collapse-active" : "")
          }
        >
          <CreateCollection toggle={this.toggle} />
        </Collapse>
        <Collapse
          isOpen={this.state.isOpen3}
          className={
            "app__collapse " + (this.state.isOpen3 ? "collapse-active" : "")
          }
        >
          <MintNFTPopup
            mintNFT={this.mintNFT}
            toggle={this.toggle}
            mintNFTStatus={this.state.mintNFTStatus}
          />
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
    updateNFT: (obj) => dispatch(actions.updateNFT(obj)),
    getCollectionList: () => dispatch(actions.getCollectionList()),
    getCategoryList: () => dispatch(actions.getCategoryList()),
    getNFTContractInstance: () => dispatch(actions.getNFTContractInstance()),
    getSingleNFTDetails: (id) => dispatch(actions.getSingleNFTDetails(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    web3Data: state.fetchWeb3Data,
    networkId: state.fetchNetworkId,
    isMetamaskEnabled: state.fetchMetamask,
    categoryList: state.fetchCategoryList,
    collectionList: state.fetchCollectionList,
    authData: state.fetchAuthData,
    nftContractInstance: state.fetchNFTContractInstance,
    NFTDetails: state.fetchSingleNFTDetails,
    updatedNFTID: state.fetchUpdatedNFTId,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(EditNFTPage);
