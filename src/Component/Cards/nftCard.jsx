import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { LazyLoadImage } from "react-lazy-load-image-component";

import UserImg from "../../Assets/images/user-img.jpg";
import NFT2 from "../../Assets/images/nft2.jpg";
import Gs from "../../Theme/globalStyles";
import Timer from "../timer";

function NFTCard({
  nftId,
  collectionId,
  auctionEndDate,
  nftImg,
  title,
  edition,
  price,
  auctionTime,
  userImg,
  username,
  previewCard,
}) {
  return (
    <Gs.W25V2>
      <Gs.TenpxGutter>
        <Link to={`/nftDetails/${nftId}`}>
          <div className="NFT-home-box">
            <NFTImgBX>
              <LazyLoadImage src={nftImg} />
            </NFTImgBX>
            <div className="NFT-home-box-inner">
              <h4>
                {title
                  ? title
                  : "Artwork name / title dolor lorem ipsum sit adipiscing"}
              </h4>
              <CollectionBar>
                <p>
                  0 <span>of {edition ? edition : 0}</span>
                </p>
                <p>
                  <Link to={`/collection-detail/${collectionId}`}>
                    See the collection
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </p>
              </CollectionBar>
              <Edition className="edition2 JCSB">
                <div className="ed-box">
                  <p>Current bid</p>
                  <h3>{price} BNB</h3>
                </div>
                <div className="ed-box">
                  {auctionEndDate ? (
                    <>
                      <p>Ending in</p>
                      {previewCard ? (
                        <h3>{auctionEndDate}h 00m 00s</h3>
                      ) : (
                        <h3>
                          <Timer timeLeft={auctionEndDate} onlyHours={true} />
                        </h3>
                      )}
                    </>
                  ) : (
                    <button>Buy now</button>
                  )}
                  {/* <h3>{auctionTime}h 00m 00s</h3> */}
                </div>
              </Edition>
              <UserImgName>
                <img src={userImg ? userImg : UserImg} alt="" />@{username}
              </UserImgName>
            </div>
          </div>
        </Link>
      </Gs.TenpxGutter>
    </Gs.W25V2>
  );
}
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .JCSB {
    justify-content: space-between;
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
export default NFTCard;
