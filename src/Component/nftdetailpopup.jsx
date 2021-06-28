import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

import CloseBTN02 from "../Assets/images/icon-set-exit.svg";
import CloseBTN01 from "../Assets/images/closeBTN01.svg";
import RedirectLink from "../Assets/images/icon-set-link.svg";
import LargeImg from '../Assets/images/nftcard1-big.jpg';
import FiltICON from "../Assets/images/filterICO.svg";
import UserIcon from "../Assets/images/userIcon.png";
import DDdownA from "../Assets/images/dd-down-arrow.svg";

class CustomScrollbars extends Component {
  render() {
    return (
      <Scrollbars
        renderTrackVertical={props => <div {...props} className="track-vertical" />}
        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
        renderView={props => <div {...props} className="view" />}
        autoHide
        style={this.props.style}>
        {this.props.children}
      </Scrollbars>
    );
  }
}

class NftDpopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
    };
  }

  render() {
    return (
      <>
        {/* white wrap popup */}
        {/* <WhiteWrap>
            <CloseBTND2 className="ani-1" onClick={() => this.props.toggle(4)}>
              <img src={CloseBTN02} alt="" />
            </CloseBTND2>
            <img src={LargeImg} alt="" />
        </WhiteWrap> */}

        {/* black wrap popup with large white box */}
        {/* <BlackWrap>
          <WhiteBX0D2>
            <CloseBTN className="ani-1" onClick={() => this.props.toggle(4)}>
              <img src={CloseBTN01} alt="" />
            </CloseBTN>

            history popup starts from here..............
            <Htitle>History</Htitle>
            <CustomScrollbars autoHide autoHideTimeout={1000} style={{ width: '100%', height: '400px', position: 'relative' }} >
              <HDsection>
                <HDleft>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Transaction Date Here</p>
                </HDleft>
                <HDmiddle>
                  <p>by @<b>username</b></p>
                </HDmiddle>
                <HDright>
                  <HDrightbox>
                    <h3>0.00 BNB</h3>
                    <p>0.00 USD</p>
                  </HDrightbox>
                  <Link to="/"><img src={RedirectLink} alt="" /></Link>
                </HDright>
              </HDsection>
              <HDsection>
                <HDleft>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Transaction Date Here</p>
                </HDleft>
                <HDmiddle>
                  <p>by @<b>username</b></p>
                </HDmiddle>
                <HDright>
                  <HDrightbox>
                    <h3>0.00 BNB</h3>
                    <p>0.00 USD</p>
                  </HDrightbox>
                  <Link to="/"><img src={RedirectLink} alt="" /></Link>
                </HDright>
              </HDsection>
              <HDsection>
                <HDleft>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Transaction Date Here</p>
                </HDleft>
                <HDmiddle>
                  <p>by @<b>username</b></p>
                </HDmiddle>
                <HDright>
                  <HDrightbox>
                    <h3>0.00 BNB</h3>
                    <p>0.00 USD</p>
                  </HDrightbox>
                  <Link to="/"><img src={RedirectLink} alt="" /></Link>
                </HDright>
              </HDsection>
              <HDsection>
                <HDleft>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Transaction Date Here</p>
                </HDleft>
                <HDmiddle>
                  <p>by @<b>username</b></p>
                </HDmiddle>
                <HDright>
                  <HDrightbox>
                    <h3>0.00 BNB</h3>
                    <p>0.00 USD</p>
                  </HDrightbox>
                  <Link to="/"><img src={RedirectLink} alt="" /></Link>
                </HDright>
              </HDsection>
              <HDsection>
                <HDleft>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Transaction Date Here</p>
                </HDleft>
                <HDmiddle>
                  <p>by @<b>username</b></p>
                </HDmiddle>
                <HDright>
                  <HDrightbox>
                    <h3>0.00 BNB</h3>
                    <p>0.00 USD</p>
                  </HDrightbox>
                  <Link to="/"><img src={RedirectLink} alt="" /></Link>
                </HDright>
              </HDsection>
              <HDsection>
                <HDleft>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Transaction Date Here</p>
                </HDleft>
                <HDmiddle>
                  <p>by @<b>username</b></p>
                </HDmiddle>
                <HDright>
                  <HDrightbox>
                    <h3>0.00 BNB</h3>
                    <p>0.00 USD</p>
                  </HDrightbox>
                  <Link to="/"><img src={RedirectLink} alt="" /></Link>
                </HDright>
              </HDsection>
              <HDsection>
                <HDleft>
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>Transaction Date Here</p>
                </HDleft>
                <HDmiddle>
                  <p>by @<b>username</b></p>
                </HDmiddle>
                <HDright>
                  <HDrightbox>
                    <h3>0.00 BNB</h3>
                    <p>0.00 USD</p>
                  </HDrightbox>
                  <Link to="/"><img src={RedirectLink} alt="" /></Link>
                </HDright>
              </HDsection>
            </CustomScrollbars>

            select edition popup starts here
            <Htitle>Select Edition</Htitle>

            <FilterMBX>
              <FilterLbx>
                <button className="active">All</button> <button>For Sale</button>
              </FilterLbx>
              <FilterBAR
                onClick={() => this.toggle(1)}
                className={this.state.isOpen1 ? "active" : ""}
              >
                <FilterICO>
                  <img src={FiltICON} alt="" />
                </FilterICO>
                Filter
                <Collapse
                  isOpen={this.state.isOpen1}
                  className={
                    "app__collapse collapse-css-transition  " +
                    (this.state.isOpen1 ? "collapse-active" : "")
                  }
                >
                  <DDContainer>
                    <div className="md-checkbox">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label htmlFor="vehicle1">All</label>
                    </div>
                    <div className="md-checkbox">
                      <input
                        type="checkbox"
                        id="vehicle2"
                        name="vehicle2"
                        defaultChecked
                        value="Bike"
                      />
                      <label htmlFor="vehicle2">Live auction</label>
                    </div>
                    <div className="md-checkbox">
                      <input
                        type="checkbox"
                        id="vehicle3"
                        name="vehicle3"
                        value="Bike"
                      />
                      <label htmlFor="vehicle3">Buy now</label>
                    </div>
                    <div className="md-checkbox">
                      <input
                        type="checkbox"
                        id="vehicle4"
                        name="vehicle4"
                        value="Bike"
                      />
                      <label htmlFor="vehicle4">Sold</label>
                    </div>
                  </DDContainer>
                </Collapse>
              </FilterBAR>
            </FilterMBX>
            <CustomScrollbars autoHide autoHideTimeout={1000} style={{ width: '100%', height: '400px', position: 'relative' }} >
              <EditionTable>
                <table>
                  <thead>
                    <th>EDITION</th>
                    <th>OWNER</th>
                    <th className="text-center">PRICE</th>
                    <th></th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>
                        <FlexDiv className="JCFS">
                          <div className="table-Img">
                            <img src={UserIcon} alt="" />
                          </div>
                          @username
                        </FlexDiv>
                      </td>
                      <td className="text-center">
                        0.00 BNB
                      </td>
                      <td>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            Select
                            <input
                              type="checkbox"
                              name="category"
                              value="art"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </CustomCheckbox1>
                      </td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>
                        <FlexDiv className="JCFS">
                          <div className="table-Img">
                            <img src={UserIcon} alt="" />
                          </div>
                          @username
                        </FlexDiv>
                      </td>
                      <td className="text-center">
                        0.00 BNB
                      </td>
                      <td>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            Select
                            <input
                              type="checkbox"
                              name="category"
                              value="art"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </CustomCheckbox1>
                      </td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>
                        <FlexDiv className="JCFS">
                          <div className="table-Img">
                            <img src={UserIcon} alt="" />
                          </div>
                          @username
                        </FlexDiv>
                      </td>
                      <td className="text-center">
                        0.00 BNB
                      </td>
                      <td>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            Select
                            <input
                              type="checkbox"
                              name="category"
                              value="art"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </CustomCheckbox1>
                      </td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>
                        <FlexDiv className="JCFS">
                          <div className="table-Img">
                            <img src={UserIcon} alt="" />
                          </div>
                          @username
                        </FlexDiv>
                      </td>
                      <td className="text-center">
                        0.00 BNB
                      </td>
                      <td>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            Select
                            <input
                              type="checkbox"
                              name="category"
                              value="art"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </CustomCheckbox1>
                      </td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>
                        <FlexDiv className="JCFS">
                          <div className="table-Img">
                            <img src={UserIcon} alt="" />
                          </div>
                          @username
                        </FlexDiv>
                      </td>
                      <td className="text-center">
                        0.00 BNB
                      </td>
                      <td>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            Select
                            <input
                              type="checkbox"
                              name="category"
                              value="art"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </CustomCheckbox1>
                      </td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>
                        <FlexDiv className="JCFS">
                          <div className="table-Img">
                            <img src={UserIcon} alt="" />
                          </div>
                          @username
                        </FlexDiv>
                      </td>
                      <td className="text-center">
                        0.00 BNB
                      </td>
                      <td>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            Select
                            <input
                              type="checkbox"
                              name="category"
                              value="art"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </CustomCheckbox1>
                      </td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>
                        <FlexDiv className="JCFS">
                          <div className="table-Img">
                            <img src={UserIcon} alt="" />
                          </div>
                          @username
                        </FlexDiv>
                      </td>
                      <td className="text-center">
                        0.00 BNB
                      </td>
                      <td>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            Select
                            <input
                              type="checkbox"
                              name="category"
                              value="art"
                            />
                            <span class="checkmark"></span>
                          </label>
                        </CustomCheckbox1>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </EditionTable>
            </CustomScrollbars>
          </WhiteBX0D2>
        </BlackWrap> */}

        {/* black wrap popup with regular white box */}
        <BlackWrap>
          <WhiteBX01>

            <CloseBTN className="ani-1" onClick={() => this.props.toggle(4)}>
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
              <input type="text" placeholder="Add Wallet Address"/>
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

        {/* put on sale popups     */}
        {/* <BlackWrap>
          <WhiteBX0D3>

            <CloseBTN className="ani-1" onClick={() => this.props.toggle(4)}>
              <img src={CloseBTN01} alt="" />
            </CloseBTN>

            <PBtitle className="TN-title">Put on Sale</PBtitle>
            <CustomRadio1>
              <label class="radio-container"> Buy now
                <input type="radio" name="category" value="buy now" />
                <span class="checkmark"></span>
              </label>
              <label class="radio-container">Accept offers
                <input type="radio" name="category" value="accept offers" />
                <span class="checkmark"></span>
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
        </BlackWrap> */}


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
const WhiteBX0D2 = styled(FlexDiv)`
  width: 100%;
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  min-height: 491px;
  padding: 50px 50px 0px 50px;
  background-color: #fff;
  border-radius: 30px;
  justify-content: flex-start;
  align-content: center;
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
const WhiteWrap = styled(FlexDiv)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1011;
  backdrop-filter: blur(2px);
`;

const CloseBTND2 = styled(FlexDiv)`
  width:34px;
  height:34px;
  border-radius:50%;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%);
  background-color:#fff;
  position: absolute;
  right: 30px;
  top: 30px;
  padding: 0;
  margin: 0px;
  cursor:pointer;
  z-index: 9;
  :hover img{
    transform: rotate(90deg);
  }
`;

const Htitle = styled.div`
  font-size:22px; letter-spacing:-0.55px; color:#000; font-weight:600; margin:0px 0px 20px; width:100%;
`;

const HDsection = styled(FlexDiv)`
  justify-content:space-between; width:100%; border:1px solid #dddddd; padding:20px 15px; border-radius:10px; margin:0px 0px 10px 0px; 
`;

const HDleft = styled.div`
  h3{ margin:0px 0px 5px; font-size:18px; font-weight:300; letter-spacing:-0.9px; color:#000;}
  p{margin:0px; font-size:12px; font-weight:300; letter-spacing:-0.6px; color:#8e9194;}
`;

const HDmiddle = styled.div`
  p{margin:0px; font-size:18px; font-weight:300; letter-spacing:-0.9px; color:#000;}
  b{ font-weight:600; }
`;

const HDright = styled(FlexDiv)`
  text-align:right; 
`;

const HDrightbox = styled.div`
  margin:0px 10px 0px 0px;
  h3{ font-size:18px; color:#000; letter-spacing:-0.9px; font-weight:600; margin:0px 0px 5px; }
  p{margin:0px; font-size:12px; font-weight:300; letter-spacing:-0.6px; color:#8e9194;}
`;
const FilterLbx = styled(FlexDiv)`
  width: 45%;
  justify-content: flex-start;

  button {
    display: inline-block;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    border-radius: 15px;
    background-color: #eef2f7;
    margin-right: 8px;

    &.active {
      background-color: #00babc;
      color: #fff;
    }
    :hover {
      background-color: #00babc;
      color: #fff;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const FilterICO = styled(FlexDiv)`
  width: 21px;
  height: 21px;
  position: absolute;
  left: 11px;
  top: 9px;
`;
const FilterBAR = styled(FlexDiv)`
  width: 100%;
  max-width: 220px;
  justify-content: flex-start;
  position: relative;
  background-color: #eef2f7;
  border-radius: 15px;
  border: 0px;
  outline: none;
  height: 38px;
  padding: 3px 3px 3px 40px;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  border: 1px solid transparent;
  &.active,
  &:hover {
    background-color: #fff;
    border: 1px solid #00babc;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
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

const FilterMBX = styled(FlexDiv)`
  width: 100%; margin-bottom:25px;
  justify-content: space-between;
`;
const EditionTable = styled.div`
  width:100%;
  table{
    width:100%; border-collapse: separate;
    border-spacing: 0 25px;
    .text-center{text-align:center;}
    .text-right{text-align:right;}
    thead{ padding-bottom:30px;
      th{color:rgb(0 0 0 / 30%); text-transform:uppercase; font-size:12px; font-weight:600; text-align:left;
      }
    }
    tbody{
      td{color:#000; font-size:18px; font-weight:600; letter-spacing:-0.9px;
        .JCFS{justify-content:flex-start;}
        .table-Img{width:32px; height:32px; border-radius:50%; margin-right:10px;
          img{width:100%; height:100%; object-fit: cover;}
        }
      }
    }
  }
`;


const CustomCheckbox1 = styled(FlexDiv)`
  justify-content: flex-end;
  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 10px;
    cursor: pointer;
    padding: 13px 32px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.9px;
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
    height: 44px;
    width: 100%;
    background-color: transparent;
    border-radius:15px;
    border:1px solid #000;
  }
  .checkbox-container input:checked ~ .checkmark {
    background-color:rgb(0 0 0 / 30%);
    border-color: rgb(0 0 0 / 30%);
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
      .error{font-size:12px; color:#ff2a44; margin:8px 0px 35px; letter-spacing:-0.6px;}
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
    margin:0 auto;
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

export default NftDpopup;


