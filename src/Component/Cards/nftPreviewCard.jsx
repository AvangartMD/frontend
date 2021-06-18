import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import UserImg from "../../Assets/images/user-img.jpg";
import NFT2 from "../../Assets/images/nft2.jpg";
import Gs from "../../Theme/globalStyles";

function NFTPreviewCard(props) {
  const { nftObj } = props;
  const {
    title,
    description,
    coCreatorUserName,
    percentShare,
    category,
    collection,
    saleState,
    auctionTime,
    edition,
    price,
    digitalKey,
    imgSrc,
  } = nftObj;
  return (
    <NFTfourbox>
      <div className="NFT-home-box">
        <NFTImgBX>
          {" "}
          <img src={imgSrc ? imgSrc : NFT2} alt="" />{" "}
        </NFTImgBX>
        <div className="NFT-home-box-inner">
          <h4>{title}</h4>
          <CollectionBar>
            <p>
              25 <span>of 2500</span>
            </p>
            <p>
              <Link to="/">
                See the collection <i className="fas fa-angle-right"></i>
              </Link>
            </p>
          </CollectionBar>
          <Edition className="edition2">
            <div className="ed-box">
              <p>Current bid</p>
              <h3>{price} BNB</h3>
            </div>
            <div className="ed-box">
              <p>Ending in</p>
              <h3>13h 12m 11s</h3>
            </div>
          </Edition>
          <UserImgName>
            <img src={UserImg} alt="" />@{coCreatorUserName}
          </UserImgName>
        </div>
      </div>
    </NFTfourbox>
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
const NFTImgBX = styled(FlexDiv)`
  width: 100%;
  height: 253px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
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

export default NFTPreviewCard;
