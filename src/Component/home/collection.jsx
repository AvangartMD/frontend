import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from "react-router";

import NFT2 from '../../Assets/images/nft2.jpg';
import HeartIcon from '../../Assets/images/heart-icon.svg';
import StarIcon from '../../Assets/images/star-icon.svg';
import RoundIcon from '../../Assets/images/round-icon.svg';
import AdBannerIMG from '../../Assets/images/adbanner.jpg';
import Gs from '../../Theme/globalStyles';


class Collections extends Component {

  render() {
    return (
      <>
        <HomeNFTs>
          <Gs.Container>
            <div className='heart-title'>
              <h3>Collections</h3>
            </div>
            <CollectionSection>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <Link to='/'>
                    <img src={NFT2} alt='' />
                  </Link>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <Link to='/'>
                    <img src={NFT2} alt='' />
                  </Link>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <Link to='/'>
                    <img src={NFT2} alt='' />
                  </Link>
                </Gs.TenpxGutter>
              </Gs.W25>
              <Gs.W25>
                <Gs.TenpxGutter>
                  <Link to='/'>
                    <img src={NFT2} alt='' />
                  </Link>
                </Gs.TenpxGutter>
              </Gs.W25>
            </CollectionSection>
            <ViewallButton>
              <button
                onClick={() => this.props.history.push("/collections")}
              >View all collections</button>
            </ViewallButton>
          </Gs.Container>
        </HomeNFTs>
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

const HomeNFTs = styled.div`
  width: 100%;
  margin-top: 120px;
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
const ViewallButton = styled.div`
  text-align: center;
  margin-bottom: 120px;
  button {
    border: 1px solid #000000;
    border-radius: 10px;
    width: 190px;
    height: 44px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.5px;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const CollectionSection = styled(FlexDiv)`
  margin: 0px -10px 50px;
  img {
    border-radius: 10px;
    border: 1px solid #dddddd;
  }
`;

export default withRouter(Collections);
