import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";
import Media from '../Theme/media-breackpoint';

import AdBannerIMG from "../Assets/images/adbanner.jpg";
import NFT2 from "../Assets/images/nft1.jpg";

class About extends Component {

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
        <AboutMain>
          <h1>Lorem ipsum dolor sit consectetur adipiscing elit</h1>
          <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo.</p>
          <div className="about-banner">
            <img src={AdBannerIMG} alt="" />
          </div>
          <p className="small">Aenean tincidunt nunc quis pharetra finibus. Maecenas nunc tortor, ultrices in aliquam eu, fermentum id mauris. Pellentesque finibus urna sed enim interdum, non lobortis leo pharetra. Phasellus vitae leo ut elit imperdiet placerat. Suspendisse tincidunt risus semper finibus interdum. Sed sit amet diam nec libero vestibulum feugiat quis ac lectus. Phasellus non eros aliquet, sodales arcu eu, ullamcorper sem. Maecenas quam nunc, tincidunt eget metus eget, dictum cursus mi. Cras a nunc augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </AboutMain>
        <Gs.Container>
          <Aboutfourpart>
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. </p>
            <AboutboxImg>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
            </AboutboxImg>
          </Aboutfourpart>
          <Aboutfourpart className="mb-120">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. </p>
            <AboutboxImg>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
              <Gs.W25V2>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25V2>
            </AboutboxImg>
          </Aboutfourpart>
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
const AboutMain = styled.div`
  margin:120px 0px 80px; text-align:center;
  h1{font-size: 72px; color: #000000; font-weight: 700; line-height:80px; letter-spacing: -3.43px; margin:0px auto 30px; max-width:800px; width:100%;
    ${Media.md} {
      font-size:60px; line-height:70px; letter-spacing: -2.43px;
    }
    ${Media.sm} {
      font-size:38px; line-height:50px; letter-spacing: -1.81px;
    }
  }
  p.desc{font-size: 24px; color: #000000; line-height:38px; letter-spacing: -1px; margin:0px auto 80px; max-width:1080px; width:100%;
    ${Media.sm} {
      margin:0px auto 50px;
    }
  }
  p.small{font-size: 16px; color: #000000; line-height:25px; letter-spacing: -0.8px; margin:0px auto 80px; max-width:1080px; width:100%;
    ${Media.sm} {
      margin:0px auto 50px;
    }
  }
  .about-banner
  {
    max-width:1200px; height:400px; width:100%; margin:0px auto 80px; 
    img{width:100%; height:100%; object-fit:cover; border-radius:10px;
      ${Media.md} {
        object-fit:contain;
      }
      ${Media.sm} {
        object-fit:cover;
      }
    }
    ${Media.md} {
      height:auto;
    }
    ${Media.sm} {
      margin:0px auto 50px;
      height:260px;
    }
  }
  ${Media.sm} {
    margin:60px 10px 50px;
  }
`;

const Aboutfourpart = styled.div`
  text-align:center; margin-bottom:80px;
  h3{font-size: 24px; color: #000000; font-weight: 700; line-height:normal; letter-spacing: -1.07px; margin:0px auto 10px;}
  p{font-size: 16px; color: #000000; line-height:25px; letter-spacing: -0.8px; margin:0px auto 30px; max-width:800px; width:100%;}
  &.mb-120{margin-bottom:120px;
    ${Media.sm} {
      margin-bottom:60px;
    }
  }
  ${Media.sm} {
    margin:0px 10px 50px;
  }
`;

const AboutboxImg = styled(FlexDiv)`
  margin:0px -10px;
  .ab-img-outer{
    width:100%; height:255px; border-radius:10px; overflow:hidden;
    img{ width:100%; height:100%; object-fit:cover;}
    ${Media.md} {
      height:400px;
    }
    ${Media.sm} {
      height:300px;
    }
    ${Media.xs} {
      height:160px;
    }
  }
`;

Gs.W25V2 = styled(Gs.W25V2)`
  ${AboutboxImg} & {
    margin-bottom:0px;
    ${Media.md} {
      width:50%;
      margin-bottom:20px;
    }
    ${Media.sm} {
      margin-bottom:10px;
    }
  }
`;
Gs.TenpxGutter = styled(Gs.TenpxGutter)`
  ${AboutboxImg} & {
    ${Media.sm} {
      margin: 0px 5px;
    }
  }
`;

export default About;
