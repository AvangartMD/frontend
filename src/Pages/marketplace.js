import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import Collapse from '@kunukn/react-collapse';
import InfiniteScroll from 'react-infinite-scroll-component';

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
import Media from "./../Theme/media-breackpoint";

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
    return (
      <Gs.MainSection>
        <Gs.Container>
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
              Filter: <span>Live auction</span>
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
            {NFTs ?
              NFTs.length === 0 ?
                <NoDataFound>
                  No NFT Found
                </NoDataFound>
              :
              <InfiniteScroll className="IScroll"
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
                  {NFTs.map((nft, key) => (
                    <NFTCard
                      key={key}
                      nftSold={nft.nftSold}
                      name={nft.ownerId.name}
                      nftId={nft.id}
                      collectionId={nft.collectionId?.id}
                      auctionEndDate={nft.auctionEndDate}
                      nftImg={nft.image.compressed}
                      title={nft.title}
                      edition={nft.edition}
                      price={nft.price}
                      auctionTime={nft.auctionTime}
                      userImg={nft.ownerId.profile}
                      username={nft.ownerId.username}
                    />
                  ))}
                </NFTfourbox>
              
              </InfiniteScroll>
            : (
              <LoaderBX>
                {' '}
                <img src={LoaderGif} alt='' />{' '}
              </LoaderBX>
            )}
        </HomeNFTs>
        </Gs.Container>
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

const NFTfourbox = styled(FlexDiv)`  
    flex-wrap:wrap; margin:0px -10px 50px; justify-content:flex-start; align-items:flex-start;
    .row{margin:0px -10px;}
    img.main{width:100%; border-top-left-radius:10px; border-top-right-radius:10px;}
        .NFT-home-box{ border-radius:10px; border:1px solid #dddddd; 
          :hover{ box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);} 
          .NFT-home-box-inner{ padding:20px 15px;
            h4{margin:0px 0px 10px; font-size:18px; color:#000000; font-weight:600; line-height:normal; letter-spacing:-0.67px; overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              display: -webkit-box;
              -webkit-box-orient: vertical;}
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


const FilterMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  max-width: 1080px;
  margin: 60px auto 0 auto;
  ${Media.lg}{
    max-width:100%;
  }
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
    margin:0px 6px 0px 0px;
    &.active {
      background-color: #00babc;
      color: #fff;
    }
    :hover {
      background-color: #00babc;
      color: #fff;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
    :last-child
    {
      margin:0px;
    }
    ${Media.sm}{
      padding: 10px 19px;
    }
  }
  ${Media.md}{
    width:100%;
  }
`;
const FilterRbx = styled(FlexDiv)`
  width: 55%;
  justify-content: flex-end;
  ${Media.md}{
    width:100%;
    justify-content: space-between;
    margin-top:20px;
  }
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
  ${Media.md}{
    max-width:calc(50% - 5px);
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
  ${Media.md}{
    max-width:calc(50% - 5px);
  }
  span{
    ${Media.xs}{
      display:none;
    }
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
const NoDataFound = styled(FlexDiv)`
  width: 100%;
  text-align:center;
  font-size:16px;
  color:#000;
  margin:100px 0px;
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
