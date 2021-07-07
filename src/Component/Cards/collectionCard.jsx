import React, { Component } from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import NFT2 from "../../Assets/images/nft2.jpg";
import CollImg from "../../Assets/images/nft1.jpg";

function collectionCard({
    id,
    collImg,
    collName,
    creatorName,
}) {
  return (
        <OneCollBox>
            <Link to={`/collection-detail/${id}`}>
            <div className="CIbox">
                  <LazyLoadImage src={collImg?collImg:NFT2} />
            </div>
            <div className="collbox-desc">
                  <p className="coll-title">{ collName?collName:'Collection Name' }</p>
                  <p className="creator-name">{ creatorName?creatorName:'Creator Name' }</p>
            </div>
            </Link>
        </OneCollBox>
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
const OneCollBox = styled.div`
  width:calc(25% - 20px);
  margin:0px 10px 20px 10px;
  position:relative;
  .CIbox
  {
    width: 100%;
    height: 255px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .collbox-desc
  {
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background-color:rgb(0 0 0 / 70%);
    border-radius:10px;
    padding:20px 10px 0px 20px;
    opacity:0;
    :hover
    {
      opacity:1;
    }
    .coll-title
    {
      font-size:20px;
      color:#fff;
      letter-spacing:-0.75px;
      font-weight:700;
      margin:0px 0px 2px;
    }
    .creator-name
    {
      font-size:16px;
      color:rgb(255 255 255 / 50%);
      letter-spacing:-0.8px;
      font-weight:600;
      margin:0px;
    }
  }
`;

export default collectionCard;