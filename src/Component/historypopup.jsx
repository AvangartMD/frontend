import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

import CloseBTN01 from "../Assets/images/closeBTN01.svg";
import RedirectLink from "../Assets/images/icon-set-link.svg";


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

class Historypopup extends Component {
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
          <WhiteBX0D2>
            <CloseBTN className="ani-1" onClick={() => this.props.toggle(9)}>
              <img src={CloseBTN01} alt="" />
            </CloseBTN>

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

          </WhiteBX0D2>
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

export default Historypopup;


