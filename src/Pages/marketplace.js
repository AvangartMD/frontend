import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import { Link } from 'react-router-dom';
import Collapse from '@kunukn/react-collapse';
import InfiniteScroll from 'react-infinite-scroll-component';

import NFT2 from '../Assets/images/nft2.jpg';
import UserImg from '../Assets/images/user-img.jpg';
import HeartIcon from '../Assets/images/heart-icon.svg';
import StarIcon from '../Assets/images/star-icon.svg';
import RoundIcon from '../Assets/images/round-icon.svg';
import AdBannerIMG from '../Assets/images/adbanner.jpg';
import LArrow from '../Assets/images/banner-larrow.svg';
import RArrow from '../Assets/images/banner-rarrow.svg';
import SerICON from '../Assets/images/searchICO.svg';
import FiltICON from '../Assets/images/filterICO.svg';
import LoaderGif from '../Assets/images/loading.gif';
import NFTCard from '../Component/Cards/nftCard';

import { actions } from '../actions';

class MarketPlace extends Component {
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

  async componentDidMount() {
    const { categories, NFTs } = this.props;
    if (!NFTs) {
      this.props.getMarketPlaceNFT(); // fetch market place nft's
    }
    if (!categories) {
      this.props.getCategories(); // fetch categories
    }
  }

  fetchMore = () => {
    const { searched, filter, tabPanel, page } = this.state;
    this.setState({ page: page + 1 });
    let params = {
      page: page + 1,
      search: searched ? searched : null,
      filter: filter ? filter : null,
      category: tabPanel !== 'all' ? tabPanel : [],
    };
    this.props.getMoreMarketPlaceNFT(params); // fetch more market place NFTs
  };

  clearPreviousCreators = () => {
    this.props.clearMarketPlaceNFT(); // clear the previous nft
    this.props.clearMoreMarketPlaceNFT(); // clear the previous more nft
    this.props.clearPagination(); // clear the previous pagination
  };

  onSearchKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      this.clearPreviousCreators();
      this.setState({ page: 1 });
      this.props.getMarketPlaceNFT({ search: e.target.value }); // fetch search market place nft's
    }
  };

  setFilter = (value, event) => {
    const { filter } = this.state;
    let array = filter;
    this.clearPreviousCreators();
    if (event.target.checked) {
      array.push(event.target.value);
      this.setState({ filter: array, page: 1 });
    } else {
      const index = array.indexOf(value);
      array.splice(index, 1);
      this.setState({ filter: array, page: 1 });
    }
    this.props.getMarketPlaceNFT({ filter: array }); // fetch filter market place nft's
  };

  onCategoryChange = (category) => {
    this.clearPreviousCreators();
    if (category === 'all') {
      this.props.getMarketPlaceNFT(); // fetch market place nft's
    } else {
      this.props.getMarketPlaceNFT({ category: [category] }); // fetch filter market place nft's
    }
    this.setState({ tabPanel: category, page: 1 });
  };

  render() {
    let { NFTs, moreNFTs, categories, pagination } = this.props;
    const { tabPanel, page, filter } = this.state;
    if (moreNFTs) {
      NFTs = NFTs.concat(moreNFTs);
    }
    // console.log("nft ", NFTs);
    return (
      <Gs.MainSection>
        <FilterMBX>
          <FilterLbx>
            <button
              className={tabPanel === 'all' ? 'active' : ''}
              id='all'
              onClick={() => {
                this.onCategoryChange('all');
              }}
            >
              All
            </button>
            {categories
              ? categories.map((category, key) => {
                  return (
                    <button
                      id={category.id}
                      key={key}
                      className={tabPanel === category.id ? 'active' : ''}
                      onClick={() => {
                        this.onCategoryChange(category.id);
                      }}
                    >
                      {category.categoryName}
                    </button>
                  );
                })
              : ''}
          </FilterLbx>

          <FilterRbx>
            <FilterInputBX>
              <input
                placeholder='Search'
                onKeyUp={(e) => this.onSearchKeyUp(e)}
              ></input>
              <SearchICO>
                <img src={SerICON} alt='' />{' '}
              </SearchICO>
            </FilterInputBX>

            <FilterBAR
              onClick={() => this.toggle(1)}
              className={this.state.isOpen1 ? 'active' : ''}
            >
              <FilterICO>
                <img src={FiltICON} alt='' />
              </FilterICO>{' '}
              Filter: Live auction
              <Collapse
                isOpen={this.state.isOpen1}
                className={
                  'app__collapse collapse-css-transition  ' +
                  (this.state.isOpen1 ? 'collapse-active' : '')
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
                  <div className='md-checkbox'>
                    <input
                      type='checkbox'
                      id='vehicle2'
                      name='vehicle2'
                      value='AUCTION'
                      defaultChecked={filter.includes('AUCTION') ? true : false}
                      onChange={(e) => {
                        this.setFilter('AUCTION', e);
                      }}
                    />
                    <label htmlFor='vehicle2'>Live auction</label>
                  </div>
                  <div className='md-checkbox'>
                    <input
                      type='checkbox'
                      id='vehicle3'
                      name='vehicle3'
                      value='BUYNOW'
                      onChange={(e) => {
                        this.setFilter('BUYNOW', e);
                      }}
                    />
                    <label htmlFor='vehicle3'>Buy now</label>
                  </div>
                  <div className='md-checkbox'>
                    <input
                      type='checkbox'
                      id='vehicle4'
                      name='vehicle4'
                      value='SOLD'
                      defaultChecked={filter.includes('SOLD') ? true : false}
                      onChange={(e) => {
                        this.setFilter('SOLD', e);
                      }}
                    />
                    <label htmlFor='vehicle4'>Sold</label>
                  </div>
                </DDContainer>
              </Collapse>
            </FilterBAR>
          </FilterRbx>
        </FilterMBX>

        <HomeNFTs>
          <Gs.Container>
            {NFTs ? (
              <InfiniteScroll
                dataLength={pagination.totalRecords}
                next={this.fetchMore}
                hasMore={page < pagination.totalPages}
                loader={
                  <LoaderBX>
                    {' '}
                    <img src={LoaderGif} alt='' />{' '}
                  </LoaderBX>
                }
                // endMessage={<p>You have seen it all.!</p>}
              >
                <NFTfourbox>
                  {NFTs.map((nft) => (
                    <NFTCard
                      nftId={nft.id}
                      collectionId={nft.collectionId?.id}
                      auctionEndDate={nft.auctionEndDate}
                      nftImg={nft.image.compressed}
                      title={nft.title}
                      edition={nft.edition}
                      price={nft.price}
                      auctionTime={nft.auctionTime}
                      // userImg={}
                      username={nft.ownerId.username}
                    />
                  ))}
                </NFTfourbox>
              </InfiniteScroll>
            ) : (
              <LoaderBX>
                {' '}
                <img src={LoaderGif} alt='' />{' '}
              </LoaderBX>
            )}
          </Gs.Container>
        </HomeNFTs>
      </Gs.MainSection>
    );
  }
  toggle = (index) => {
    let collapse = 'isOpen' + index;
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
const HomeBanner = styled.div`
  height: 660px;
  width: 100%;
  .item {
    img {
      width: 100%;
    }
  }
  .react-multiple-carousel__arrow {
    background: transparent;
    min-width: 20px;
    min-height: 20px;
    padding: 0px;
    border-radius: 0px;
    :hover {
      background: transparent;
    }
  }
  .react-multiple-carousel__arrow--left::before {
    background: url(${LArrow}) no-repeat;
    color: transparent;
  }
  .react-multiple-carousel__arrow--right::before {
    background: url(${RArrow}) no-repeat;
    color: transparent;
  }
  .react-multiple-carousel__arrow--left {
    left: calc(42.8% + 1px);
    bottom: 33px;
  }
  .react-multiple-carousel__arrow--right {
    right: calc(42.8% + 1px);
    bottom: 33px;
  }
  .react-multi-carousel-dot-list {
    background-color: rgba(255, 255, 255, 0.85);
    width: 320px;
    height: 52px;
    border-radius: 20px;
    margin: 0 auto 20px;
    button {
      position: relative;
      margin: 0px 10px;
      padding: 0px 0px 0px 10px;
      font-size: 14px;
      color: rgb(0 0 0 / 20%);
      &.active {
        color: #000;
      }
      :before {
        content: '0';
        position: absolute;
        left: 0px;
      }
    }
  }
`;

const HomeNFTs = styled.div`
  width: 100%;
  margin-top: 40px;
  .home-title {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    margin-bottom: 30px;
    h3 {
      color: #000000;
      font-size: 32px;
      position: relative;
      line-height: 32px;
      margin: 0px 0px 15px;
      padding-left: 20px;
      letter-spacing: -1px;
      :before {
        content: '';
        position: absolute;
        left: 0px;
        top: 12px;
        width: 10px;
        height: 10px;
        background: url(${RoundIcon}) no-repeat;
      }
    }
  }
  .star-title {
    text-align: left;
    margin-bottom: 18px;
    h3 {
      color: #000000;
      font-size: 32px;
      position: relative;
      line-height: 32px;
      margin: 0px;
      padding-left: 20px;
      letter-spacing: -1px;
      :before {
        content: '';
        position: absolute;
        left: 0px;
        top: 12px;
        width: 12px;
        height: 12px;
        background: url(${StarIcon}) no-repeat;
      }
    }
  }
  .heart-title {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    margin-bottom: 30px;
    h3 {
      color: #000000;
      font-size: 32px;
      position: relative;
      line-height: 32px;
      margin: 0px 0px 15px;
      padding-left: 20px;
      letter-spacing: -1px;
      :before {
        content: '';
        position: absolute;
        left: 0px;
        top: 12px;
        width: 12px;
        height: 11px;
        background: url(${HeartIcon}) no-repeat;
      }
    }
  }
`;

const NFTfirstbox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  position: relative;
  border-radius: 10px;
  margin-bottom: 30px;
  .w60 {
    width: 60%;
  }
  .w40 {
    width: 40%;
  }
`;
const NFTfbleft = styled(FlexDiv)`
  background-color: #eef2f7;
  padding: 80px 0px;
  img {
    box-shadow: 20px 20px 40px 1px rgb(0 0 0 /30%);
  }
`;
const NFTfbright = styled.div`
  padding: 20px 50px;
  h3 {
    color: #000000;
    font-size: 22px;
    letter-spacing: -0.83px;
    margin: 0px 0px 10px;
    line-height: normal;
  }
  p {
    color: #000000;
    font-size: 12px;
    letter-spacing: -0.53px;
    margin: 0px 0px 10px;
    line-height: 20px;
  }
  a {
    color: #000000;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin: 0px 0px 40px;
    line-height: 20px;
    display: block;
    :hover {
      color: #555;
      text-decoration: underline;
    }
  }
`;
const NFTLike = styled(FlexDiv)`
  width: 56px;
  height: 34px;
  position: absolute;
  right: 20px;
  top: 20px;
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

const Edition = styled(FlexDiv)`
  justify-content: space-between;
  background-color: #eef2f7;
  border-radius: 10px;
  padding: 16px 20px;
  margin: 0px 0px 40px;
  .ed-box {
    p {
      color: #8e9194;
      font-size: 12px;
      letter-spacing: -0.6px;
      font-weight: 600;
      margin: 0px 0px 5px;
    }
    h3 {
      color: #000;
      font-size: 20px;
      letter-spacing: -0.89px;
      font-weight: 700;
      margin: 0px;
      span {
        font-size: 10px;
        font-weight: 300;
        letter-spacing: -0.44px;
      }
    }
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

const NFTfourbox = styled(FlexDiv)`  
    flex-wrap:wrap; margin:0px -10px 50px; 
    .row{margin:0px -10px;}
    img.main{width:100%; border-top-left-radius:10px; border-top-right-radius:10px;}
        .NFT-home-box{ border-radius:10px; border:1px solid #dddddd; 
          :hover{ box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);} 
          .NFT-home-box-inner{ padding:20px 15px;
            h4{margin:0px 0px 10px; font-size:18px; color:#000000; font-weight:600; line-height:normal; letter-spacing:-0.67px;}
            .edition2
            {
              justify-content:flex-start; padding:10px 15px; margin-bottom:20px;
              .ed-box{
                margin-right:20px;
                p{font-size:10px; letter-spacing:-0.5px; margin:0px;}
                h3{font-size:16px; letter-spacing:-0.71px;}
                button{font-size:10px; color:#000; letter-spacing:-0.36px; font-weight:600; line-height:normal; padding:10px 17px; border-radius:13px; border:1px solid #000000;
                  :hover{background-color:#d121d6; color:#fff; border-color:#d121d6;}
                }
              }
            }
            .JCSB{justify-content:space-between;
              .ed-box{margin-right:0px;}
            }
          }
        }
      }
      .JCSB {
        justify-content: space-between;
        .ed-box {
          margin-right: 0px;
        }
      }
    }
  }
