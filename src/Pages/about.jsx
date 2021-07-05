import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";

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
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
            </AboutboxImg>
          </Aboutfourpart>
          <Aboutfourpart className="mb-120">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. </p>
            <AboutboxImg>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <div className="ab-img-outer">
                    <img src={NFT2} alt="" />
                  </div>
                </Gs.TenpxGutter>
              </Gs.W25>
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
  h1{font-size: 72px; color: #000000; font-weight: 700; line-height:80px; letter-spacing: -3.43px; margin:0px auto 30px; max-width:800px; width:100%;}
  p.desc{font-size: 24px; color: #000000; line-height:38px; letter-spacing: -1px; margin:0px auto 80px; max-width:1080px; width:100%;}
  p.small{font-size: 16px; color: #000000; line-height:25px; letter-spacing: -0.8px; margin:0px auto 80px; max-width:1080px; width:100%;}
  .about-banner
  {
    max-width:1200px; height:400px; width:100%; margin:0px auto 80px; 
    img{width:100%; height:100%; object-fit:cover; border-radius:10px;}
  }
`;

const Aboutfourpart = styled.div`
  text-align:center; margin-bottom:80px;
  h3{font-size: 24px; color: #000000; font-weight: 700; line-height:normal; letter-spacing: -1.07px; margin:0px auto 10px;}
  p{font-size: 16px; color: #000000; line-height:25px; letter-spacing: -0.8px; margin:0px auto 30px; max-width:800px; width:100%;}
  &.mb-120{margin-bottom:120px;}
`;

const AboutboxImg = styled(FlexDiv)`
  margin:0px -10px;
  .ab-img-outer{
    width:255px; height:255px; border-radius:10px; overflow:hidden;
    img{ width:100%; height:100%; object-fit:cover;}
  }
`;

export default About;
