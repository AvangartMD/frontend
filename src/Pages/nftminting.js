import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Banner1 from "../Assets/images/banner-1.jpg";

class NFTPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Gs.Container>
          <NFTminting>
            <Gs.W20>
              <NFTLeft>
                <h4>Item Description</h4>
                <Link to="/">Co-Creator</Link>
                <Link to="/">Category & Collection</Link>
                <Link to="/">Marketplace Settings</Link>
                <Link to="/">Unlockable Content</Link>
              </NFTLeft>
            </Gs.W20>
            <Gs.W60></Gs.W60>
            <Gs.W20></Gs.W20>
          </NFTminting>
        </Gs.Container>
      </>
    );
  }
}
// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const NFTminting = styled(FlexDiv)`
  position: relative;
`;

const NFTLeft = styled.div`
  position: fixed;
  top: 0px;
`;

export default NFTPage;