`;

const NFTImgBX = styled(FlexDiv)`
  width: 100%;
  height: 253px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CollectionBar = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    letter-spacing: -0.62px;
    font-weight: 600;
    margin: 0px;
    color: #000;
    span {
      font-size: 12px;
      letter-spacing: -0.53px;
      font-weight: 300;
    }
    a {
      font-size: 10px;
      letter-spacing: -0.5px;
      font-weight: 600;
      color: #000;
      :hover {
        color: #555;
        text-decoration: underline;
      }
    }
  }
`;

const ViewallButton = styled.div`
  text-align: center;
  margin-bottom: 120px;
  button {
    border: 1px solid #000000;
    border-radius: 10px;
    width: 190px;
    height: 44px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.5px;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const CollectionSection = styled(FlexDiv)`
  margin: 0px -10px 50px;
  img {
    border-radius: 10px;
    border: 1px solid #dddddd;
  }
`;

const HomeTabs = styled.div`
  margin: 0px 0px 70px;
  .react-tabs__tab-list {
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .react-tabs__tab {
    bottom: 0px;
    padding: 6px 0px;
    margin: 0px 20px;
    color: rgb(0 0 0 / 30%);
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.8px;
  }
  .react-tabs__tab--selected {
    border: none;
    border-bottom: 3px solid #000000;
    color: #000;
  }
`;

const HomeTabDetail = styled(FlexDiv)`
  margin: 0px -10px;
  justify-content: flex-start;
`;

const HallofFameBox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  min-height: 260px;
  .HOF-inner {
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin: 0px 0px 10px;
    }
    p.user-name {
      margin: 0px 0px 15px;
      font-size: 18px;
      color: #000000;
      font-weight: 700;
      letter-spacing: -0.9px;
    }
    p.small {
      margin: 0px;
      font-size: 10px;
      color: #8e9194;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    p.price {
      margin: 0px;
      font-size: 16px;
      color: #000000;
      font-weight: 600;
      letter-spacing: -0.71px;
    }
  }
