import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import NftDpopup from "../Component/nftdetailpopup";
import Collapse from "@kunukn/react-collapse";

import NftdLimg from '../Assets/images/nftcard1.jpg';
import Redheart from '../Assets/images/Redheart.svg';
import Lock from '../Assets/images/icon-set-lock.svg';
import UserImg from "../Assets/images/user-img.jpg";


class NftDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
    };
  }
  render() {
    return (
      <>
        <Gs.MainSection>
          <NFTdetailSection>
            <NFTDleft>
              <NFTDleftcontainer>
                <NFTDleftImg >
                  <Link onClick={() => this.toggle(4)}>
                    <img src={NftdLimg} alt="" />
                  </Link>
                </NFTDleftImg> 
              </NFTDleftcontainer>
            </NFTDleft>
            <NFTDright>
              <NFTDrightcontainer>
              <NFTDRtopbar>
                <NFTDrtitle>Artwork name / title dolor lorem ipsum sit adipiscing</NFTDrtitle>
                <NFTtopbarright>
                  <NFTLock>
                    <img src={Lock} alt='' />
                  </NFTLock>
                  <NFTLike>
                      <Link to='/'>
                        <img src={Redheart} alt='' />
                      </Link>
                      <p>306</p>
                  </NFTLike>
                </NFTtopbarright>
              </NFTDRtopbar>
              <Decs2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae ultrices nulla, ut cursus lorem. Quisque egestas feugiat ligula, sed aliquam lectus. Ut ac nibh diam. Duis lobortis blandit dui, sit amet rhoncus est gravida non. In vehicula justo arcu.
              </Decs2>
              <Historysection>
                <UserImgName>
                    <img src={UserImg} alt='' />
                    @username
                </UserImgName>
                <button>History</button>
              </Historysection>
              <Edition>
                    <div className='ed-box'>
                      <p>Edition</p>
                      <h3>
                        2500
                      </h3>
                      <p className="gray-t">of 2500</p>
                      <Link to="/">Select edition</Link>
                    </div>
                    <div className='ed-box'>
                      <p>Current bid</p>
                      <h3>0.00 BNB</h3>
                      <p className="gray-t">0.00 USD</p>
                      <p className="royalty">A 10% royalty goes to the <br></br>creator for future resale</p>
                    </div>
                    <div className='ed-box'>
                      <p>Ending in</p>
                      <FlexDiv>
                        <div className="time-block">
                          <h3>13</h3>
                          <p className="gray-t">hours</p>
                        </div>
                        <div className="time-block">
                          <h3>12</h3>
                          <p className="gray-t">minutes</p>
                        </div>
                        <div className="time-block">
                          <h3>11</h3>
                          <p className="gray-t">seconds</p>
                        </div>
                      </FlexDiv>
                    </div>
                  </Edition>
                  <NFTcartButtons>
                  <button>Place a bid</button>
                  </NFTcartButtons>
              </NFTDrightcontainer>
            </NFTDright>
          </NFTdetailSection>
          <Collapse
            isOpen={this.state.isOpen4}
            className={
              "app__collapse " + (this.state.isOpen4 ? "collapse-active" : "")
            }
          >
            <NftDpopup toggle={this.toggle} />
          </Collapse>
        </Gs.MainSection>
      </>
    );
  }
  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}

// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const NFTdetailSection = styled(FlexDiv)`
  justify-content:flex-start;
`;
const NFTDleft = styled(FlexDiv)`
  background-color:#eef2f7;  width:41%; min-height:660px;
`;

const NFTDleftcontainer = styled.div`
width: 100%;
max-width: 515px;
margin-left: auto;
padding: 70px 70px 70px 15px;
`;

const NFTDleftImg = styled.div`
  width:100%; text-align:center;
  img{box-shadow:30px 30px 25px 10px rgb(0 0 0 / 20%);}
`;
const NFTDright = styled.div`
   width:59%; 
`;
const NFTDrightcontainer = styled.div`
width: 100%;
max-width: 725px;
margin-right: auto;
padding: 70px 100px 70px 70px;
position:relative;
`;
const NFTDrtitle = styled.div`
  font-size:28px; letter-spacing:-1.4px; color:#000; margin:0px 0px 16px 0px; font-weight:700; line-height:normal;
`;
const NFTDRtopbar = styled(FlexDiv)`
  justify-content:space-between;
  align-items:flex-start;
`;
const NFTtopbarright = styled(FlexDiv)`
  position:absolute; right:0px;
`;
const NFTLock = styled(FlexDiv)`
  width:34px;
  height:34px;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%);
  border-radius: 30px;
  margin-right:5px;
`;
const NFTLike = styled(FlexDiv)`
  width: 56px;
  height: 34px;
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

const Decs2 = styled.div`
  font-size:16px; letter-spacing:-0.8px; color:#000; margin:0px 0px 20px 0px; font-weight:500; line-height:28px;
`;

const Historysection = styled(FlexDiv)`
  justify-content:flex-start; margin-bottom:40px;
  button{font-size:10px; letter-spacing:-0.36px; color:#000; padding:6px 15px; border-radius:9px; border:1px solid #000; margin:0px 0px 0px 58px;
  :hover{background-color:#000; color:#fff;}
  }
`;

const Edition = styled(FlexDiv)`
  justify-content: flex-start;
  align-items:flex-start;
  margin: 0px 0px 50px;
  .ed-box {
    margin-right:50px;
    p {
      color: #000;
      font-size: 16px;
      letter-spacing: -0.8px;
      font-weight: 600;
      margin: 0px 0px 10px;
    }
    a{
      color:#0066ff;
      font-size:12px;
      letter-spacing:-0.6px;
      font-weight:600;
    }
    h3 {
      color: #000;
      font-size: 32px;
      letter-spacing: -1.42px;
      font-weight: 700;
      margin: 0px 0px 7px;
    }
    .gray-t
    {
      color: rgb(0 0 0 / 30%);
      font-size: 16px;
      letter-spacing: -0.71px;
      font-weight: 600;
      margin:0px 0px 8px;
    }
    .royalty
    {
      color: #000;
      font-size: 12px;
      letter-spacing: -0.6px;
      margin:0px;
      line-height:normal;
    }
    .time-block
    {
      margin-right:20px;
    }
  }
`;

const NFTcartButtons = styled.div`
  button{background-color:#000; color:#fff; padding:13px 60px; border-radius:15px; font-size:14px; letter-spacing:-0.5px;
    :hover{background-image:linear-gradient(90deg, #d121d6, #febf11); box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 20%);}
  }
`;

export default NftDetail;
