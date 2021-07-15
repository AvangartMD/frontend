import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Magnifypopup from "../Component/Modals/magnifyPopup";
import POSpopup from "../Component/Modals/putonsalepopup";
import PABpopup from "../Component/Modals/placebidpopup";
import Historypopup from "../Component/historypopup";
import SelectEdition from "../Component/selectedition";
import Collapse from "@kunukn/react-collapse";
import { web3 } from "../web3";
import NftdLimg from "../Assets/images/nftcard1.jpg";
import Redheart from "../Assets/images/Redheart.svg";
import Lock from "../Assets/images/icon-set-lock.svg";
import UserImg from "../Assets/images/user-img.jpg";
import redheartBorder from "../Assets/images/redheartBorder.svg";
import { actions } from "../actions";
import { connect } from "react-redux";
import Timer from "../Component/timer";
import { getContractInstance } from "../helper/functions";
import NftOwnerActions from "../Component/Modals/nftOwnerAction";
import Login from "../Component/Modals/login";
import getContractAddresses from "../contractData/contractAddress/addresses";

class NftDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen4: false,
      bnbUSDPrice: 0,
      bidDetails: {
        currentBidValue: "0",
        bidder: "0x0000000000000000000000000000000000000000",
      },
      ownerActionName: "",
      currentEdition: 1,
      saleMethod: { name: "placeBid", btnName: "Place a bid" },
      showTimer: false,
      loading: false,
      selectedNFTDetails: null,
      isApprovedForAll: false,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const { NFTDetails, isLiked, web3Data } = this.props;
    if (NFTDetails !== prevProps.NFTDetails) {
      if (NFTDetails.tokenId && NFTDetails.edition)
        this.fetchNFTDetails(NFTDetails.tokenId, NFTDetails.edition);
    }
    if (this.state.currentEdition != prevState.currentEdition) {
      this.fetchNFTDetails(this.state.currentEdition);
    }
    if (isLiked !== prevProps.isLiked) {
      this.setState({ loading: false });
    }
    if (web3Data.isLoggedIn !== prevProps.web3Data.isLoggedIn) {
      this.checkUserApproval(web3Data);
    }
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getSingleNFTDetails(this.props.match.params.id);
      this.props.getLikesCount(this.props.match.params.id);
      this.props.getIsLiked(this.props.match.params.id);
    }
    const string =
      "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd";
    await fetch(string)
      .then((resp) => resp.json())
      .then(async (data) => {
        this.setState({ bnbUSDPrice: data.binancecoin.usd });
      });
  }
  checkUserApproval = async (web3Data) => {
    const nftContractContractInstance = getContractInstance();
    const { escrowContractAddres } = getContractAddresses();

    const isApprovedForAll = await nftContractContractInstance.methods
      .isApprovedForAll(web3Data.accounts[0], escrowContractAddres)
      .call();
    this.setState({ isApprovedForAll });
  };
  setNFTBuyMethod = (bidDetails) => {
    const { NFTDetails, web3Data } = this.props;
    if (NFTDetails.saleState === "AUCTION") {
      if (NFTDetails.auctionEndDate < new Date().getTime() / 1000) {
        this.setState({ showTimer: false });
        if (+bidDetails.bidValue > 0) {
          if (bidDetails.bidder === web3Data.accounts[0]) {
            this.setState({
              saleMethod: { name: "claimAfterAuction", btnName: "Claim" },
            });
          } else this.setState({ saleMethod: { name: "", btnName: "Sold" } });
        } else
          this.setState({ saleMethod: { name: "buyNow", btnName: "Buy Now" } });
      } else {
        this.setState({
          saleMethod: { name: "placeBid", btnName: "Place a bid" },
          showTimer: true,
        });
      }
    } else {
      this.setState({
        saleMethod: { name: "buyNow", btnName: "Buy Now" },
        showTimer: false,
      });
    }
  };

  getEditionNumber = (NFTDetails) => {
    for (let i = 0; i < NFTDetails.editions.length; i++) {
      console.log("1");
    }
  };
  async fetchNFTDetails(_edition) {
    const { NFTDetails, authData, web3Data } = this.props;
    const escrowContractInstance = getContractInstance(true);

    const tokenID = NFTDetails.tokenId;
    let edition = _edition;
    if (!edition) {
      edition =
        NFTDetails.saleState === "BUY"
          ? this.getEditionNumber(NFTDetails)
          : NFTDetails.auctionEndDate <= new Date().getTime() / 1000
          ? this.getEditionNumber(NFTDetails)
          : 1;
    }
    const currentHolder = await escrowContractInstance.methods
      .currentHolder(+tokenID, this.state.currentEdition)
      .call();
    const bidDetails = await escrowContractInstance.methods
      .bid(+tokenID, this.state.currentEdition)
      .call();
    const soldEdition = NFTDetails.editions.find(
      ({ edition }) => edition == edition
    );
    let selectedNFTDetails;
    if (soldEdition)
      selectedNFTDetails = {
        isOwner: currentHolder == web3Data.accounts[0],
        ownerId: soldEdition.ownerId,
        isOpenForSale: soldEdition.isOpenForSale,
        price: web3.utils.fromWei(soldEdition.price.toString()),
      };
    else
      selectedNFTDetails = {
        isOwner: NFTDetails?.ownerId.id == authData?.data?.id,
        ownerId: NFTDetails.ownerId,
        isOpenForSale: true,
        price:
          NFTDetails.saleState === "AUCTION"
            ? web3.utils.fromWei(bidDetails.bidValue)
            : NFTDetails.price,
        saleState: NFTDetails.saleState,
      };

    this.setState({
      bidDetails: {
        currentBidValue: web3.utils.fromWei(bidDetails.bidValue),
        bidder: bidDetails.bidder,
      },
      selectedNFTDetails,
    });
    this.setNFTBuyMethod(bidDetails);
  }
  setEditionnumber = (number) => {
    this.setState({ currentEdition: number });
  };

  closePopUp = () => {
    this.setState({ isOpen4: false });
  };
  changeOwnerActionName = (action) => {
    this.setState({ ownerActionName: action });
  };
  render() {
    let id = this.props.match.params.id;
    const {
      bidDetails,
      bnbUSDPrice,
      currentEdition,
      loading,
      saleMethod,
      showTimer,
      selectedNFTDetails,
      isApprovedForAll,
    } = this.state;
    console.log("thiss", selectedNFTDetails);
    const { NFTDetails, likesCount, isLiked, authData } = this.props;
    return (
      <>
        <Helmet>
          <meta property="og:url" content={window.location.href} />
          <meta property="og:title" content={NFTDetails?.title} />
          <meta property="og:image" content={NFTDetails?.image.compressed} />
          <meta property="og:description" content={NFTDetails?.description} />
        </Helmet>

        <Gs.MainSection>
          <NFTdetailSection>
            <NFTDleft>
              <NFTDleftcontainer>
                <NFTDleftImg>
                  <Link onClick={() => this.toggle(6)}>
                    <img src={NFTDetails?.image.compressed} alt="" />
                  </Link>
                </NFTDleftImg>
              </NFTDleftcontainer>
            </NFTDleft>
            <NFTDright>
              <NFTDrightcontainer>
                <NFTDRtopbar>
                  <NFTDrtitle>
                    {NFTDetails?.title
                      ? NFTDetails?.title
                      : "Artwork name / title dolor lorem ipsum sit adipiscing"}
                  </NFTDrtitle>
                  <NFTtopbarright>
                    {NFTDetails?.unlockContent && (
                      <NFTLock>
                        <img src={Lock} alt="" />
                      </NFTLock>
                    )}
                    <NFTLike className={loading ? `disabled` : ``}>
                      {isLiked.isFollowed ? (
                        <img
                          src={Redheart}
                          alt=""
                          onDoubleClick={() => {
                            this.props.likeToggler(id);
                            this.setState({ loading: true });
                          }}
                        />
                      ) : (
                        <img
                          src={redheartBorder}
                          alt=""
                          onDoubleClick={() => {
                            this.props.likeToggler(id);
                            this.setState({ loading: true });
                          }}
                        />
                      )}

                      <p>{likesCount.count}</p>
                    </NFTLike>
                  </NFTtopbarright>
                </NFTDRtopbar>
                {NFTDetails?.description && (
                  <Decs2>{NFTDetails.description}</Decs2>
                )}
                <Historysection>
                  <UserImgName>
                    <img src={NFTDetails?.ownerId.profile} alt="" />@
                    {NFTDetails?.ownerId.username}
                  </UserImgName>
                  <button onClick={() => this.toggle(9)}>History</button>
                </Historysection>
                <Edition>
                  <div className="ed-box">
                    <p>Edition</p>
                    <h3>{this.state.currentEdition}</h3>
                    <p className="gray-t">of {NFTDetails?.edition}</p>
                    <Link onClick={() => this.toggle(10)}>Select edition</Link>
                  </div>
                  <div className="ed-box">
                    <p>Current bid</p>
                    <h3>{selectedNFTDetails?.price} BNB</h3>
                    <p className="gray-t">
                      {(selectedNFTDetails?.price * bnbUSDPrice).toLocaleString(
                        2
                      )}{" "}
                      USD
                    </p>
                    <p className="royalty">
                      A 10% royalty goes to the <br></br>creator for future
                      resale
                    </p>
                  </div>
                  {showTimer && (
                    <div className="ed-box">
                      <p>Ending in</p>
                      <FlexDiv className="JCFS">
                        <Timer
                          timeLeft={NFTDetails?.auctionStartDate}
                          onlyHours={true}
                          isDetailed={true}
                        />
                      </FlexDiv>
                    </div>
                  )}
                  <div className="ed-box">
                    <p>Unlockable content message</p>
                    <SkyNoteBox>
                      <p className="note-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam volutpat congue accumsan. Pellentesque et auctor
                        quam, consequat bibendum sapien.
                      </p>
                    </SkyNoteBox>
                  </div>
                </Edition>
                <NFTcartButtons>
                  {!selectedNFTDetails?.isOwner ? (
                    <button
                      onClick={() => {
                        if (authData) {
                          // check user is logged in
                          this.toggle(8);
                        } else {
                          this.toggle(4); // open login pop up
                        }
                      }}
                    >
                      {saleMethod.btnName}
                    </button>
                  ) : (
                    //   <button onClick={() => this.toggle(8)}>
                    //
                    //   </button>
                    // {/* <button disabled>Sold out</button> */}

                    <>
                      <button
                        className="bordered"
                        onClick={() => {
                          this.setState(
                            { ownerActionName: "burnTokenEdition" },
                            () => this.toggle(1)
                          );
                        }}
                      >
                        Burn
                      </button>
                      <button
                        className="bordered"
                        onClick={() => {
                          this.setState(
                            {
                              ownerActionName: isApprovedForAll
                                ? "transfer"
                                : "setApprovalForAll",
                            },
                            () => this.toggle(1)
                          );
                        }}
                      >
                        Transfer
                      </button>
                      <button
                        onClick={() => {
                          this.setState(
                            { ownerActionName: "burnTokenEdition" },
                            () => this.toggle(7)
                          );
                        }}
                      >
                        Put on Sale
                      </button>
                    </>
                  )}
                  {/* //  : (
                  //   <button onClick={() => this.toggle(8)}>
                  //     {saleMethod.btnName}
                  //   </button>
                  //   // {/* <button disabled>Sold out</button> */}
                </NFTcartButtons>
              </NFTDrightcontainer>
            </NFTDright>
          </NFTdetailSection>
          <Collapse
            isOpen={this.state.isOpen1}
            className={
              "app__collapse " + (this.state.isOpen1 ? "collapse-active" : "")
            }
          >
            <NftOwnerActions
              toggle={this.toggle}
              ownerActionName={this.state.ownerActionName}
              edition={this.state.currentEdition}
              tokenID={NFTDetails?.tokenId}
              isApprovedForAll={this.state.isApprovedForAll}
              changeOwnerActionName={this.changeOwnerActionName}
            />
          </Collapse>
          <Collapse
            isOpen={this.state.isOpen6}
            className={
              "app__collapse " + (this.state.isOpen6 ? "collapse-active" : "")
            }
          >
            <Magnifypopup
              toggle={this.toggle}
              imageURL={NFTDetails?.image.original}
            />
          </Collapse>
          <Collapse
            isOpen={this.state.isOpen7}
            className={
              "app__collapse " + (this.state.isOpen7 ? "collapse-active" : "")
            }
          >
            <POSpopup toggle={this.toggle} />
          </Collapse>
          <Collapse
            isOpen={this.state.isOpen8}
            className={
              "app__collapse " + (this.state.isOpen8 ? "collapse-active" : "")
            }
          >
            <PABpopup
              toggle={this.toggle}
              method={saleMethod.name}
              edition={2}
              nonce={NFTDetails?.nonce}
              price={NFTDetails?.price}
              currentBidValue={bidDetails.currentBidValue}
              currentEdition={this.state.currentEdition}
            />
          </Collapse>
          <Collapse
            isOpen={this.state.isOpen9}
            className={
              "app__collapse " + (this.state.isOpen9 ? "collapse-active" : "")
            }
          >
            <Historypopup
              toggle={this.toggle}
              edition={currentEdition}
              nftId={id}
            />
          </Collapse>
          <Collapse
            isOpen={this.state.isOpen10}
            className={
              "app__collapse " + (this.state.isOpen10 ? "collapse-active" : "")
            }
          >
            <SelectEdition
              toggle={this.toggle}
              NFTDetails={NFTDetails}
              web3Data={this.props.web3Data}
              setEditionnumber={this.setEditionnumber}
            />
          </Collapse>
          <Collapse
            isOpen={this.state.isOpen4}
            className={
              "app__collapse " + (this.state.isOpen4 ? "collapse-active" : "")
            }
          >
            <Login
              toggle={this.toggle}
              closePopUp={this.closePopUp}
              isFooter={true}
            />
          </Collapse>
        </Gs.MainSection>
      </>
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
  &.JCFS {
    justify-content: flex-start;
  }
`;

const NFTdetailSection = styled(FlexDiv)`
  justify-content: flex-start;
`;
const NFTDleft = styled(FlexDiv)`
  background-color: #eef2f7;
  width: 41%;
  min-height: 660px;
`;

const NFTDleftcontainer = styled.div`
  width: 100%;
  max-width: 515px;
  margin-left: auto;
  padding: 70px 70px 70px 15px;
`;

const NFTDleftImg = styled.div`
  width: 100%;
  text-align: center;
  img {
    box-shadow: 30px 30px 25px 10px rgb(0 0 0 / 20%);
  }
`;
const NFTDright = styled.div`
  width: 59%;
`;
const NFTDrightcontainer = styled.div`
  width: 100%;
  max-width: 725px;
  margin-right: auto;
  padding: 70px 100px 70px 70px;
  position: relative;
`;
const NFTDrtitle = styled.div`
  font-size: 28px;
  letter-spacing: -1.4px;
  color: #000;
  margin: 0px 0px 16px 0px;
  font-weight: 700;
  line-height: normal;
`;
const NFTDRtopbar = styled(FlexDiv)`
  justify-content: space-between;
  align-items: flex-start;
`;
const NFTtopbarright = styled(FlexDiv)`
  position: absolute;
  right: 0px;
`;
const NFTLock = styled(FlexDiv)`
  width: 34px;
  height: 34px;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%);
  border-radius: 30px;
  margin-right: 5px;
`;
const NFTLike = styled(FlexDiv)`
  width: 56px;
  height: 34px;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%);
  border-radius: 30px;
  p {
    color: #ff2a44;
    font-size: 12px;
    font-weight: 600;
    margin: 0px;
  }
  img {
    line-height: normal;
    width: 15px;
    height: 15px;
    margin: 0px 4px 0px 0px;
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
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

const Decs2 = styled.div`
  font-size: 16px;
  letter-spacing: -0.8px;
  color: #000;
  margin: 0px 0px 20px 0px;
  font-weight: 500;
  line-height: 28px;
`;

const Historysection = styled(FlexDiv)`
  justify-content: flex-start;
  margin-bottom: 40px;
  button {
    font-size: 10px;
    letter-spacing: -0.36px;
    color: #000;
    padding: 6px 15px;
    border-radius: 9px;
    border: 1px solid #000;
    margin: 0px 0px 0px 58px;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const Edition = styled(FlexDiv)`
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 50px;
  .ed-box {
    margin-right: 50px;
    :last-child {
      margin-right: 0px;
      max-width: 232px;
      width: 100%;
    }
    p {
      color: #000;
      font-size: 16px;
      letter-spacing: -0.5px;
      margin: 0px 0px 10px;
    }
    a {
      color: #0066ff;
      font-size: 12px;
      letter-spacing: -0.6px;
      font-weight: 600;
    }
    h3 {
      color: #000;
      font-size: 32px;
      letter-spacing: -1.42px;
      font-weight: 700;
      margin: 0px 0px 7px;
    }
    .gray-t {
      color: rgb(0 0 0 / 30%);
      font-size: 16px;
      letter-spacing: -0.71px;
      font-weight: 600;
      margin: 0px 0px 8px;
    }
    .royalty {
      color: #000;
      font-size: 12px;
      letter-spacing: -0.6px;
      margin: 0px;
      line-height: normal;
    }
    .time-block {
      margin-right: 20px;
    }
  }
`;

const SkyNoteBox = styled.div`
  background-color: #eef2f7;
  border-radius: 10px;
  padding: 15px;
  p.note-text {
    color: #000;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.5px;
    margin: 0px;
  }
`;

const NFTcartButtons = styled.div`
  button {
    background-color: #000;
    color: #fff;
    padding: 13px 60px;
    border-radius: 15px;
    font-size: 14px;
    letter-spacing: -0.5px;
    margin: 0px 10px 10px 0px;
    :hover {
      background-image: linear-gradient(90deg, #d121d6, #febf11);
      box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 20%);
    }
    &:disabled {
      background-color: rgb(0 0 0 / 30%);
      :hover {
        background: rgb(0 0 0 / 30%);
        box-shadow: none;
      }
    }
    &.bordered {
      background-color: transparent;
      border: 1px solid #000;
      color: #000;
      padding: 12px 60px;
      :hover {
        background: none;
      }
    }
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    likeToggler: (id) => dispatch(actions.likeToggler(id)),
    getSingleNFTDetails: (id) => dispatch(actions.getSingleNFTDetails(id)),
    getLikesCount: (id) => dispatch(actions.getLikesCount(id)),
    getIsLiked: (id) => dispatch(actions.getIsLiked(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    NFTDetails: state.fetchSingleNFTDetails,
    likesCount: state.fetchLikesCount,
    likeToggled: state.fetchLikeToggled,
    isLiked: state.fetchIsLiked,
    authData: state.fetchAuthData,
    web3Data: state.fetchWeb3Data,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(NftDetail);
