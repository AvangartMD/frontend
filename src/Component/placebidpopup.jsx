import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { Link } from "react-router-dom";

import CloseBTN01 from "../Assets/images/closeBTN01.svg";

class PABpopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
    };
  }

  render() {
    return (
      <>

        <BlackWrap>
          <WhiteBX01>

            <CloseBTN className="ani-1" onClick={() => this.props.toggle(8)}>
              <img src={CloseBTN01} alt="" />
            </CloseBTN>

            {/* place a bid and make an offer popup */}
            <PBtitle>Place a Bid</PBtitle>
            <PBDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec ut sapien faucibus.</PBDesc>
            <BalanceLine>
              <p className="balance">Your Balance :</p>
              <p className="price-state">0.00 BNB  |  0.00 USD</p>
            </BalanceLine>
            <HalfInputs className="errorinput">
              <HIBox>
                <input className="BR-straight" type="text" placeholder="0.00" />
                <p>BNB</p>
              </HIBox>
              <HIBox>
                <input className="BL-straight" type="text" placeholder="0.00" />
                <p>USD</p>
              </HIBox>
              <p className="error">Lorem ipsum dolor sit</p>
            </HalfInputs>

            <PBbutton>
              <button className="ani-1">Place</button>
            </PBbutton>

            {/* Are you sure? popup */}
            {/* <PBtitle className="AStitle">Are you sure?</PBtitle>
            <PBDesc className="ASDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sapien faucibus, ornare arcu et, bibendum risus. Nam ultricies urna sed lectus pulvinar, at iaculis ipsum cursus.</PBDesc>
            <NFTcartButtons>
              <button className="ani-1 bordered">Cancel</button>
              <button className="ani-1">Burn</button>
            </NFTcartButtons> */}

            {/* Burned popup */}
            {/* <PBtitle className="AStitle">Burned</PBtitle>
            <PBDesc className="ASDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sapien faucibus, ornare arcu et, bibendum risus. Nam ultricies urna sed lectus pulvinar, at iaculis ipsum cursus.</PBDesc>
            <NFTcartButtons>
              <button className="ani-1 bordered bor-large">OK</button>
            </NFTcartButtons> */}

            {/* Transfer NFT popup */}
            {/* <PBtitle className="TN-title">Transfer NFT</PBtitle>
            <PBDesc className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sapien faucibus, ornare arcu et, bibendum risus. Nam ultricies urna sed lectus pulvinar, at iaculis ipsum cursus.</PBDesc>
            <NFTForm>
              <div className="label-line">
                <label>Wallet Address</label>
              </div>
              <input type="text" placeholder="Add Wallet Address" />
            </NFTForm>
            <NFTcartButtons>
              <button className="ani-1 bor-large">Transfer</button>
            </NFTcartButtons> */}

            {/* Confirm popup */}
            {/* <PBtitle className="AStitle">Confirm</PBtitle>
            <PBDesc className="ASDesc mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sapien faucibus, ornare arcu et, bibendum risus. Nam ultricies urna sed lectus pulvinar, at iaculis ipsum cursus.</PBDesc>
            <SkyWalletAddress>HDJ938HFNKAU294INSDNGJI2</SkyWalletAddress>
            <NFTcartButtons>
              <button className="ani-1 bordered">Cancel</button>
              <button className="ani-1">Transfer</button>
            </NFTcartButtons> */}

          </WhiteBX01>
        </BlackWrap>

      </>
    );
  }

  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const BlackWrap = styled(FlexDiv)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 101;
  backdrop-filter: blur(2px);
`;

const WhiteBX0D3 = styled(FlexDiv)`
  width: 100%;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  min-height: 418px;
  padding: 50px;
  background-color: #fff;
  border-radius: 30px;
  justify-content: flex-start;
  align-content: flex-start;
`;

const CloseBTN = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 27px;
  padding: 0;
  margin: 0px;
  :hover {
    transform: rotate(90deg);
  }
`;

const WhiteBX01 = styled(FlexDiv)`
  width: 100%;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  min-height: 418px;
  padding: 50px;
  background-color: #fff;
  border-radius: 30px;
  justify-content: flex-start;
  align-content: center;
`;