`;
const HallofFameBox2 = styled(FlexDiv)`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  .HOF-inner {
    img {
      width: 200px;
      height: 200px;
      margin: 0px 0px 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    p.title {
      margin: 0px 0px 15px;
      padding: 0px 15px;
      font-size: 12px;
      color: #000000;
      font-weight: 700;
      letter-spacing: -0.45px;
      line-height: normal;
    }
    p.small {
      margin: 0px;
      font-size: 10px;
      color: #8e9194;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    p.price {
      margin: 0px 0px 20px;
      font-size: 16px;
      color: #000000;
      font-weight: 600;
      letter-spacing: -0.71px;
    }
  }
`;

const AdBanner = styled.div`
  border-radius: 20px;
  padding: 120px 0px;
  margin: 120px 0px;
  text-align: center;
  background: url(${AdBannerIMG}) no-repeat;
  background-size: cover;
  p {
    color: #000000;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 700;
    line-height: normal;
    max-width: 680px;
    width: 100%;
    margin: 0 auto 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
  button {
    background-color: #000000;
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.5px;
    font-weight: 700;
    border-radius: 15px;
    width: 190px;
    height: 44px;
    :hover {
      background-color: #d121d6;
    }
  }
`;

const AdBanner2 = styled.div`
  padding: 120px 0px;
  margin: 120px 0px 0px;
  text-align: center;
  background: url(${AdBannerIMG}) no-repeat;
  background-size: cover;
  h2 {
    color: #000000;
    font-size: 42px;
    letter-spacing: -2px;
    font-weight: bold;
    line-height: normal;
    max-width: 680px;
    width: 100%;
    margin: 0 auto 30px;
  }
  p {
    color: #000000;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 700;
    line-height: normal;
    max-width: 680px;
    width: 100%;
    margin: 0 auto 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
  button {
    background-color: #f40058;
    color: #fff;
    font-size: 14px;
    letter-spacing: -0.5px;
    font-weight: 700;
    border-radius: 15px;
    width: 190px;
    height: 44px;
    :hover {
      background-color: #000;
    }
  }
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

const mapDipatchToProps = (dispatch) => {
  return {
    getMarketPlaceNFT: (params) => dispatch(actions.getMarketPlaceNFT(params)),
    getMoreMarketPlaceNFT: (params) =>
      dispatch(actions.getMoreMarketPlaceNFT(params)),
    getCategories: () => dispatch(actions.fetchCategories()),
    clearMarketPlaceNFT: () =>
      dispatch({ type: 'FETCHED_MARKETPLACE', data: [] }),
    clearPagination: () => dispatch({ type: 'FETCHED_PAGINATION', data: [] }),
    clearMoreMarketPlaceNFT: () =>
      dispatch({ type: 'FETCHED_MORE_MARKETPLACE', data: [] }),
  };
};
const mapStateToProps = (state) => {
  return {
    NFTs: state.fetchMarketPlaceNFT,
    pagination: state.fetchPagination,
    moreNFTs: state.fetchMoreMarketPlaceNFT,
    categories: state.fetchCategory,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(MarketPlace);
