import React, { Component } from "react";
import styled from "styled-components";
import UserImg01 from '../../Assets/images/userImg.png'


function CreatorCard({
  cover,
  profile,
  name,
  username,
  bio,
  nftCreated,
  followersCount,
  followingCount
}) {
  return (
    <CreatSBX01>
        <ImgBannerBX>
            <img src={cover} alt='' />
        </ImgBannerBX>
        <CreatSBX02>
            <UserImg> <img src={profile} alt='' /></UserImg>
            <CretrTitle01>
                {name}
            <span>@{username}</span>
            </CretrTitle01>
            <CretrText01>
                {bio}
            </CretrText01>

            <CretrInfoMBX>
                <CretrInfoSBX01>Created<span>{nftCreated}</span></CretrInfoSBX01>
                <CretrInfoSBX01>Followers<span>{followersCount}</span></CretrInfoSBX01>
                <CretrInfoSBX01>Following<span>{followingCount}</span></CretrInfoSBX01> 
            </CretrInfoMBX>

            <CretrBTN01>See artworks</CretrBTN01>

        </CreatSBX02>
    </CreatSBX01>
  );
}

const FlexDiv = styled.div`
    display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;

const CreatSBX01 = styled(FlexDiv)`
    width:calc(25% - 20px); margin:10px 10px 20px 10px;  border:1px solid #dddddd; border-radius:10px; justify-content:flex-start; align-items:flex-start; 

    :hover{ box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);}
`
const ImgBannerBX = styled(FlexDiv)`
 width:100%; height:100px; border-radius:10px 10px 0 0 ; overflow: hidden; 
 img{ width:100%; height:100%;  object-fit:cover;} 
`
const CreatSBX02 = styled(FlexDiv)`
    width:100%; padding:14px; flex-direction:column;
`
const UserImg = styled(FlexDiv)`
    width:72px; height:72px; border-radius:36px; overflow:hidden; border:solid 1px #eef2f7; margin-top: -50px; 
    img{ width:100%; height:100%; object-fit: cover;}
` 
const CretrTitle01 = styled.div`
    display:block; font-size:18px; font-weight:600; color:#000; margin:10px 0 0 0; 
    span{ display:block; text-align:center; font-size:12px; } 
`
const CretrText01 = styled.div`
    font-size:10px; text-align:center; line-height:1.6; margin:10px 0 0 0; min-height:52px;

`
const CretrInfoMBX = styled(FlexDiv)`
    width:100%; padding:12px; margin:32px 0 18px 0; border:1px solid #dddddd; border-radius: 10px;
`
const CretrInfoSBX01  = styled(FlexDiv)`
    width:33.33%; color:#8e9194; font-size:10px;
    span{ width:100%; font-weight:600; color:#000; font-size:16px; text-align:center}
`                              
const CretrBTN01 = styled.button`
    color:#000; border:2px solid #000; display: inline-block; padding:11px 26px; border-radius:15px; font-size:14px; font-weight:600; margin-bottom:15px; 
`

export default CreatorCard;
