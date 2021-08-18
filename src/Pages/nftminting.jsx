import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
import { HashLink as Link } from "react-router-hash-link";
import Sticky from "react-sticky-el";
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
  getFileType,
} from "../helper/functions";
import { LookoutMetrics } from "aws-sdk";
import { web3 } from "../web3";
import { actions } from "../actions";
import { Context } from '../Component/wrapper';
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Autosuggest from "react-autosuggest";
import Autosuggestion from "../Component/autoSuggestion";
import MintNFTPopup from "../Component/Modals/mintNFTPopup";
import NFT3 from "../Assets/images/nft3.jpg";
import AudioCover from "../Assets/images/audio-square.jpg";
import VideoCover from "../Assets/images/video-square.jpg";

import Scrollspy from "react-scrollspy";

class NFTPage extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      web3Data: {
        isLoggedIn: false,
        accounts: [],
      },
      nftObj: {
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
      },
      suggestionVAl: [],
      fileType: 'image',
      error: { isError: false, msg: "", isCocreatorError: false },
      mintNFTStatus: "",
    };
  }
  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
  }

  async componentDidUpdate(prevProps, prevState) {
    let {
      web3Data,
      createdNFTID,
      updatedNFTID,
      collectionList,
      categoryList,
    } = this.props;

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
    if (createdNFTID !== prevProps.createdNFTID) {
      this.setState({ mintNFTStatus: "" });
    }
    if (updatedNFTID !== prevProps.updatedNFTID) {
      if (!updatedNFTID.status) {
        this.setState({ mintNFTStatus: "error" });
      } else {
        this.setState({ mintNFTStatus: "" });
      }
    }
  }

  async componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    let {
      web3Data,
      categoryList,
      collectionList,
      nftContractInstance,
    } = this.props;
    if (this.props.match.params.id) {
      // this.props.getSingleNFTDetails(this.props.match.params.id); // fetch the single nft details
      const NFTDetails = await actions.getSingleNFTDetails(this.props.match.params.id)
      if (NFTDetails) {
        // this.setState({ NFTDetails: NFTDetails })
        this.setState({
          nftObj: {
            ...this.state.nftObj,
            id: NFTDetails.id,
            title: NFTDetails.title,
            description: NFTDetails.description,
            coCreatorUserName: NFTDetails.coCreator?.userId?.id,
            percentShare: NFTDetails.coCreator?.percentage? NFTDetails.coCreator.percentage: 0,
            category: NFTDetails.category
              ? NFTDetails.category.filter((cat) => cat).map((catt) => catt.id)
              : [],
            collection: NFTDetails.collectionId ? NFTDetails.collectionId.id : "",
            saleState: `${NFTDetails.saleState}`,
            auctionTime: `${NFTDetails.auctionTime}`,
            edition: `${NFTDetails.edition}`,
            price: `${NFTDetails.price}`,
            digitalKey: NFTDetails.unlockContent ? NFTDetails.digitalKey : "",
            imgSrc: NFTDetails.image.compressed,
            image: NFTDetails.image,
          },
        });
        let fileType = getFileType(NFTDetails.image.compressed);
        this.setState({ fileType: fileType })
      }
    }
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

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      if (this.state.isOpen1) {
        this.setState({ isOpen1: false });
      }
    }
  }

  mintNFT = async (_tokenURI) => {
    this.setState({ mintNFTStatus: "initiate" });
    const { web3Data, nftObj, suggestionVAl } = this.state;
    const obj = [
      nftObj.edition,
      this.props.createdNFTID ? this.props.createdNFTID._id : nftObj.id,
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
      let fileType = e.target.files[0].type;
      if (!fileType.search('image'))
        this.setState({ fileType: 'image' })
      if (!fileType.search('video'))
        this.setState({ fileType: 'video' })
      if (!fileType.search('audio'))
        this.setState({ fileType: 'audio' })
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
      nftFile,
      description,
    } = this.state.nftObj;
    if (!title) this.setError("Please enter the Title", true);
    if (!description) this.setError("Please enter the description", true);
    else if (!nftFile && !this.props.match.params.id)
      this.setError("Please select your file", true);
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
  async createNFT(e) {
    e.preventDefault();
    const checked = this.checkFormErrors();
    if (checked) {
      this.setState({ mintNFTStatus: "progress1" }, () => this.toggle(3));
      const { nftObj } = this.state;
      const { nftFile, compressionRequired } = this.state.nftObj;
      let image = nftObj.image;
      let compressedNFTFile = nftFile;

      if (compressionRequired) {
        compressedNFTFile = await compressImage(nftFile);
      }

      if (this.props.match.params.id) {
        if (nftFile) {
          await services.removeFileOnBucket(nftObj.image.compressed); // remove the previous image
          await services.removeFileOnBucket(nftObj.image.original); // remove the previous image
          const url = await services.uploadFileOnBucket(nftFile, "nft"); // upload the image
          const comUrl = await services.uploadFileOnBucket(
            compressedNFTFile,
            "compressedNft",
            true
          ); // upload the image
          image = {
            original: url,
            compressed: comUrl,
          };
        }
      } else {
        const url = await services.uploadFileOnBucket(nftFile, "nft"); // upload the image
        const comUrl = await services.uploadFileOnBucket(
          compressedNFTFile,
          "compressedNft",
          true
        ); // upload the image
        image = {
          original: url,
          compressed: comUrl,
        };
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

      if (this.props.match.params.id) {
        this.props.updateNFT(dataObj); // update nft api called
      } else {
        this.props.addNFT(dataObj); // add new nft api called
      }
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
    const { categoryList, collectionList, error,fileType } = this.state;
    const nftObj = this.state.nftObj;
    let context = this.context;
    console.log('- file Type ? ', fileType)
    return (
      <Gs.MainSection>
        <div style={{ minHeight: "100vh", width: "100%" }}>
          <Gs.Container>
            <NFTminting>
              <Gs.W200px>
                <Sticky>
                  <NFTLeft>
                    <Scrollspy
                      items={[
                        "itemDecription",
                        "creator",
                        "collection",
                        "marketplace",
                        "unlockable",
                      ]}
                      currentClassName="active"
                    >
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
                    </Scrollspy>
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
                      onSubmit={(e) => this.createNFT(e)}
                    >
                      <NFTForm>
                        <div className="label-line">
                          <label>
                            <FormattedMessage id="title" defaultMessage="Title" />
                          </label>
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
                          <label><FormattedMessage id="description" defaultMessage="Description" /></label>
                          <span><FormattedMessage id="optional" defaultMessage="optional" /></span>
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
                          <label>
                            <FormattedMessage id="upload_file" defaultMessage="Upload File" />
                          </label>
                          <FlexDiv className="JCSB">
                            <p>Upload PNG, GIF, WEBP, MP4 or MP3 files.</p>
                            <p>
                              <b>Max 30 mb.</b>
                            </p>
                          </FlexDiv>
                        </div>
                        <FileuploadBox>
                          <label className="custom-file-upload">
                            <input type="file" name="nftFile"
                              accept="video/*, image/*, audio/*"
                            />
                            <FormattedMessage id="choose" defaultMessage="Choose" />
                          </label>
                          <input type="file" placeholder="Choose"
                            accept="video/*, image/*, audio/*"
                          />
                        </FileuploadBox>
                      </NFTForm>
                      <NFTtitle id="creator">
                        <h4 className="mt-30">Co-Creator</h4>
                        <p className="mb-30">
                          <FormattedMessage id="co_creator_label" defaultMessage="You can share the revenue streams from the NFT with a collaborator" />
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <div className="label-line">
                          <label>Co-Creator Username</label>
                        </div>
                        <div
                          className={`iLeft ${error.isError &&
                            error.isCocreatorError &&
                            "errorinput"
                            }`}
                        >
                          <i>@</i>
                          <Autosuggestion
                            setSuggestionValue={this.setSuggestionValue}
                            setError={this.setError}
                            username={
                              this.props.NFTDetails?.coCreator?.userId?.username
                            }
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
                            <FormattedMessage id="percentage_label" defaultMessage="Please enter the percentage of sales revenue that should go to the co-creator." />
                          </p>
                        </div>
                        <div className="iRight">
                          <input
                            type="text"
                            name="percentShare"
                            placeholder="0"
                            value={nftObj.percentShare}
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
                              <img src={category.image} alt="" />
                              {capitalizeFirstLetter(context.locale === 'tr' ? category.categoryName.tu : category.categoryName.en)}
                              <input
                                type="checkbox"
                                name="category"
                                checked={
                                  nftObj.category.filter(
                                    (obj) => obj === category.id
                                  ).length > 0
                                    ? true
                                    : false
                                }
                                value={category._id}
                              />
                              <span className="checkmark"></span>
                            </label>
                          ))}
                          {/* <label className="checkbox-container">
                            <img src={Celebrity} alt="" />
                            Celebrity
                            <input
                              type="checkbox"
                              name="category"
                              value="celebrity"
                            />
                            <span className="checkmark"></span>
                          </label> */}
                          {/* <label className="checkbox-container">
                            <img src={Sport} alt="" />
                            Sport
                            <input
                              type="checkbox"
                              name="category"
                              value="sport"
                            />
                            <span className="checkmark"></span>
                          </label> */}
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
                                <option value={collection._id} key={key}>
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
                          <label>
                            <FormattedMessage id="sale_status" defaultMessage="Sale Status" />
                          </label>
                        </div>
                        <CustomRadio1>
                          <label className="radio-container">
                            <img src={Auction} alt="" /> Auction
                            <input
                              type="radio"
                              name="saleState"
                              value="AUCTION"
                              checked={
                                nftObj.saleState === "AUCTION" ? true : false
                              }
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio-container">
                            <img src={Money} alt="" /> Buy now
                            <input
                              type="radio"
                              name="saleState"
                              value="BUY"
                              checked={
                                nftObj.saleState === "BUY" ? true : false
                              }
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
                            <input
                              type="radio"
                              name="auctionTime"
                              value="12"
                              checked={nftObj.auctionTime === "12"}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio-container">
                            24 hours
                            <input
                              type="radio"
                              name="auctionTime"
                              value="24"
                              checked={nftObj.auctionTime === "24"}
                            />
                            <span className="checkmark"></span>
                          </label>
                          <label className="radio-container">
                            48 hours
                            <input
                              type="radio"
                              name="auctionTime"
                              value="48"
                              checked={nftObj.auctionTime === "48"}
                            />
                            <span className="checkmark"></span>
                          </label>
                        </CustomRadio1>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label><FormattedMessage id="edition" defaultMessage="EDITION" /></label>
                          <p>
                            <FormattedMessage id="edition_label" defaultMessage="Currently creators can mint up to 500 editions of an NFT." />
                          </p>
                        </div>
                        <input
                          type="text"
                          placeholder="0"
                          name="edition"
                          value={nftObj.edition}
                        />
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label><FormattedMessage id="price" defaultMessage="Price" /></label>
                        </div>
                        <input
                          type="text"
                          placeholder="0.00"
                          name="price"
                          value={nftObj.price}
                        />
                        <AccountBX onClick={() => this.toggle(1)} ref={this.wrapperRef}>
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
                        <h4 className="mt-30"><FormattedMessage id="unlock_content_label" defaultMessage="Unlockable content message" /></h4>
                        <p className="mb-30">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                          <FormattedMessage id="content_label" defaultMessage="Your text below will be shared with the buyer of the NFT only." />
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <div className="label-line">
                          <label>
                            <FormattedMessage id="key_label" defaultMessage="You can use this area for private messages, promo codes, links, etc." />
                          </label>
                        </div>
                        <input
                          type="text"
                          placeholder="Type something…"
                          name="digitalKey"
                          defaultValue={nftObj?.digitalKey}
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
                        <button type="submit">
                          {nftObj?.id ? `Update` : `Create`} Item
                        </button>
                      </CreateItemButton>
                    </form>
                  </NFTMiddle>
                </Gs.W605px>
                <Gs.W275px>
                  <Sticky topOffset={30}>
                    <NFTRight>
                      <NFTtitle>
                        <h4>
                          <FormattedMessage id="preview" defaultMessage="Preview" />
                        </h4>
                        <p>
                          <FormattedMessage id="preview_label" defaultMessage="Your NFT look like that on Marketplace" />
                        </p>
                      </NFTtitle>
                      <NFTfourbox className="nftnift">

                        <Gs.W25V2>
                          <Gs.TenpxGutter>
                            <div className="NFT-home-box">
                              <NFTImgBX>
                                {fileType === 'image' ?
                                  <motion.img
                                    initial={{ opacity: 0.2 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    key={nftObj.imgSrc}
                                    src={nftObj.imgSrc}
                                    exit={{ opacity: 0 }}
                                  /> : ``}
                                {fileType === 'audio' ? 
                                  <ReactAudioPlayer
                                    src={nftObj.imgSrc}
                                    autoPlay
                                    controls /> : ``}
                                {fileType === 'video' ? 
                                  <ReactPlayer
                                      controls={true}
                                      url={nftObj.imgSrc}
                                      playing={true}
                                  />: ``}
                              </NFTImgBX>
                              <div className="NFT-home-box-inner">
                                 <h4>
                                  {nftObj.title
                                    ? nftObj.title
                                    : "Artwork name / title dolor lorem ipsum sit adipiscing"}
                                </h4>
                                <CollectionBar>
                                  <p>
                                    {0} <span>of {nftObj.edition ? nftObj.edition : 0}</span>
                                  </p>
                                  {nftObj.collectionId?._id ? (
                                    <p>
                                      <Link to={`/collection-detail/${nftObj.collectionId?._id}`}>
                                        <FormattedMessage id="see_the_collections" defaultMessage="See the collection" />
                                        <i className="fas fa-angle-right"></i>
                                      </Link>
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </CollectionBar>
                                <Edition className="edition2 JCSB">
                                  <div className="ed-box">
                                    <p>{nftObj.saleState === "BUY" ? null : nftObj.auctionTime
                                      && nftObj.saleState === "BUY" ? null : nftObj.auctionTime > new Date().getTime() / 1000 ?
                                      <FormattedMessage id="current_bid" defaultMessage="Current bid" />:
                                      <FormattedMessage id="price" defaultMessage="Price" />}</p>
                                  <h3>{nftObj.price} BNB</h3>
                                  </div>
                                  <div className="ed-box">
                                    {
                                      (nftObj.saleState === "BUY" ? null : nftObj.auctionTime) ?
                                        <><p><FormattedMessage id="ending_in" defaultMessage="Ending in" /></p> <h3>{nftObj.saleState === "BUY" ? null : nftObj.auctionTime}h 00m 00s</h3></>
                                      : <><button><FormattedMessage id="buy_now" defaultMessage="Buy now" /> </button></>
                                    }
                                   </div>
                                </Edition>
                                <UserImgName>
                                  <img src={this.props.authData?.data.profile ? this.props.authData?.data.profile : UserImg} alt="" />
                                  {this.props.authData?.data.username ? `@${this.props.authData?.data.username}` : this.props.authData?.data.name}
                                </UserImgName>
                              </div>
                            </div>
                          </Gs.TenpxGutter>
                        </Gs.W25V2>

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
          {/* <MintNFTPopup mintNFT={this.mintNFT} toggle={this.toggle} /> */}
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
  ul {
    padding-left: 0px;
    margin: 0px;
  }
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

const NFTtitle = styled.div`
  h4 {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1.07px;
    margin: 0px 0px 9px;
    &.mt-30 {
      margin-top: 30px;
      ${Media.sm} {
        margin-top: 10px;
      }
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
        line-height: 22px;
        letter-spacing: -0.67px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        min-height:44px;
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

const NFTMiddle = styled.div`
  margin: 0px 40px;
  ${Media.lg} {
    margin: 0px 15px;
  }
  ${Media.sm} {
    margin: 0px;
  }
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
  ${Media.sm} {
    margin-bottom: 40px;
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
  ${Media.sm} {
    margin: 30px 0px 40px;
    text-align: center;
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
    ${Media.lg} {
      width: calc(155px - 5px);
      margin: 0px 10px 10px 0px;
    }
    ${Media.sm} {
      width: 100%;
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
    margin:0px 10px 10px 0px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.9px;
    color: #000;
    img {
      margin-right: 5px;
      width: 25px;
    }
    ${Media.lg} {
      width: calc(155px - 5px);
      margin: 0px 10px 10px 0px;
    }
    ${Media.sm} {
      width: 100%;
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
    ${Media.lg}{
      padding:16px 10px;
    }
    ${Media.md} {
      padding: 16px 10px;
    }
    ${Media.sm} {
      padding: 13px 25px;
      margin-top: 10px;
    }
  }
  ${Media.sm} {
    margin-bottom: 40px;
    display: block;
  }
`;

Gs.W20 = styled(Gs.W20)`
  ${CollectionSelect} & {
    ${Media.md} {
      width: 20%;
    }
    ${Media.sm} {
      width: auto;
      text-align: center;
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
const NFTImgBX = styled(FlexDiv)`
  width: 100%;
  height: 253px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const UserImgName = styled(FlexDiv)`
  justify-content: flex-start;
  color: #000;
  font-size: 14px;
  letter-spacing: -0.7px;
  font-weight: 600;
  margin: 0px;
  img {
    border-radius: 50%;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`;

const CollectionBar = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    letter-spacing: -0.62px;
    font-weight: 600;
    margin: 0px;
    color: #000;
    span {
      font-size: 12px;
      letter-spacing: -0.53px;
      font-weight: 300;
    }
    a {
      font-size: 10px;
      letter-spacing: -0.5px;
      font-weight: 600;
      color: #000;
      :hover {
        color: #555;
        text-decoration: underline;
      }
    }
  }
`;
const Edition = styled(FlexDiv)`
  justify-content: space-between;
  background-color: #eef2f7;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 0px 0px 20px;
  .ed-box {
    p {
      color: #8e9194;
      font-size: 10px;
      letter-spacing: -0.6px;
      font-weight: 600;
      margin: 0px 0px 5px;
    }
    h3 {
      color: #000;
      font-size: 16px;
      letter-spacing: -0.89px;
      font-weight: 700;
      margin: 0px;
      span {
        font-size: 10px;
        font-weight: 300;
        letter-spacing: -0.44px;
      }
    }
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

    updateNFT: (obj) => dispatch(actions.updateNFT(obj)),
    getSingleNFTDetails: (id) => dispatch(actions.getSingleNFTDetails(id)),
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

    NFTDetails: state.fetchSingleNFTDetails,
    updatedNFTID: state.fetchUpdatedNFTId,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(NFTPage);