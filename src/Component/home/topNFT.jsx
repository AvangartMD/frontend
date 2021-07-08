import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Redheart from '../../Assets/images/Redheart.svg';
import UserImg from '../../Assets/images/user-img.jpg';
import LoaderGif from "../../Assets/images/loading.gif";
import RoundIcon from '../../Assets/images/round-icon.svg';
import Gs from '../../Theme/globalStyles';

import { actions } from '../../actions';
import { Context } from '../wrapper';
import Timer from "../timer";
import NFTCard from '../../Component/Cards/nftCard';



class TopNFT extends Component {

  static contextType = Context;

  componentDidMount() {
    const { nfts } = this.props
    if (!nfts) {
      this.props.getTopNFT() // fetch top nft list
    }
  }

  renderedFirstElement = (nft) => {
    return (
      <>
        {/* <Link to={`/nftDetails/${nft.nftId.id}`}> */}
          <div className='w60'>
            <NFTfbleft>
              <img src={nft.nftId.image.compressed} alt='' />
            </NFTfbleft>
          </div>
          <div className='w40'>
            <NFTfbright>
              {nft.isLike ?
                <NFTLike>
                  <Link to='/'>
                    <img src={Redheart} alt='' />
                  </Link>
                  <p>306</p>
                </NFTLike>
                : ''}
              <h3>
                {nft.nftId.title}
              </h3>
              <p>
                {nft.nftId.description}
              </p>
                {nft.nftId.collectionId ?
                  <Link to={`collection-detail/${nft.nftId.collectionId}`}>
                    See the collection <i className='fas fa-angle-right'></i>
                  </Link>
                : ''}
              <Edition>
                <div className='ed-box'>
                  <p>Edition</p>
                  <h3>
                    {nft.nftId.edition}
                    {/* <span>of 2500</span> */}
                  </h3>
                </div>
                <div className='ed-box'>
                  <p>Current bid</p>
                  <h3>{nft.nftId.price} BNB</h3>
                </div>
                <div className='ed-box'>
                  <p>Ending in</p>
                  <Timer timeLeft={nft.nftId.auctionEndDate} onlyHours={true} />
                </div>
              </Edition>
              <UserImgName>
                <img src={nft.nftId.ownerId.profile ? nft.nftId.ownerId.profile : UserImg} alt="" />
                {nft.nftId.ownerId.username ? `@${nft.nftId.ownerId.username}` : nft.nftId.ownerId.name}
              </UserImgName>
            </NFTfbright>
            </div>
        {/* </Link> */}
      </>
    )
  }

  render() {
    const { nfts } = this.props
    return (
      <>
        <HomeNFTs>
          <Gs.Container>
            <div className='home-title'>
              <h3>Top NFTs</h3>
            </div>

            {!nfts ? (<LoaderBX> <img src={LoaderGif} alt="" /> </LoaderBX>) :
              <>
                <NFTfirstbox>
                    {this.renderedFirstElement(nfts[0])}
                </NFTfirstbox>
                <NFTfourbox>
                  {(nfts.slice(1)).map((nft) => {
                    return (
                        <NFTCard
                          name={nft.nftId.ownerId.name}
                          nftId={nft.nftId.id}
                          collectionId={nft.nftId.collectionId?.id}
                          auctionEndDate={nft.nftId.auctionEndDate}
                          nftImg={nft.nftId.image.compressed}
                          title={nft.nftId.title}
                          edition={nft.nftId.edition}
                          price={nft.nftId.price}
                          auctionTime={nft.nftId.auctionTime}
                          userImg={nft.nftId.ownerId.profile}
                          username={nft.nftId.ownerId.username}
                        />
                      )
                  })}
                </NFTfourbox>
              </>}
            <ViewallButton>
              <button>View all auctions</button>
            </ViewallButton>
          </Gs.Container>
        </HomeNFTs>
      </>
    );
  }
}
// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
`;

const HomeNFTs = styled.div`
  width: 100%;
  margin-top: 120px;
  .home-title {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    margin-bottom: 30px;
    h3 {
      color: #000000;
      font-size: 32px;
      position: relative;
      line-height: 32px;
      margin: 0px 0px 15px;
      padding-left: 20px;
      letter-spacing: -1px;
      :before {
        content: '';
        position: absolute;
        left: 0px;
        top: 12px;
        width: 10px;
        height: 10px;
        background: url(${RoundIcon}) no-repeat;
      }
    }
  }
