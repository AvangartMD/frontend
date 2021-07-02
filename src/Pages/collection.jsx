import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { actions } from "../actions";
import CollectionCard from "../Component/Cards/collectionCard";
import LoaderGif from "../Assets/images/loading.gif";
import SerICON from "../Assets/images/searchICO.svg";


class Collection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      tabPanel: 'all',
      searched: false,
    };
  }

  async componentDidMount() {
    const { categories, collections } = this.props;
    if (!collections) {
      this.props.getCollections() // fetch collections
    }
    if (!categories) {
      this.props.getCategories() // fetch categories
    }
  }

  render() {
    const { collections, categories } = this.props;
    const { tabPanel } = this.state;
    return (
      <Gs.MainSection>
        <FilterMBX>
          <FilterLbx>
            <button className={tabPanel==='all'?'active':''} id='all' onClick={() => {this.setState({ tabPanel: 'All' })}}>All</button> 
            {categories?categories.map((category, key)=>{
                return <button id={category.id} key={key} className={tabPanel===category.id?'active':''} onClick={() => {this.setState({ tabPanel: category.id })}} >{category.categoryName}</button>
            }):''}
          </FilterLbx>

          <FilterRbx>
            <FilterInputBX>
              <input placeholder='Search'></input>
              <SearchICO>
                <img src={SerICON} alt="" />
              </SearchICO>
            </FilterInputBX>
          </FilterRbx>
        </FilterMBX>

        <Gs.Container>
          <CollectionBoxes>
              {collections? 
                  collections.map((collection) => (
                    <CollectionCard
                      collImg={collection.logo}
                      collName={collection.name}
                      // creatorName={}
                    />
                  ))
              : <LoaderBX> <img src={LoaderGif} alt="" /> </LoaderBX>}
            
              {/* <OneCollBox>
                <Link to=''>
                  <div className="CIbox">
                    <img src={CollImg} alt="" />
                  </div>
                  <div className="collbox-desc">
                    <p className="coll-title">Collection Name</p>
                    <p className="creator-name">by Creator Name</p>
                  </div>
                </Link>
              </OneCollBox> */}

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

const CollectionBoxes = styled(FlexDiv)`
  margin:40px -10px 120px;
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

const mapDipatchToProps = (dispatch) => {
  return {
    getCollections: () => dispatch(actions.getCollections()),
    getCategories: () => dispatch(actions.fetchCategories()),
  }
}
const mapStateToProps = (state) => {
  return {
    collections: state.fetchCollections,
    categories: state.fetchCategory,
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Collection);
