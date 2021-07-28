import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import styled from 'styled-components';

import Gs from '../../Theme/globalStyles';
import HeartIcon from '../../Assets/images/heart-icon.svg';
import StarIcon from '../../Assets/images/star-icon.svg';
import RoundIcon from '../../Assets/images/round-icon.svg';

import { actions } from '../../actions';
import { Context } from '../wrapper';
import { expiryTime } from '../../config';



class HallOfFrameInfo extends Component {

  static contextType = Context;
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      loading: false,
      infos: cookies.get('hallFrameInfo') || null,
    }
  }

  async componentDidMount() {
    const { infos, cookies } = this.props;
    if (!this.state.infos && !infos) {
      this.props.getInfo() // fetch hall frame info list
    } else {
      this.props.setInfos(cookies.get('hallFrameInfo'))
    }
  }

  componentDidUpdate(){
    const { infos, cookies } = this.props;
    if (infos && !cookies.get('hallFrameInfo')) {
      this.setCookie(infos) // set hall frame info in cookie
    }
  }

  setCookie = (infos) => {
    const { cookies } = this.props;
    const expire = new Date(Date.now()+(expiryTime*60*60*1000)) // cookie will expire after 12 hours
    cookies.set('hallFrameInfo', infos, { path: '/', expires: expire });
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
      <AdBanner key={index}>
        <Link to={info.url}>
          <motion.img
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            key={img}
            src={img}
            exit={{ opacity: 0 }}
          />
        </Link>
        <button onClick={() => {window.open(info.button_url)}}>{info.button_text}</button>
      </AdBanner>
    )
  }

  render() {
    return (
        <HomeNFTs>
          <Gs.Container>
            {this.props.infos?
            this.props.infos.map((info, index) => { return this.renderedInfo(info, index);})
              : 'loading..'}
          </Gs.Container>
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
const AdBanner = styled.div`
  border-radius: 20px;
  margin: 120px 0px;
  height:406px;
  position:relative;
  a{
    img{width: 100%; height: 100%; object-fit: cover; border-radius:20px;}
  }
  button {
    position:absolute;
    bottom:50px;
    left:calc(50% - 95px);
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
      box-shadow: 2px 5px 10px 0px rgb(0 0 0 / 30%);
    }
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(actions.fetcHallFrameInfo()),
    setInfos: (data) => dispatch({type: 'FETCHED_HALL_FRAME_INFO', data: data})
  }
}

const mapStateToProps = (state) => {
  return {
    infos: state.fetchDashboardHallFrameInfo,
  }
}

export default withCookies(connect(mapStateToProps, mapDipatchToProps)(HallOfFrameInfo));
