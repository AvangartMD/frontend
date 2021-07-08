import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";

import HeartIcon from '../../Assets/images/heart-icon.svg';
import StarIcon from '../../Assets/images/star-icon.svg';
import RoundIcon from '../../Assets/images/round-icon.svg';

import { actions } from '../../actions';
import { Context } from '../wrapper';
import { expiryTime } from '../../config';



class Info extends Component {

  static contextType = Context;
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      loading: false,
      infos: cookies.get('infos') || null,
    }
  }

  async componentDidMount() {
    const { infos, cookies } = this.props;
    if (!this.state.infos && !infos) {
      this.props.getInfo() // fetch info list
    } else {
      this.props.setInfos(cookies.get('infos'))
    }
  }

  componentDidUpdate(){
    const { infos, cookies } = this.props;
    if (infos && !cookies.get('infos')) {
      this.setCookie(infos) // set infos in cookie
    }
  }

  setCookie = (infos) => {
    const { cookies } = this.props;
    const expire = new Date(Date.now()+(expiryTime*60*60*1000)) // cookie will expire after 12 hours
    cookies.set('infos', infos, { path: '/', expires: expire });
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
      <AdBanner2 key={index}>
        <a target='_blank' rel="noopener noreferrer" href={info.url}>
          <motion.img
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            key={img}
            src={img}
            exit={{ opacity: 0 }}
          />
        </a>
        <button className="ani-1" onClick={() => {window.open(info.button_url, "_blank")}}>{info.button_text}</button>
      </AdBanner2>
    )
  }

  render() {
    return (
      <HomeNFTs>
        <AnimatePresence>
          {this.props.infos?
              this.props.infos.map((banner, index) => this.renderedInfo(banner, index))
            : 'loading..'}
        </AnimatePresence>
      </HomeNFTs>
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
      box-shadow: 2px 5px 10px 0px rgb(0 0 0 / 30%);
    }
  }
`;
const mapDipatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(actions.fetcInfo()),
    setInfos: (data) => dispatch({type: 'FETCHED_INFO', data: data})
  }
}

const mapStateToProps = (state) => {
  return {
    infos: state.fetchDashboardInfo,
  }
}

export default withCookies(connect(mapStateToProps, mapDipatchToProps)(Info));
