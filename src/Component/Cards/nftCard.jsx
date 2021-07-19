import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

import UserImg from "../../Assets/images/user-img.jpg";
import NFT3 from "../../Assets/images/nft3.jpg";
import Gs from "../../Theme/globalStyles";
import Timer from "../timer";

function NFTCard({
  nftSold,
  name,
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
        <div className="NFT-home-box">
          <Link to={`/nftDetails/${nftId}`}>
            <NFTImgBX>
              <motion.img
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                key={nftImg}
                src={nftImg}
                exit={{ opacity: 0 }}
              />
            </NFTImgBX>
          </Link>
          <div className="NFT-home-box-inner">
            <h4>
              {title
                ? title
                : "Artwork name / title dolor lorem ipsum sit adipiscing"}
            </h4>
            <CollectionBar>
              <p>
                {nftSold} <span>of {edition ? edition : 0}</span>
              </p>
              {collectionId ? (
                <p>
                  <Link to={`/collection-detail/${collectionId}`}>
                    See the collection
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </p>
              ) : (
                ""
              )}
            </CollectionBar>
            <Edition className="edition2 JCSB">
              <div className="ed-box">
                <p>Current bid</p>
                <h3>{price} BNB</h3>
              </div>
              <div className="ed-box">
                {previewCard ? (
                  auctionEndDate ? (
                    <>
                      <p>Ending in</p> <h3>{auctionEndDate}h 00m 00s</h3>
                    </>
                  ) : (
                    <button>Buy now</button>
                  )
                ) : auctionEndDate &&
                  auctionEndDate > new Date().getTime() / 1000 ? (
                  <>
                    <p>Ending in</p>

                    <h3>
                      <Timer timeLeft={auctionEndDate} onlyHours={true} />
                    </h3>
                  </>
                ) : nftSold === edition ? (<button className="disabled" disabled>Sold Out</button>) : (
                  <button>Buy now</button>
                )}
              </div>
            </Edition>
            <UserImgName>
              <img src={userImg ? userImg : UserImg} alt="" />
              {username ? `@${username}` : name}
            </UserImgName>
          </div>
        </div>
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