const PBtitle = styled.div`
  font-size:24px; letter-spacing:-1px; color:#000; font-weight:600; margin:0px 0px 10px; width:100%;
  &.AStitle{text-align:center; margin:0px 0px 20px;}
  &.TN-title{margin:0px 0px 20px;}
`;

const PBDesc = styled.div`
  font-size:14px; letter-spacing:-0.55px; color:#000; margin:0px 0px 30px; width:100%; line-height:18px;
  &.ASDesc{text-align:center; margin:0px 0px 40px;}
  &.mb-20{margin:0px 0px 20px;}
  &.mb-10{margin:0px 0px 10px;}
`;

const BalanceLine = styled(FlexDiv)`
  justify-content:space-between; margin:0px 0px 6px; width:100%;
  .balance{font-size:12px; color:#8e9194; margin:0px; font-weight:600;}
  .price-state{font-size:16px; letter-spacing:-0.8px; color:#000; margin:0px; font-weight:300;}
`;

const HalfInputs = styled(FlexDiv)`
    justify-content:flex-start;
    
    &.errorinput{
      input{ border-color: #ff2a44; 
      &.BR-straight{border-right-color:#ddd;}
      }
      .error{font-size:12px; color:#ff2a44; margin:8px 0px 0px; letter-spacing:-0.6px;}
    }
`;

const HIBox = styled(FlexDiv)`
    width:50%; position:relative;
    input{border:1px solid #dddddd; width:100%; height:54px; border-radius:10px; padding:0px 40px 0px 15px; font-size:24px; letter-spacing:-1.2px; color:#000; font-weight:600;
      ::placeholder{color:#000;}
      &.BR-straight{ border-top-right-radius:0px; border-bottom-right-radius:0px;}
      &.BL-straight{ border-top-left-radius:0px; border-bottom-left-radius:0px; border-left:0px;}
    } 
    p{position:absolute; right:15px; bottom:15px; font-size:12px; letter-spacing:-0.6px; font-weight:600; color:#000; margin:0px; line-height:13px;}
`;

const PBbutton = styled.div`
    margin:40px auto 0px;
    button{background-color:rgb(0 0 0 / 30%); padding:14px 78px; color:#fff; font-size:14px; border-radius:15px;
      &.colorful{background: linear-gradient(90deg, #d121d6, #febf11);}
      :hover{background: linear-gradient(90deg, #d121d6, #febf11);}
    }
`;

const NFTcartButtons = styled.div`
  margin:0 auto;
  button{background-color:#000; color:#fff; width:140px; height:44px; border-radius:15px; font-size:14px; letter-spacing:-0.5px; margin:0px 5px 5px;
    :hover{background-image:linear-gradient(90deg, #d121d6, #febf11); box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 20%);}
    &:disabled{background-color:rgb(0 0 0 / 30%);
      :hover{background:rgb(0 0 0 / 30%); box-shadow:none;}
    }
    &.bordered{background-color:transparent; border:1px solid #000; color:#000;
      :hover{background:none;}
      &.bor-large{padding: 12px 85px; width:auto;}
    }
    &.bor-large{padding: 12px 70px; width:auto;}
  }
  ${WhiteBX0D3} &{
    position:absolute; bottom:50px; left:0px; width:100%; text-align:center;
  }
`;

const NFTForm = styled.div`
  position: relative; width:100%;
  &.Custom-piece{
    .label-line{
      label{font-size:16px; color:#000; font-weight:500;}  
    }
  }
  .label-line {
    margin: 0px 0px 6px;
    label {
      font-size: 12px;
      color: #8e9194;
      letter-spacing: -0.2px;
    }
  }
  input {
    width: 100%;
    height: 54px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 16px;
    color: #000000;
    letter-spacing: -0.9px;
    margin: 0px 0px 40px;
    ::placeholder {
      color: #000;
      opacity: 20%;
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

const SkyWalletAddress = styled.div`
  background-color:#eef2f7;
  padding:10px 47px;
  border-radius:15px;
  font-size:14px;
  letter-spacing:-0.8px;
  font-weight:600;
  color:#000;
  margin:0 auto 40px;
  width:auto;
`;

export default PABpopup;


