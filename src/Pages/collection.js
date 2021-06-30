import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";


import SerICON from "../Assets/images/searchICO.svg";
import FiltICON from "../Assets/images/filterICO.svg";
import CollImg from "../Assets/images/nft1.jpg";

class Collection extends Component {

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
    let { NFTs, moreNFTs, categories, pagination } = this.props;
    const { tabPanel, page, filter } = this.state;
    if (moreNFTs) {
      NFTs = NFTs.concat(moreNFTs)
    }
    return (
      <Gs.MainSection>
        <FilterMBX>
          
          <FilterLbx>
              <button className={tabPanel==='all'?'active':''} id='all' onClick={() => {this.onCategoryChange('all')}}>All</button> 
              {categories?categories.map((category, key)=>{
                  return <button id={category.id} key={key} className={tabPanel===category.id?'active':''} onClick={() => {this.onCategoryChange(category.id)}} >{category.categoryName}</button>
              }):''}
          </FilterLbx>

          <FilterRbx>
            <FilterInputBX>
              <input placeholder='Search' onKeyUp={(e)=> this.onSearchKeyUp(e)}></input>
              <SearchICO>
                <img src={SerICON} alt="" />
              </SearchICO>
            </FilterInputBX>

            <FilterBAR
              onClick={() => this.toggle(1)}
              className={this.state.isOpen1 ? "active" : ""}
            >
              <FilterICO>
                <img src={FiltICON} alt="" />
              </FilterICO>
              Filter: Live auction
              <Collapse
                isOpen={this.state.isOpen1}
                className={
                  "app__collapse collapse-css-transition  " +
                  (this.state.isOpen1 ? "collapse-active" : "")
                }
              >
                <DDContainer>
                  {/* <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="ALL"
                      defaultChecked={filter.includes('All')?true:false}
                      onChange={(e) => {this.setFilter('ALL', e)}}
                    />
                    <label htmlFor="vehicle1">All</label>
                  </div> */}
                  <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      value="AUCTION"
                      defaultChecked={filter.includes('AUCTION')?true:false}
                      onChange={(e) => {this.setFilter('AUCTION', e)}}
                    />
                    <label htmlFor="vehicle2">Live auction</label>
                  </div>
                  <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="BUYNOW"
                      onChange={(e) => {this.setFilter('BUYNOW', e)}}
                    />
                    <label htmlFor="vehicle3">Buy now</label>
                  </div>
                  <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle4"
                      name="vehicle4"
                      value="SOLD"
                      defaultChecked={filter.includes('SOLD')?true:false}
                      onChange={(e) => {this.setFilter('SOLD', e)}}
                    />
                    <label htmlFor="vehicle4">Sold</label>
                  </div>
                </DDContainer>
              </Collapse>
            </FilterBAR>
          </FilterRbx>
        </FilterMBX>
        
        <Gs.Container>
          <CollectionBoxes>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
              <OneCollBox>
                <div className="CIbox">
                  <img src={CollImg} alt="" />
                </div>
                <div className="collbox-desc">
                  <p className="coll-title">Collection Name</p>
                  <p className="creator-name">by Creator Name</p>
                </div>
              </OneCollBox>
          </CollectionBoxes>
        </Gs.Container>
      </Gs.MainSection>
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
const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
`;

const FilterMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  max-width: 1080px;
  margin: 30px auto 0 auto;
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

const CollectionBoxes = styled(FlexDiv)`
  margin:40px 0px 120px;
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
    top:20px;
    left:20px;
    .coll-title
    {
      font-size:20px;
      color:#000000;
      letter-spacing:-0.75px;
      font-weight:700;
      margin:0px 0px 2px;
    }
    .creator-name
    {
      font-size:16px;
      color:rgb(0 0 0 / 30%);
      letter-spacing:-0.8px;
      font-weight:600;
      margin:0px;
    }
  }
`;


export default Collection ;