`;

const NFTfirstbox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  position: relative;
  border-radius: 10px;
  margin-bottom: 30px;
  .w60 {
    width: 60%;
  }
  .w40 {
    width: 40%;
  }
`;
const NFTfbleft = styled(FlexDiv)`
  background-color: #eef2f7;
  padding: 80px 0px;
  img {
    box-shadow: 20px 20px 40px 1px rgb(0 0 0 /30%);
  }
`;
const NFTfbright = styled.div`
  padding: 20px 50px;
  h3 {
    color: #000000;
    font-size: 22px;
    letter-spacing: -0.83px;
    margin: 0px 0px 10px;
    line-height: normal;
  }
  p {
    color: #000000;
    font-size: 12px;
    letter-spacing: -0.53px;
    margin: 0px 0px 10px;
    line-height: 20px;
  }
  a {
    color: #000000;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin: 0px 0px 40px;
    line-height: 20px;
    display: block;
    :hover {
      color: #555;
      text-decoration: underline;
    }
  }
`;
const NFTLike = styled(FlexDiv)`
  width: 56px;
  height: 34px;
  position: absolute;
  right: 20px;
  top: 20px;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%);
  border-radius: 30px;
  p {
    color: #ff2a44;
    font-size: 12px;
    font-weight: 600;
    margin: 0px;
  }
  a {
    line-height: normal;
    width: 15px;
    height: 15px;
    margin: 0px 4px 0px 0px;
  }
`;

const Edition = styled(FlexDiv)`
  justify-content: space-between;
  background-color: #eef2f7;
  border-radius: 10px;
  padding: 16px 20px;
  margin: 0px 0px 40px;
  .ed-box {
    p {
      color: #8e9194;
      font-size: 12px;
      letter-spacing: -0.6px;
      font-weight: 600;
      margin: 0px 0px 5px;
    }
    h3 {
      color: #000;
      font-size: 20px;
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

const NFTfourbox = styled(FlexDiv)`
  flex-wrap: wrap;
  margin: 0px -10px 50px;
  .row {
    margin: 0px -10px;
  }
  img.main {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .NFT-home-box {
    border-radius: 10px;
    border: 1px solid #dddddd;
    .NFT-home-box-inner {
      :hover{ box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);}
      padding: 20px 15px; border-radius:10px;
      h4 {
        margin: 0px 0px 10px;
        font-size: 18px;
        color: #000000;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.67px;
      }
      .edition2 {
        justify-content: flex-start;
        padding: 10px 15px;
        margin-bottom: 20px;
        .ed-box {
          margin-right: 20px;
          p {
            font-size: 10px;
            letter-spacing: -0.5px;
            margin: 0px;
          }
          h3 {
            font-size: 16px;
            letter-spacing: -0.71px;
          }
          button {
            font-size: 10px;
            color: #000;
            letter-spacing: -0.36px;
            font-weight: 600;
            line-height: normal;
            padding: 10px 17px;
            border-radius: 13px;
            border: 1px solid #000000;
            :hover {
              background-color: #d121d6;
              color: #fff;
              border-color: #d121d6;
            }
          }
        }
      }
      .JCSB {
        justify-content: space-between;
        .ed-box {
          margin-right: 0px;
        }
      }
    }
  }
`;
const ViewallButton = styled.div`
  text-align: center;
  margin-bottom: 120px;
  button {
    border: 1px solid #000000;
    border-radius: 10px;
    width: 190px;
    height: 44px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.5px;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getTopNFT: () => dispatch(actions.getTopNFT()),
  }
}

const mapStateToProps = (state) => {
  return {
    nfts: state.fetchTopNFT,
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(TopNFT);
