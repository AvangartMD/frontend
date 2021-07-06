import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import Sticky from "react-sticky-el";

import AdBannerIMG from "../Assets/images/adbanner.jpg";
import NFT2 from "../Assets/images/nft1.jpg";

class Legal extends Component {

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
        <Gs.Container>
          <NFTminting>
            <Legalleft>
              <Sticky>
                <NFTLeft>
                  <Link className="active"
                    to="#terms"
                    smooth={true}
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="#privacy"
                    smooth={true}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="#cookie"
                    smooth={true}
                  >
                    Cookie Policy
                  </Link>
                </NFTLeft>
              </Sticky>
            </Legalleft>
            <Legalright>
              <h3 id="terms">Terms of Service</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.</p>

              <p>Suspendisse aliquam nisl neque. Nam scelerisque ornare mi, a hendrerit tellus convallis id. Praesent ut ultricies turpis. Nullam scelerisque egestas lectus, ac malesuada lorem tincidunt in. Nam rutrum hendrerit congue. Ut condimentum massa non eros dictum aliquet. Praesent laoreet purus eu sodales tempus. Quisque placerat ipsum vel dui lobortis aliquam. Mauris feugiat pulvinar nibh sed sodales. In vel sem dui.</p>

              <p>Aenean tincidunt nunc quis pharetra finibus. Maecenas nunc tortor, ultrices in aliquam eu, fermentum id mauris. Pellentesque finibus urna sed enim interdum, non lobortis leo pharetra. Phasellus vitae leo ut elit imperdiet placerat. Suspendisse tincidunt risus semper finibus interdum. Sed sit amet diam nec libero vestibulum feugiat quis ac lectus. Phasellus non eros aliquet, sodales arcu eu, ullamcorper sem. Maecenas quam nunc, tincidunt eget metus eget, dictum cursus mi. Cras a nunc augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

              <p>Aliquam erat volutpat. Duis maximus quis risus sed lobortis. Cras non magna eu mi auctor aliquet. Donec eu orci vel mi gravida tincidunt. Aenean id lacinia metus. Fusce nec dapibus dolor, sit amet sodales ipsum. Nullam ultricies mi nec auctor tincidunt. Ut pulvinar consequat lacinia. Nullam aliquet pharetra ante at aliquet. Sed mattis nibh ante, vitae tincidunt ante ornare congue. Suspendisse velit nisi, dignissim id fringilla ut, fringilla vel erat. Duis id lacus ut nibh efficitur interdum a a sem. Curabitur eu lacinia dolor. Nunc euismod venenatis turpis a lobortis.</p>
              <p>Suspendisse aliquam nisl neque. Nam scelerisque ornare mi, a hendrerit tellus convallis id. Praesent ut ultricies turpis. Nullam scelerisque egestas lectus, ac malesuada lorem tincidunt in. Nam rutrum hendrerit congue. Ut condimentum massa non eros dictum aliquet. Praesent laoreet purus eu sodales tempus. Quisque placerat ipsum vel dui lobortis aliquam. Mauris feugiat pulvinar nibh sed sodales. In vel sem dui.</p>

              <p>Aenean tincidunt nunc quis pharetra finibus. Maecenas nunc tortor, ultrices in aliquam eu, fermentum id mauris. Pellentesque finibus urna sed enim interdum, non lobortis leo pharetra. Phasellus vitae leo ut elit imperdiet placerat. Suspendisse tincidunt risus semper finibus interdum. Sed sit amet diam nec libero vestibulum feugiat quis ac lectus. Phasellus non eros aliquet, sodales arcu eu, ullamcorper sem. Maecenas quam nunc, tincidunt eget metus eget, dictum cursus mi. Cras a nunc augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

              <h3 id="privacy">Privacy Policy</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.</p>

              <p>Suspendisse aliquam nisl neque. Nam scelerisque ornare mi, a hendrerit tellus convallis id. Praesent ut ultricies turpis. Nullam scelerisque egestas lectus, ac malesuada lorem tincidunt in. Nam rutrum hendrerit congue. Ut condimentum massa non eros dictum aliquet. Praesent laoreet purus eu sodales tempus. Quisque placerat ipsum vel dui lobortis aliquam. Mauris feugiat pulvinar nibh sed sodales. In vel sem dui.</p>
              <p>Suspendisse aliquam nisl neque. Nam scelerisque ornare mi, a hendrerit tellus convallis id. Praesent ut ultricies turpis. Nullam scelerisque egestas lectus, ac malesuada lorem tincidunt in. Nam rutrum hendrerit congue. Ut condimentum massa non eros dictum aliquet. Praesent laoreet purus eu sodales tempus. Quisque placerat ipsum vel dui lobortis aliquam. Mauris feugiat pulvinar nibh sed sodales. In vel sem dui.</p>

