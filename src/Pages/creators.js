import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import Gs from '../Theme/globalStyles';
import { connect } from "react-redux";
import Collapse from '@kunukn/react-collapse'
import InfiniteScroll from 'react-infinite-scroll-component'

import { actions } from "../actions";

import NftImg from '../Assets/images/nftBack.jpg';
import SerICON from '../Assets/images/searchICO.svg';
import FiltICON02 from '../Assets/images/sortICO.svg';
import LoaderGif from '../Assets/images/loading.gif'
import UserImg01 from '../Assets/images/userImg.png'


class Creators extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen1: false,
            tabPanel: 'all',
            searched: false,
            ranked: false,
            page: 1,
        }
    }

    async componentDidMount() {
        const { creators, categories } = this.props;
        if (!creators) {
            this.props.getCreators() // fetch creators
        }
        if (!categories) {
            this.props.getCategories() // fetch categories
        }
    }

    renderCreators = (creators) => {
        return creators.map( (creator, key) => {
            return <CreatSBX01 key={key}>
                <ImgBannerBX>
                    <img src={creator.cover} alt='' />
                </ImgBannerBX>
                <CreatSBX02>
                    <UserImg> <img src={creator.profile} alt='' /></UserImg>
                    <CretrTitle01>
                        {creator.name}
                    <span>@{creator.username}</span>
                    </CretrTitle01>
                    <CretrText01>
                    {/* Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu. */}
                        {creator.bio}
                    </CretrText01>

                    <CretrInfoMBX>
                        <CretrInfoSBX01>Created<span>{creator.nftCreated}</span></CretrInfoSBX01>
                        <CretrInfoSBX01>Followers<span>{creator.followersCount}</span></CretrInfoSBX01>
                        <CretrInfoSBX01>Following<span>{creator.followingCount}</span></CretrInfoSBX01> 
                    </CretrInfoMBX>

                    <CretrBTN01>See artworks</CretrBTN01>

                </CreatSBX02>
            </CreatSBX01>
        })
    }

    clearPreviousCreators = () => {
        this.props.clearCreators() // clear the previous creators
        this.props.clearMoreCreators() // clear the previous more creators
        this.props.clearPagination() // clear the previous pagination
    } 

    onSearchKeyUp = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            this.clearPreviousCreators()
            this.setState({ page: 1 })
            this.props.getCreators({ 'search' : e.target.value }) // fetch search creators
        }
    }

    setRank = (rank) => {
        this.clearPreviousCreators()
        this.setState({ page: 1 })
        this.props.getCreators({ 'rank' : rank }) // fetch rank creators
    }

    onCategoryChange = (category) => {
        this.clearPreviousCreators()
        if (category === 'all') {
            this.props.getCreators() // fetch creators
        } else {
            this.props.getCreators({ 'category': [category] }) // fetch category creators
        }
        this.setState({ tabPanel: category, page: 1 })
    }

    fetchMore = () => {
        const { searched, ranked, tabPanel, page } = this.state
        this.setState({ page: page+1 })
        let params = {
            'page': page+1,
            'search': searched?searched:null,
            'rank': ranked?ranked:null,
            'category': tabPanel!=='all'?tabPanel:[],
        }
        this.props.getMoreCreators(params) // fetch more creators
    }

    render() {
        let { creators, moreCreators, categories, pagination } = this.props;
        const { tabPanel, page } = this.state;
        if (moreCreators) {
            creators = creators.concat(moreCreators)
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
                            <SearchICO><img src={SerICON} alt="" /> </SearchICO>
                        </FilterInputBX>
                        <FilterBAR onClick={() => this.toggle(1)} className={(this.state.isOpen1 ? 'active' : '')}>
                            <FilterICO><img src={FiltICON02} alt="" /></FilterICO> Rank
                            <Collapse isOpen={this.state.isOpen1} className={'app__collapse collapse-css-transition  ' + (this.state.isOpen1 ? 'collapse-active' : '')}>
                                <DDContainer>
                                    <DDBTN01 onClick={() => {this.setRank('name')}}>by Name</DDBTN01>
                                    <DDBTN01 onClick={() => {this.setRank('follower')}}>by Follower</DDBTN01> 
                                </DDContainer>
                            </Collapse>
                        </FilterBAR>
                    </FilterRbx>
                </FilterMBX>

                <Gs.Container>

                    {creators?
                        <InfiniteScroll 
                            dataLength={pagination.totalRecords}
                            next={this.fetchMore}
                            hasMore={page < pagination.totalPages}
                            loader={<LoaderBX> <img src={LoaderGif} alt="" /> </LoaderBX>}
                            // endMessage={<p>You have seen it all.!</p>}
                        >
                            <CreatorMBX>
                                {this.renderCreators(creators)}
                            </CreatorMBX>
                        </InfiniteScroll>
                    :<LoaderBX> 
                        <img src={LoaderGif} alt="" />
                    </LoaderBX>}

                    {/* <CreatorMBX>
                        <CreatSBX01>
                            <ImgBannerBX>
                                <img src={NftImg} alt='' />
                            </ImgBannerBX>
                            <CreatSBX02>
                                <UserImg> <img src={UserImg01} alt='' /></UserImg>
                                <CretrTitle01>
                                User Name
                                <span>@username</span>
                                </CretrTitle01>
                                <CretrText01>
                                Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.
                                </CretrText01>

                                <CretrInfoMBX>
                                    <CretrInfoSBX01>Created<span>519</span></CretrInfoSBX01>
                                    <CretrInfoSBX01>Followers<span>9875</span></CretrInfoSBX01>
                                    <CretrInfoSBX01>Following<span>4301</span></CretrInfoSBX01> 
                                </CretrInfoMBX>

                                <CretrBTN01>See artworks</CretrBTN01>

                            </CreatSBX02>
                        </CreatSBX01>
                    </CreatorMBX> */}

                </Gs.Container>
            </Gs.MainSection>
        );
    }
    toggle = index => {
        let collapse = 'isOpen' + index;
        this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
    };
}
// Common Style Div 
const FlexDiv = styled.div`
display: flex; align-items: center; justify-content:center; flex-wrap:wrap;
`;
const LoaderBX = styled(FlexDiv)`
  width:100%;  margin:50px auto;  
`
const FilterMBX = styled(FlexDiv)`
  width:100%; justify-content:space-between; max-width:1080px; margin:30px auto 0 auto;
`
const FilterLbx = styled(FlexDiv)`
 width:45%; justify-content:flex-start; 
 button{  display:inline-block;padding: 10px 25px; font-size:14px; font-weight:600; color:#000000; border-radius: 15px; background-color: #eef2f7; margin-right:8px;  
  &.active{ background-color:#00babc; color:#fff; } 
  :hover{ background-color:#00babc; color:#fff; box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2); }
 } 
`
const FilterRbx = styled(FlexDiv)`
 width:55%; justify-content:flex-end; 
`
const FilterInputBX = styled(FlexDiv)`
  width:100%; max-width:220px; position:relative; margin-right: 9px; 
  input{ background-color:#eef2f7; font-size:14px; border-radius:15px; border:1px solid transparent; outline:none; height:38px; width:100%; padding:3px 3px 3px 40px;
  :focus{background-color:#fff; border:1px solid #00babc; box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);}
  } 
`
const SearchICO = styled(FlexDiv)`
  width:21px; height:21px; position:absolute; left: 11px;  top: 9px;
`
const FilterICO = styled(FlexDiv)`
  width:21px; height:21px; position:absolute; left: 11px;  top: 9px;
`
const FilterBAR = styled(FlexDiv)`
   width:100%; max-width:220px; justify-content:flex-start; position:relative; background-color:#eef2f7; border-radius:15px; border:0px; outline:none; height:38px;padding:3px 3px 3px 40px; font-size:14px; color:#000000;  cursor: pointer; border:1px solid transparent;  
  &.active, &:hover{ background-color:#fff; border:1px solid #00babc; box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2); }  
`
const DDContainer = styled(FlexDiv)` 
    position:absolute; background-color:#fff; padding:15px; border-radius: 20px; box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2); top:calc(100% + 7px); width:100%; left:0;  overflow:hidden; z-index:100;   
  & .md-checkbox:hover{ background-color:#D9F5F5;} 
`
const CreatorMBX = styled(FlexDiv)`
 margin:40px -10px 40px -10px; justify-content:flex-start; overflow:hidden;
`
const CreatSBX01 = styled(FlexDiv)`
    width:calc(25% - 20px); margin:10px 10px 20px 10px;  border:1px solid #dddddd; border-radius:10px; justify-content:flex-start; align-items:flex-start; 

    :hover{ box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);}
`
const ImgBannerBX = styled(FlexDiv)`
 width:100%; height:100px; border-radius:10px 10px 0 0 ; overflow: hidden; 
 img{ width:100%; height:100%;  object-fit:cover;} 
`
const CreatSBX02 = styled(FlexDiv)`
    width:100%; padding:14px; flex-direction:column;
`
const UserImg = styled(FlexDiv)`
    width:72px; height:72px; border-radius:36px; overflow:hidden; border:solid 1px #eef2f7; margin-top: -50px; 
    img{ width:100%; height:100%; object-fit: cover;}
` 
const CretrTitle01 = styled.div`
    display:block; font-size:18px; font-weight:600; color:#000; margin:10px 0 0 0; 
    span{ display:block; text-align:center; font-size:12px; } 
`
const CretrText01 = styled.div`
    font-size:10px; text-align:center; line-height:1.6; margin:10px 0 0 0; min-height:52px;

`
const CretrInfoMBX = styled(FlexDiv)`
    width:100%; padding:12px; margin:32px 0 18px 0; border:1px solid #dddddd; border-radius: 10px;
`
const CretrInfoSBX01  = styled(FlexDiv)`
    width:33.33%; color:#8e9194; font-size:10px;
    span{ width:100%; font-weight:600; color:#000; font-size:16px; text-align:center}
`                              
const CretrBTN01 = styled.button`
    color:#000; border:2px solid #000; display: inline-block; padding:11px 26px; border-radius:15px; font-size:14px; font-weight:600; margin-bottom:15px; 
`

const DDBTN01 = styled.button`
    font-size:12px; color:#000; padding:4px 12px; width:100%; text-align:left; margin:4px 0;

    :hover{ background-color:#D9F5F5;}
`

const mapDipatchToProps = (dispatch) => {
    return {
      getCreators: (params) => dispatch(actions.getCreators(params)),
      getCategories: () => dispatch(actions.fetchCategories()),
      getMoreCreators: (params) => dispatch(actions.getMoreCreators(params)),
      clearCreators: () => dispatch({ type: 'CLEAR_CREATORS', data: []}),
      clearPagination: () => dispatch({ type: 'CLEAR_PAGINATION', data: []}),
      clearMoreCreators: () => dispatch({ type: 'CLEAR_MORE_CREATORS', data: []}),
    }
}

const mapStateToProps = (state) => {
    return {
      creators: state.fetchCreators,
      moreCreators: state.fetchMoreCreators,
      pagination: state.fetchPagination,
      categories: state.fetchCategory,
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Creators);