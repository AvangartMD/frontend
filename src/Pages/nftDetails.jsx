import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router";
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
import Media from "../Theme/media-breackpoint";
const saleMethods = {
  sold: {
    name: null,
    btnName: "Sold",
    bidDesc: "Sold for",
  },
  buyNow: {
    name: "buyNow",
    btnName: "Buy Now",
    bidDesc: "Reserved price",
  },
  placeABid: {
    name: "placeBid",
    btnName: "Place a bid",
    bidDesc: "Current bid",
  },
  makeAnOffer: {
    name: "placeBid",
    btnName: "Make an offer",
    bidDesc: "Current offer",
  },
  putOnSale: {
    name: null,
    btnName: "Put on sale",
    bidDesc: "Purchased at",
  },
  cancelSaleOrder: {
    name: "cancelSaleOrder",
    btnName: "Cancel sale order",
    bidDesc: "",
  },
  noButton: {
    name: "",
    btnName: null,
    bidDesc: "",
  },
  claimAfterAuction: {
    name: "claimAfterAuction",
    btnName: "Claim",
    bidDesc: "Current bid",
  },
};
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
      if (NFTDetails.tokenId && NFTDetails.edition) this.fetchNFTDetails();
    }
    if (this.state.currentEdition != prevState.currentEdition) {
      // console.log("1");
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
  setNFTBuyMethod = (
    bidDetails,
    isOwner,
    secondHand,
    isOpenForSale,
    saleState
  ) => {
    const { NFTDetails, web3Data } = this.props;
    const isAuction = secondHand
      ? false
      : NFTDetails.auctionEndDate > new Date().getTime() / 1000;
    if (secondHand) {
      if (isOwner) {
        if (isOpenForSale) {
          this.setState({
            saleMethod: saleMethods.cancelSaleOrder,
          });
        } else {
          this.setState({
            saleMethod: saleMethods.putOnSale,
          });
        }
      } else {
        if (isOpenForSale) {
          const method =
            saleState == "BUY" ? saleMethods.buyNow : saleMethods.makeAnOffer;
          this.setState({
            saleMethod: method,
          });
        } else {
          this.setState({
            saleMethod: saleMethods.sold,
          });
        }
      }
    } else {
      if (isOwner) {
        const method = saleMethods.noButton;
        method.bidDesc =
          saleState == "BUY" ? "Resereved Price" : "Current offer";
        return this.setState({
          saleMethod: method,
        });
      } else {
        if (isAuction) {
          this.setState({
            saleMethod: saleMethods.placeABid,
            showTimer: true,
          });
        } else {
          this.setState({ showTimer: false });
          if (+bidDetails.bidValue > 0) {
            if (bidDetails.bidder === web3Data.accounts[0]) {
              this.setState({
                saleMethod: saleMethods.claimAfterAuction,
              });
            } else
              this.setState({
                saleMethod: saleMethods.sold,
              });
          } else
            this.setState({
              saleMethod: saleMethods.buyNow,
            });
        }
      }
    }
  };

  getEditionNumber = (NFTDetails) => {
    return 1;
    // for (let i = 0; i < NFTDetails.editions.length; i++) {
    //   // console.log("1");
    // }
  };
  async fetchNFTDetails(_edition) {
    const { NFTDetails, authData, web3Data } = this.props;
    const escrowContractInstance = getContractInstance(true);

    const tokenID = NFTDetails.tokenId;
    let newEdition = _edition;
    if (!newEdition) {
      newEdition =
        NFTDetails.saleState === "BUY"
          ? this.getEditionNumber(NFTDetails)
          : NFTDetails.auctionEndDate <= new Date().getTime() / 1000
          ? this.getEditionNumber(NFTDetails)
          : 1;
    }
    const currentHolder = await escrowContractInstance.methods
      .currentHolder(+tokenID, newEdition)
      .call();
    const bidDetails = await escrowContractInstance.methods
      .bid(+tokenID, newEdition)
      .call();
    const secondHand = await escrowContractInstance.methods
      .secondHand(+tokenID, newEdition)
      .call();
    const soldEdition = NFTDetails.editions.find(
      ({ edition }) => edition == newEdition
    );
    console.log(soldEdition?.ownerId.id, authData?.data?.id);
    let selectedNFTDetails;

    if (soldEdition)
      selectedNFTDetails = {
        isOwner: soldEdition.ownerId.id == authData?.data?.id,
        ownerId: soldEdition.ownerId,
        isOpenForSale: soldEdition.isOpenForSale,
        price: soldEdition.saleType.type
          ? soldEdition.saleType.price
          : soldEdition.price,
        saleState: soldEdition.saleType.type,
        secondHand: true,
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
        secondHand: false,
      };

    this.setState({
      bidDetails: {
        currentBidValue: web3.utils.fromWei(bidDetails.bidValue),
        bidder: bidDetails.bidder,
      },
      selectedNFTDetails,
    });
    console.log(selectedNFTDetails);
    this.setNFTBuyMethod(
      bidDetails,
      selectedNFTDetails.isOwner,
      selectedNFTDetails.secondHand,
      selectedNFTDetails.isOpenForSale,
      selectedNFTDetails.saleState
    );
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
                    <div className="ed-left">
                      <p>Edition</p>
                      <div className="ed-left-inner">
                        <h3>{this.state.currentEdition}</h3>
                        <p className="gray-t">of {NFTDetails?.edition}</p>
                      </div>
                    </div>
                    <Link onClick={() => this.toggle(10)}>Select edition</Link>
                  </div>
                  <div className="ed-box">
                    <div className="ed-left">
                      <p>{saleMethod.bidDesc}</p>
                      <div className="ed-left-inner">
                        <h3>{selectedNFTDetails?.price} BNB</h3>
                        <p className="gray-t">
                          {(
                            selectedNFTDetails?.price * bnbUSDPrice
                          ).toLocaleString(2)}
                          USD
                        </p>
                      </div>
                    </div>
                    <p className="royalty">
                      A 10% royalty goes to the <br></br>creator for future
                      resale
                    </p>
                  </div>
                  {showTimer && (
                    <div className="ed-box ed-mb-block">
                      <p>Ending in</p>
                      <FlexDiv className="JCFS">
                        <Timer
                          timeLeft={NFTDetails?.auctionEndDate}
                          onlyHours={true}
                          isDetailed={true}
                        />
                      </FlexDiv>
                    </div>
                  )}
                  {NFTDetails?.unlockContent ? (
                    <div className="ed-box ed-mb-block">
                      <p>Unlockable content message</p>
                      <SkyNoteBox>
                        <p className="note-text">{NFTDetails?.digitalKey}</p>
                      </SkyNoteBox>
                    </div>
                  ) : (
                    ``
                  )}
                </Edition>
                <NFTcartButtons>
                  {!selectedNFTDetails?.isOwner ? (
                    selectedNFTDetails?.isOpenForSale ? (
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
                    ) : NFTDetails?.status === "NOT_MINTED" ? (
                      <button
                        onClick={() =>
                          this.props.history.push(
                            `/user/nftEdit/${NFTDetails.id}`
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    ) : (
                      <button disabled>Sold out</button>
                    )
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
            <POSpopup
              toggle={this.toggle}
              tokenId={NFTDetails?.tokenId}
              editionNumber={this.state.currentEdition}
              web3Data={this.props.web3Data}
            />
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
  ${Media.md} {
    width: 100%;
    min-height: 504px;
  }
`;

const NFTDleftcontainer = styled.div`
  width: 100%;
  max-width: 515px;
  margin-left: auto;
  padding: 70px 70px 70px 15px;
  ${Media.md} {
    margin: 0 auto;
    padding: 70px 43px;
  }
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
  ${Media.md} {
    width: 100%;
  }
`;
const NFTDrightcontainer = styled.div`
  width: 100%;
  max-width: 725px;
  margin-right: auto;
  padding: 70px 100px 70px 70px;
  position: relative;
  ${Media.lg} {
    padding: 30px 60px 30px 30px;
  }
  ${Media.md} {
    max-width: 100%;
    padding: 30px 15px;
  }
`;
const NFTDrtitle = styled.div`
  font-size: 28px;
  letter-spacing: -1.4px;
  color: #000;
  margin: 0px 0px 16px 0px;
  font-weight: 700;
  line-height: normal;
  ${Media.md} {
    margin: 25px 0px 10px 0px;
    font-size: 22px;
    letter-spacing: -1.1px;
  }
`;
const NFTDRtopbar = styled(FlexDiv)`
  justify-content: space-between;
  align-items: flex-start;
  ${Media.md} {
    display: initial;
  }
`;
const NFTtopbarright = styled(FlexDiv)`
  position: absolute;
  right: 0px;
  ${Media.lg} {
    right: 10px;
  }
  ${Media.md} {
    top: 10px;
  }
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
  ${Media.md} {
    margin: 0px 0px 30px 0px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.7px;
  }
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
  ${Media.md} {
    display: initial;
  }
  .ed-box {
    margin-right: 48px;
    &.ed-mb-block {
      ${Media.md} {
        display: block;
      }
    }
    ${Media.lg} {
      margin-right: 25px;
    }
    ${Media.md} {
      margin: 0px 0px 30px 0px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .ed-left-inner {
      ${Media.md} {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        p.gray-t {
          margin: 0px 0px 0px 4px;
          font-size: 12px;
          line-height: 12px;
        }
        h3 {
          margin: 0px;
          font-size: 24px;
        }
      }
    }
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
      ${Media.md} {
        font-size: 12px;
        margin: 0px 0px 5px;
      }
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
      ${Media.md} {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        p.gray-t {
          margin: 0px 0px 0px 4px;
          font-size: 12px;
          line-height: 12px;
        }
        h3 {
          margin: 0px;
          font-size: 24px;
        }
      }
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
  ${Media.md} {
    text-align: center;
  }
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

export default withRouter(
  connect(mapStateToProps, mapDipatchToProps)(NftDetail)
);