              <p>Aenean tincidunt nunc quis pharetra finibus. Maecenas nunc tortor, ultrices in aliquam eu, fermentum id mauris. Pellentesque finibus urna sed enim interdum, non lobortis leo pharetra. Phasellus vitae leo ut elit imperdiet placerat. Suspendisse tincidunt risus semper finibus interdum. Sed sit amet diam nec libero vestibulum feugiat quis ac lectus. Phasellus non eros aliquet, sodales arcu eu, ullamcorper sem. Maecenas quam nunc, tincidunt eget metus eget, dictum cursus mi. Cras a nunc augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

              <p>Aenean tincidunt nunc quis pharetra finibus. Maecenas nunc tortor, ultrices in aliquam eu, fermentum id mauris. Pellentesque finibus urna sed enim interdum, non lobortis leo pharetra. Phasellus vitae leo ut elit imperdiet placerat. Suspendisse tincidunt risus semper finibus interdum. Sed sit amet diam nec libero vestibulum feugiat quis ac lectus. Phasellus non eros aliquet, sodales arcu eu, ullamcorper sem. Maecenas quam nunc, tincidunt eget metus eget, dictum cursus mi. Cras a nunc augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

              <p>Aliquam erat volutpat. Duis maximus quis risus sed lobortis. Cras non magna eu mi auctor aliquet. Donec eu orci vel mi gravida tincidunt. Aenean id lacinia metus. Fusce nec dapibus dolor, sit amet sodales ipsum. Nullam ultricies mi nec auctor tincidunt. Ut pulvinar consequat lacinia. Nullam aliquet pharetra ante at aliquet. Sed mattis nibh ante, vitae tincidunt ante ornare congue. Suspendisse velit nisi, dignissim id fringilla ut, fringilla vel erat. Duis id lacus ut nibh efficitur interdum a a sem. Curabitur eu lacinia dolor. Nunc euismod venenatis turpis a lobortis.</p>

              <h3 id="cookie">Cookie Policy</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.</p>

              <p>Suspendisse aliquam nisl neque. Nam scelerisque ornare mi, a hendrerit tellus convallis id. Praesent ut ultricies turpis. Nullam scelerisque egestas lectus, ac malesuada lorem tincidunt in. Nam rutrum hendrerit congue. Ut condimentum massa non eros dictum aliquet. Praesent laoreet purus eu sodales tempus. Quisque placerat ipsum vel dui lobortis aliquam. Mauris feugiat pulvinar nibh sed sodales. In vel sem dui.</p>

              <p>Aenean tincidunt nunc quis pharetra finibus. Maecenas nunc tortor, ultrices in aliquam eu, fermentum id mauris. Pellentesque finibus urna sed enim interdum, non lobortis leo pharetra. Phasellus vitae leo ut elit imperdiet placerat. Suspendisse tincidunt risus semper finibus interdum. Sed sit amet diam nec libero vestibulum feugiat quis ac lectus. Phasellus non eros aliquet, sodales arcu eu, ullamcorper sem. Maecenas quam nunc, tincidunt eget metus eget, dictum cursus mi. Cras a nunc augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <p>Aliquam erat volutpat. Duis maximus quis risus sed lobortis. Cras non magna eu mi auctor aliquet. Donec eu orci vel mi gravida tincidunt. Aenean id lacinia metus. Fusce nec dapibus dolor, sit amet sodales ipsum. Nullam ultricies mi nec auctor tincidunt. Ut pulvinar consequat lacinia. Nullam aliquet pharetra ante at aliquet. Sed mattis nibh ante, vitae tincidunt ante ornare congue. Suspendisse velit nisi, dignissim id fringilla ut, fringilla vel erat. Duis id lacus ut nibh efficitur interdum a a sem. Curabitur eu lacinia dolor. Nunc euismod venenatis turpis a lobortis.</p>

            </Legalright>
          </NFTminting>
        </Gs.Container>
      </Gs.MainSection >
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
const NFTminting = styled(FlexDiv)`
  align-items: flex-start;
  position: relative;
  margin: 60px 0px;
  .sticky {
    top: 20px !important;
  }
  .displayflex {
    display: flex;
    flex-wrap: wrap;
  }
`;

const NFTLeft = styled.div`
  margin: 0px 10px;
  .active {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.8px;
    margin: 0px 0px 15px;
    border-bottom: 3px solid #000;
    padding-bottom: 5px;
    display: inline-block;
  }
  a {
    display: block;
    margin: 0px 0px 22px;
    font-size: 18px;
    color: rgb(0 0 0 / 30%);
    font-weight: 600;
    letter-spacing: -0.8px;
    :hover {
      color: rgb(0 0 0 / 60%);
    }
    &.AdminLink {
      color: rgb(0 186 188 / 30%);
      :hover {
        color: rgb(0 186 188 / 60%);
      }
    }
  }
`;
const Legalleft = styled.div`
  max-width:240px;
  width:100%;
`;
const Legalright = styled.div`
  max-width:840px; width:100%;
  h3{font-size:24px; letter-spacing:-1.07px; font-weight:700; margin:0px 0px 15px; color:#000;}
  p{font-size:16px; letter-spacing:-0.8px; line-height:normal; margin:0px 0px 30px; color:#000;}
`;


export default Legal;
