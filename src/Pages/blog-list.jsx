import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";

import SerICON from '../Assets/images/searchICO.svg';
import NFT2 from "../Assets/images/nft1.jpg";

class BlogList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      tabPanel: 'all',
      searched: false,
      filter: [],
      page: 1,
    };
  }

  render() {
    return (
      <Gs.MainSection>
        <Gs.Container>
          <BlogListtitle>Avangart Blog</BlogListtitle>
          <FilterMBX>
            <FilterLbx>
              <button class="active" id="all">All</button>
              <button class="">Art</button>
              <button class="">Celebrity</button>
              <button class="">Sport</button>
            </FilterLbx>
            <FilterRbx>
              <FilterInputBX>
                <input placeholder='Search' />
                <SearchICO>
                  <img src={SerICON} alt='' />
                </SearchICO>
              </FilterInputBX>
            </FilterRbx>
          </FilterMBX>
          <NFTfourbox>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <Link to='/'>
                  <div className="NFT-home-box">
                    <ImgOuter>
                      <img src={NFT2} alt="" />
                    </ImgOuter>
                    <div className="NFT-home-box-inner">
                      <h4>
                        Content name / title dolor lorem ipsum sit adipiscing
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.</p>
                      <p className="date">13.07.2021</p>
                    </div>
                  </div>
                </Link>
              </Gs.TenpxGutter>
            </Gs.W25V2>
          </NFTfourbox>
        </Gs.Container>
      </Gs.MainSection>
    );
  }
}
// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
`;
const BlogListtitle = styled.div`
  font-size:32px; letter-spacing:-1.52px; font-weight:700; color:#000; margin:60px 0px 20px;
`;

const FilterMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  max-width: 1080px;
  margin: 30px auto 40px;
`;

const FilterLbx = styled(FlexDiv)`
  width:45%; justify-content: flex-start;
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
const FilterRbx = styled(FlexDiv)`
  width: 55%;
  justify-content: flex-end;
`;
const FilterInputBX = styled(FlexDiv)`
  width: 100%;
  max-width: 220px;
  position: relative;
  margin-right: 9px;

  input {
    background-color: #eef2f7;
    font-size: 14px;
    border-radius: 15px;
    border: 1px solid transparent;
    outline: none;
    height: 38px;
    width: 100%;
    padding: 3px 3px 3px 40px;
    :focus {
      background-color: #fff;
      border: 1px solid #00babc;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;
const SearchICO = styled(FlexDiv)`
  width: 21px;
  height: 21px;
  position: absolute;
  left: 11px;
  top: 9px;
`;
const ImgOuter = styled.div`
  width:255px;
  height:255px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  overflow:hidden;
  img {
    width: 100%;
    height:100%;
    object-fit:cover;
  }
`;

const NFTfourbox = styled(FlexDiv)`
  flex-wrap: wrap;
  margin: 0px -10px 120px;
  .row {
    margin: 0px -10px;
  }
  a{
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
        p{
          margin: 0px 0px 20px;
          font-size: 12px;
          color: #000000;
          line-height: 16px;
          letter-spacing: -0.3px;
          &.date{
            font-weight:600; color:#8e9194; margin:0px;
          }
        }
      }
      :hover{
        box-shadow:0 10px 10px 0 rgb(0 0 0 / 20%);
      }
    }
  }
`;

export default BlogList;