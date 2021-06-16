import 'react-multi-carousel/lib/styles.css';
import 'react-tabs/style/react-tabs.css';

import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

import NFT2 from '../../Assets/images/nft2.jpg';
import HeartIcon from '../../Assets/images/heart-icon.svg';
import StarIcon from '../../Assets/images/star-icon.svg';
import RoundIcon from '../../Assets/images/round-icon.svg';
import Gs from '../../Theme/globalStyles';


class HallOfFrame extends Component {
  
  render() {
    return (
      <>
        <HomeNFTs>
          <Gs.Container>
            <div className='star-title'>
              <h3>Hall of Fame</h3>
            </div>
            <HomeTabs>
              <Tabs>
                <TabList>
                  <Tab>Artist</Tab>
                  <Tab>Artworks</Tab>
                  <Tab>Collector</Tab>
                  <Tab>Our Picks</Tab>
                </TabList>
                <TabPanel>
                  <HomeTabDetail>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@skyistheanswer</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@jimmy</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@ayeshachasm</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@danielstagner</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@wolfden</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                  </HomeTabDetail>
                </TabPanel>
                <TabPanel>
                  <HomeTabDetail>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox2>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='title'>
                              Artwork name / title dolor lorem ipsum sit
                              adipiscing
                            </p>
                            <p className='small'>Sold for</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox2>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox2>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='title'>
                              Artwork name / title dolor lorem ipsum sit
                              adipiscing
                            </p>
                            <p className='small'>Sold for</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox2>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox2>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='title'>
                              Artwork name / title dolor lorem ipsum sit
                              adipiscing
                            </p>
                            <p className='small'>Sold for</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox2>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox2>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='title'>
                              Artwork name / title dolor lorem ipsum sit
                              adipiscing
                            </p>
                            <p className='small'>Sold for</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox2>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                  </HomeTabDetail>
                </TabPanel>
                <TabPanel>
                  <HomeTabDetail>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@skyistheanswer</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@jimmy</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                  </HomeTabDetail>
                </TabPanel>
                <TabPanel>
                  <HomeTabDetail>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@skyistheanswer</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@jimmy</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                    <Gs.W20>
                      <Gs.TenpxGutter>
                        <HallofFameBox>
                          <div className='HOF-inner'>
                            <img src={NFT2} alt='' />
                            <p className='user-name'>@ayeshachasm</p>
                            <p className='small'>Total Sale</p>
                            <p className='price'>0.00 BNB</p>
                          </div>
                        </HallofFameBox>
                      </Gs.TenpxGutter>
                    </Gs.W20>
                  </HomeTabDetail>
                </TabPanel>
              </Tabs>
            </HomeTabs>
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

const HomeTabs = styled.div`
  margin: 0px 0px 70px;
  .react-tabs__tab-list {
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
  }
  .react-tabs__tab {
    bottom: 0px;
    padding: 6px 0px;
    margin: 0px 20px;
    color: rgb(0 0 0 / 30%);
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.8px;
  }
  .react-tabs__tab--selected {
    border: none;
    border-bottom: 3px solid #000000;
    color: #000;
  }
`;

const HomeTabDetail = styled(FlexDiv)`
  margin: 0px -10px;
  justify-content: flex-start;
`;

const HallofFameBox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  min-height: 260px;
  .HOF-inner {
    img {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin: 0px 0px 10px;
    }
    p.user-name {
      margin: 0px 0px 15px;
      font-size: 18px;
      color: #000000;
      font-weight: 700;
      letter-spacing: -0.9px;
    }
    p.small {
      margin: 0px;
      font-size: 10px;
      color: #8e9194;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    p.price {
      margin: 0px;
      font-size: 16px;
      color: #000000;
      font-weight: 600;
      letter-spacing: -0.71px;
    }
  }
`;
const HallofFameBox2 = styled(FlexDiv)`
  border: 1px solid #dddddd;
  border-radius: 10px;
  text-align: center;
  .HOF-inner {
    img {
      width: 200px;
      height: 200px;
      margin: 0px 0px 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    p.title {
      margin: 0px 0px 15px;
      padding: 0px 15px;
      font-size: 12px;
      color: #000000;
      font-weight: 700;
      letter-spacing: -0.45px;
      line-height: normal;
    }
    p.small {
      margin: 0px;
      font-size: 10px;
      color: #8e9194;
      font-weight: 600;
      letter-spacing: -0.5px;
    }
    p.price {
      margin: 0px 0px 20px;
      font-size: 16px;
      color: #000000;
      font-weight: 600;
      letter-spacing: -0.71px;
    }
  }
`;

const HomeNFTs = styled.div`
  width: 100%;
  margin-top: 120px;
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

export default HallOfFrame;
