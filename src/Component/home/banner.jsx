import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';
import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { HashLink as Link } from "react-router-hash-link";
import styled from 'styled-components';
import { motion } from "framer-motion";
import Media from "../../Theme/media-breackpoint";

import LArrow from '../../Assets/images/banner-larrow.svg';
import RArrow from '../../Assets/images/banner-rarrow.svg';

import { actions } from '../../actions';
import { Context } from '../wrapper';
import { expiryTime } from '../../config';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  const carouselItems = [1, 2, 3, 4, 5, 6];
  return (
    <button
      className={active ? 'active' : 'inactive'}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};

class BannerTab extends Component {

  static contextType = Context;
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      loading: false,
      banners: cookies.get('banners') || null,
    }
  }

  async componentDidMount() {
    const { banners, cookies } = this.props
    if (!this.state.banners && !banners) {
      this.props.getBanners() // fetch banner list
    } else {
      this.props.setBanners(cookies.get('banners'))
    }
  }

  componentDidUpdate() {
    const { banners, cookies } = this.props
    if (banners && !cookies.get('banners')) {
      this.setCookie(banners) // set banners in cookie
    }
  }

  renderedBanner(banner, index) {
    let context = this.context;
    let img = ''
    let mob_img = ''
    if (context.locale === 'tr') {
      img = banner.banner.tu
      mob_img = banner.mobile.tu
    } else {
      img = banner.banner.en
      mob_img = banner.mobile.en
    }
    return (
      <div className='item' key={index}>
        <Link to={banner.url}>
          <motion.img
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            key={index}
            src={img}
            exit={{ opacity: 0 }}
            className="desktop-img"
          />
          <motion.img
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            key={index}
            src={mob_img}
            exit={{ opacity: 0 }}
            className="mobile-img"
          />
        </Link>
      </div >
    )
  }

  setCookie = (banners) => {
    const { cookies } = this.props;
    const expire = new Date(Date.now() + (expiryTime * 60 * 60 * 1000)) // cookie will expire after 12 hours
    cookies.set('banners', banners, { path: '/', expires: expire });
  }

  render() {
    return (
      <>
        <HomeBanner>
          {this.props.banners ?
            <Carousel responsive={responsive} showDots infinite={true} customDot={<CustomDot />}>
              {this.props.banners.map((banner, index) => this.renderedBanner(banner, index))}
            </Carousel>
            : 'loading..'}
        </HomeBanner>
      </>
    );
  }
}


const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const HomeBanner = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow:hidden;
  ${Media.md}{
    min-height:auto;
  }
  ${Media.xs}{
    max-height: 550px;
  }
  .item {
    img {
      width: 100%;
      height:100%;
      object-fit:cover;
      min-height: 100vh;
      margin-top:100px;
      ${Media.md}{
        
      }
      &.desktop-img
      {
        ${Media.xs}{
          display:none;
        }
      }
      &.mobile-img
      { display:none;
        ${Media.xs}{
          display:block;
        }
      }
      ${Media.md}{
        min-height:auto;
        margin-top:80px;
      }
    }
  }
  .react-multi-carousel-track
  {
    height: 100vh;
    ${Media.md}{
      height:auto;
    }
    ${Media.xs}{
      max-height: 550px;
    }
  }
  .react-multiple-carousel__arrow {
    background: transparent;
    min-width: 20px;
    min-height: 20px;
    padding: 0px;
    border-radius: 0px;
    z-index:1;
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
    left: calc(50% - 140px);
    bottom: 33px;
  }
  .react-multiple-carousel__arrow--right {
    right: calc(50% - 140px);
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
    ${Media.sm}{
      width:300px;
    }
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getBanners: () => dispatch(actions.fetchBanners()),
    setBanners: (data) => dispatch({ type: 'FETCHED_NFT_BANNERS', data: data })
  }
}

const mapStateToProps = (state) => {
  return {
    banners: state.fetchDashboardBanners,
  }
}

export default withCookies(connect(mapStateToProps, mapDipatchToProps)(BannerTab));