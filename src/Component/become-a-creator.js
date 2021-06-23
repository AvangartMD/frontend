import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { Link } from "react-router-dom";

import CloseBTN01 from "../Assets/images/closeBTN01.svg";
import Art from "../Assets/images/icon-set-art.svg";
import Sport from "../Assets/images/icon-set-sport.svg";
import Celebrity from "../Assets/images/icon-set-celebrity.svg";

import LoaderGif from "../Assets/images/loading.gif";

class BecomeCreator extends Component {
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
          <WhiteBX02>
            <CloseBTN className="ani-1" onClick={() => this.props.toggle(4)}>
              <img src={CloseBTN01} alt="" />
            </CloseBTN>
            {/* first popup-------------- */}
            <BACLeft>
              <BACLtitle>Who are you?</BACLtitle>
              <BACLdesc>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque
                ornare augue non finibus commodo.
              </BACLdesc>
              <BACLlist>
                <Link className="active" to="/">
                  01
                </Link>
                <Link to="/">02</Link>
                <Link to="/">03</Link>
              </BACLlist>
            </BACLeft>
            <BACRight>
              <NFTForm>
                <div className="label-line">
                  <label>
                    Name<sup>*</sup>
                  </label>
                </div>
                <input type="text" placeholder="Type name…" />
              </NFTForm>
              <NFTForm>
                <div className="label-line">
                  <label>
                    Email<sup>*</sup>
                  </label>
                </div>
                <input type="text" placeholder="Type email…" />
              </NFTForm>
              <NFTForm>
                <div className="label-line">
                  <label>
                    Explain Yourself<sup>*</sup>
                  </label>
                </div>
                <textarea>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque ornare augue non finibus commodo.
                </textarea>
              </NFTForm>
              <CreateItemButton>
                <button>Next</button>
              </CreateItemButton>
            </BACRight>

            {/* second popup------ */}
            {/* 
            <BACLeft>
              <BACLtitle>What’s your style?</BACLtitle>
              <BACLdesc>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque
                ornare augue non finibus commodo.
              </BACLdesc>
              <BACLlist>
                <Link to="/">01</Link>
                <Link className="active" to="/">
                  02
                </Link>
                <Link to="/">03</Link>
              </BACLlist>
            </BACLeft>
            <BACRight>
              <NFTForm>
                <div className="label-line">
                  <label>NFT Category</label>
                  <p>Phasellus at dui imperdiet, eleifend lacus gravida</p>
                </div>
                <CustomCheckbox1>
                  <label class="checkbox-container">
                    <img src={Art} alt="" />
                    Art
                    <input type="checkbox" name="category" value="art" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container">
                    <img src={Celebrity} alt="" />
                    Celebrity
                    <input type="checkbox" name="category" value="celebrity" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="checkbox-container">
                    <img src={Sport} alt="" />
                    Sport
                    <input type="checkbox" name="category" value="sport" />
                    <span class="checkmark"></span>
                  </label>
                </CustomCheckbox1>
              </NFTForm>
              <CreateItemButton>
                <button>Previous</button>
                <button>Next</button>
              </CreateItemButton>
            </BACRight> */}

            {/* third popup-------------- */}
            {/* <BACLeft>
              <BACLtitle>Promote yourself!</BACLtitle>
              <BACLdesc>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque
                ornare augue non finibus commodo.
              </BACLdesc>
              <BACLlist>
                <Link to="/">01</Link>
                <Link to="/">02</Link>
                <Link className="active" to="/">
                  03
                </Link>
              </BACLlist>
            </BACLeft>
            <BACRight>
              <NFTForm>
                <div className="label-line">
                  <label>Portfolio website</label>
                </div>
                <input type="text" placeholder="Type your id…" />
              </NFTForm>
              <NFTForm>
                <div className="label-line">
                  <label>Instagram account</label>
                </div>
                <input type="text" placeholder="Type your id…" />
              </NFTForm>
              <NFTForm>
                <div className="label-line">
                  <label>Twitter account</label>
                </div>
                <input type="text" placeholder="Type your id…" />
              </NFTForm>
              <CreateItemButton>
                <button>Previous</button>
                <button>Submit</button>
              </CreateItemButton>
            </BACRight> */}
          </WhiteBX02>
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
  z-index: 1011;
  backdrop-filter: blur(2px);
`;
const CloseBTN = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 27px;
  padding: 0;
  margin: 0px;
  z-index: 9;
  :hover {
    transform: rotate(90deg);
  }
`;
const WhiteBX02 = styled.div`
  width: 100%;
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  min-height: 518px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
`;

const BACLeft = styled.div`
  background-color: #eef2f7;
  padding: 60px 50px;
  max-width: 320px;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const BACLtitle = styled.div`
  color: #000;
  font-size: 22px;
  letter-spacing: -0.55px;
  margin: 0px 0px 15px;
  font-weight: bold;
`;

const BACLdesc = styled.div`
  color: #000;
  font-size: 16px;
  letter-spacing: -0.8px;
  margin: 0px 0px 30px;
`;

const BACLlist = styled.div`
  a {
    color: rgb(0 0 0 / 20%);
    font-size: 12px;
    font-weight: bold;
    letter-spacing: -0.6px;
    margin: 0px 20px 0px 0px;
    &.active {
      color: rgb(0 0 0 / 100%);
    }
  }
`;

const BACRight = styled.div`
  padding: 60px 50px;
  width: 100%;
  position: relative;
`;

const NFTForm = styled.div`
  position: relative;
  .label-line {
    margin: 0px 0px 6px;
    label {
      font-size: 12px;
      color: #8e9194;
      font-weight: 600;
    }
    sup {
      top: -0.1em;
    }
    p {
      color: #8e9194;
      font-size: 12px;
      letter-spacing: -0.4px;
      font-weight: 300;
      margin: 0px;
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
    margin: 0px 0px 15px;
    ::placeholder {
      color: #000;
      opacity: 20%;
    }
  }
  textarea {
    width: 100%;
    min-height: 109px;
    line-height: 24px;
    resize: none;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.8px;
    margin: 0px 0px 15px;
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

const CreateItemButton = styled.div`
  margin: 0px;
  position: absolute;
  right: 50px;
  left: auto;
  bottom: 60px;
  button {
    font-size: 14px;
    color: #000;
    letter-spacing: -0.5px;
    width: 100px;
    height: 44px;
    margin: 0px 0px 0px 5px;
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid #000;
    :hover {
      background: linear-gradient(90deg, #d121d6, #febf11);
      color: #fff;
      border: none;
    }
  }
`;

const CustomCheckbox1 = styled(FlexDiv)`
  justify-content: flex-start;
  margin-bottom: 30px;
  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 54px;
    width: 100%;
    margin: 0px 0px 5px 0px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.8px;
    color: #000;
    img {
      margin-right: 5px;
    }
  }
  .checkbox-container input {
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
  .checkbox-container input:checked ~ .checkmark {
    border: 1px solid #00babc;
  }
`;
export default BecomeCreator;
