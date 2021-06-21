import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HeartIcon from '../../Assets/images/heart-icon.svg';
import StarIcon from '../../Assets/images/star-icon.svg';
import RoundIcon from '../../Assets/images/round-icon.svg';
import AdBannerIMG from '../../Assets/images/adbanner.jpg';

import { actions } from '../../actions';
import { Context } from '../wrapper'


class Info extends Component {

  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  async componentDidMount() {
    const { infos } = this.props;
    if (!infos) {
      // this.props.getInfo() // fetch info list
    }
  }
  
  renderedInfo(info, index) {
    let context = this.context;
    let img = ''
    if (context.locale === 'tr') {
      img = info.banner.tu
    } else {
      img = info.banner.en
    }
    return (
      <div className='item'>
        <a target='_blank' rel="noopener noreferrer"  href={info.url}><img src={img} alt='' id={info.id} /></a>
        <button onClick={() => {window.open(info.button_url, "_blank")}}>{info.button_text}</button>
      </div>
    )
  }

  render() {
    return (
      <>
        <HomeNFTs>
          <AdBanner2>
            <Link to='/'><img src={AdBannerIMG} alt='' /></Link>
            <button>Lorem ipsum</button>
          </AdBanner2>
        </HomeNFTs>
      </>
    );
  }
}

// Common Style Div
const HomeNFTs = styled.div`
  width: 100%;
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
const AdBanner2 = styled.div`
  height:540px;
  width:100%;
  position:relative;
  a{
    img{width: 100%; height: 100%; object-fit: cover;}
  }
  button {
    position:absolute;
    bottom:50px;
    left:calc(50% - 95px);
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
const mapDipatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(actions.fetcInfo()),
  }
}

const mapStateToProps = (state) => {
  return {
    infos: state.fetchDashboardInfo,
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(Info);
