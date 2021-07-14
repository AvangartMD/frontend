import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { Link } from "react-router-dom";

import CloseBTN01 from "../Assets/images/closeBTN01.svg";
import DDdownA from "../Assets/images/dd-down-arrow.svg";

class POSpopup extends Component {
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
          <WhiteBX0D3>

            <CloseBTN className="ani-1" onClick={() => this.props.toggle(7)}>
              <img src={CloseBTN01} alt="" />
            </CloseBTN>

            <PBtitle className="TN-title">Put on Sale</PBtitle>
            <CustomRadio1>
              <label className="radio-container"> Buy now
                <input type="radio" name="category" value="buy now" />
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">Accept offers
                <input type="radio" name="category" value="accept offers" />
                <span className="checkmark"></span>
              </label>
            </CustomRadio1>
            <NFTForm className="Custom-piece">
              <div className="label-line">
                <label>Enter price for one piece</label>
              </div>
              <input type="text" placeholder="0.00" name="price" />
              <AccountBX onClick={() => this.toggle(2)}>
                <span>
                  BNB <img src={DDdownA} alt="" />
                </span>
                <Collapse isOpen={this.state.isOpen2}
                  className={
                    "app__collapse collapse-css-transition  " +
                    (this.state.isOpen2 ? "collapse-active" : "")
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
            <NFTcartButtons>
              <button className="ani-1 bor-large">Place</button>
            </NFTcartButtons>
          </WhiteBX0D3>
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

const DDContainer = styled(FlexDiv)`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  top: calc(100% + 7px);
  width: 100%;
  left: 0;
  overflow: hidden;
  z-index: 100;

  .md-checkbox:hover {
    background-color: #d9f5f5;
  }
`;

const PBtitle = styled.div`
  font-size:24px; letter-spacing:-1px; color:#000; font-weight:600; margin:0px 0px 10px; width:100%;
  &.AStitle{text-align:center; margin:0px 0px 20px;}
  &.TN-title{margin:0px 0px 20px;}
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

const CustomRadio1 = styled(FlexDiv)`
  justify-content: flex-start;
  margin-bottom: 20px;
  .radio-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 54px;
    width: calc(145px - 5px);
    margin-right: 10px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.9px;
    color: #000;
    img {
      margin-right: 5px;
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
    font-size: 16px;
    letter-spacing: -0.9px;
    font-weight: 700;
    color: #000;
    display: flex;
    text-align: right;
    line-height: 16px;
    padding-right: 8px;
    img{margin-left:5px;}
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

export default POSpopup;


