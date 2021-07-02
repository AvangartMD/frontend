import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";


import CollImg from "../Assets/images/nft1.jpg";
import NFT2 from "../Assets/images/nft2.jpg";
import UserImg from "../Assets/images/user-img.jpg";

class CollectionDetail extends Component {

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
        <CollectionContainer>
          <CreatorInfo>
            <CreatorILeft>
              <div className="CIbox">
                <img src={CollImg} alt="" />
              </div>
              <div className="CNbox">
                <p className="title">Creator Name</p>
                <p className="by">@creatorname</p>
              </div>
            </CreatorILeft>
            <CreatorIRight>
              <div className='ed-box'>
                <p>Followers</p>
                <h3>9875</h3>
              </div>
              <div className='ed-box'>
                <p>Following</p>
                <h3>4301</h3>
              </div>
              <div className='ed-box'>
                <button className="ani-1">Follow</button>
              </div>
            </CreatorIRight>
          </CreatorInfo>
          <CollectionDesc>
            <h3>Collection Name Here</h3>
            <p>Vivamus nibh nulla, pulvinar vel dui quis, vestibulum scelerisque risus. Nunc iaculis fermentum libero quis mollis. Nullam mattis turpis non lectus pharetra dapibus. Nam ut nibh dolor. In euismod et magna ac congue. Donec congue elit vel tortor fermentum, id consequat magna pretium. Donec mattis velit at lorem pretium imperdiet. Nulla facilisi. Nulla sagittis risus vel massa finibus, eu varius leo feugiat. Quisque sit amet magna ac nisl posuere ullamcorper. Nullam pellentesque ipsum finibus eros auctor, in vestibulum dui porttitor. Curabitur massa quam, viverra a eros sed, gravida placerat orci. Nulla facilisi.</p>
          </CollectionDesc>
          <NFTfourbox className="cdetail">
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <div className='NFT-home-box'>
                  <NFTImgBX>
                    <img src={NFT2} alt='' />
                  </NFTImgBX>
                  <div className='NFT-home-box-inner'>
                    <h4>
                      Artwork name / title dolor lorem ipsum sit
                      adipiscing
                    </h4>
                    <CollectionBar>
                      <p>
                        25 <span>of 2500</span>
                      </p>
                      <p>
                        <Link to='/'>
                          See the collection
                          <i className='fas fa-angle-right'></i>
                        </Link>
                      </p>
                    </CollectionBar>
                    <Edition className='edition2'>
                      <div className='ed-box'>
                        <p>Current bid</p>
                        <h3>0.00 BNB</h3>
                      </div>
                      <div className='ed-box'>
                        <p>Ending in</p>
                        <h3>13h 12m 11s</h3>
                      </div>
                    </Edition>
                    <UserImgName>
                      <img src={UserImg} alt='' />
                      @creatorname
                    </UserImgName>
                  </div>
                </div>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <div className='NFT-home-box'>
                  <NFTImgBX>
                    <img src={NFT2} alt='' />
                  </NFTImgBX>
                  <div className='NFT-home-box-inner'>
                    <h4>
                      Artwork name / title dolor lorem ipsum sit
                      adipiscing
                    </h4>
                    <CollectionBar>
                      <p>
                        25 <span>of 2500</span>
                      </p>
                      <p>
                        <Link to='/'>
                          See the collection
                          <i className='fas fa-angle-right'></i>
                        </Link>
                      </p>
                    </CollectionBar>
                    <Edition className='edition2'>
                      <div className='ed-box'>
                        <p>Current bid</p>
                        <h3>0.00 BNB</h3>
                      </div>
                      <div className='ed-box'>
                        <p>Ending in</p>
                        <h3>13h 12m 11s</h3>
                      </div>
                    </Edition>
                    <UserImgName>
                      <img src={UserImg} alt='' />
                      @creatorname
                    </UserImgName>
                  </div>
                </div>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <div className='NFT-home-box'>
                  <NFTImgBX>
                    <img src={NFT2} alt='' />
                  </NFTImgBX>
                  <div className='NFT-home-box-inner'>
                    <h4>
                      Artwork name / title dolor lorem ipsum sit
                      adipiscing
                    </h4>
                    <CollectionBar>
                      <p>
                        25 <span>of 2500</span>
                      </p>
                      <p>
                        <Link to='/'>
                          See the collection
                          <i className='fas fa-angle-right'></i>
                        </Link>
                      </p>
                    </CollectionBar>
                    <Edition className='edition2'>
                      <div className='ed-box'>
                        <p>Current bid</p>
                        <h3>0.00 BNB</h3>
                      </div>
                      <div className='ed-box'>
                        <p>Ending in</p>
                        <h3>13h 12m 11s</h3>
                      </div>
                    </Edition>
                    <UserImgName>
                      <img src={UserImg} alt='' />
                      @creatorname
                    </UserImgName>
                  </div>
                </div>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <div className='NFT-home-box'>
                  <NFTImgBX>
                    <img src={NFT2} alt='' />
                  </NFTImgBX>
                  <div className='NFT-home-box-inner'>
                    <h4>
                      Artwork name / title dolor lorem ipsum sit
                      adipiscing
                    </h4>
                    <CollectionBar>
                      <p>
                        25 <span>of 2500</span>
                      </p>
                      <p>
                        <Link to='/'>
                          See the collection
                          <i className='fas fa-angle-right'></i>
                        </Link>
                      </p>
                    </CollectionBar>
                    <Edition className='edition2'>
                      <div className='ed-box'>
                        <p>Current bid</p>
                        <h3>0.00 BNB</h3>
                      </div>
                      <div className='ed-box'>
                        <p>Ending in</p>
                        <h3>13h 12m 11s</h3>
                      </div>
                    </Edition>
                    <UserImgName>
                      <img src={UserImg} alt='' />
                      @creatorname
                    </UserImgName>
                  </div>
                </div>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <div className='NFT-home-box'>
                  <NFTImgBX>
                    <img src={NFT2} alt='' />
                  </NFTImgBX>
                  <div className='NFT-home-box-inner'>
                    <h4>
                      Artwork name / title dolor lorem ipsum sit
                      adipiscing
                    </h4>
                    <CollectionBar>
                      <p>
                        25 <span>of 2500</span>
                      </p>
                      <p>
                        <Link to='/'>
                          See the collection
                          <i className='fas fa-angle-right'></i>
                        </Link>
                      </p>
                    </CollectionBar>
                    <Edition className='edition2'>
                      <div className='ed-box'>
                        <p>Current bid</p>
                        <h3>0.00 BNB</h3>
                      </div>
                      <div className='ed-box'>
                        <p>Ending in</p>
                        <h3>13h 12m 11s</h3>
                      </div>
                    </Edition>
                    <UserImgName>
                      <img src={UserImg} alt='' />
                      @creatorname
                    </UserImgName>
                  </div>
                </div>
              </Gs.TenpxGutter>
            </Gs.W25V2>
            <Gs.W25V2>
              <Gs.TenpxGutter>
                <div className='NFT-home-box'>
                  <NFTImgBX>
                    <img src={NFT2} alt='' />
                  </NFTImgBX>
                  <div className='NFT-home-box-inner'>
                    <h4>
                      Artwork name / title dolor lorem ipsum sit
                      adipiscing
                    </h4>
                    <CollectionBar>
                      <p>
                        25 <span>of 2500</span>
                      </p>
                      <p>
                        <Link to='/'>
                          See the collection
                          <i className='fas fa-angle-right'></i>
                        </Link>
                      </p>
                    </CollectionBar>
                    <Edition className='edition2'>
                      <div className='ed-box'>
                        <p>Current bid</p>
                        <h3>0.00 BNB</h3>
                      </div>
                      <div className='ed-box'>
                        <p>Ending in</p>
                        <h3>13h 12m 11s</h3>
                      </div>
                    </Edition>
                    <UserImgName>
                      <img src={UserImg} alt='' />
                      @creatorname
                    </UserImgName>
                  </div>
                </div>
              </Gs.TenpxGutter>
            </Gs.W25V2>
          </NFTfourbox>
          <EditCollection>
            <button className="ani-1 disabled">Edit Collection</button>
          </EditCollection>
        </CollectionContainer>
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
const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
`;

const CollectionContainer = styled(FlexDiv)`
  max-width:845px;
  width:100%;
  margin:40px auto 120px;
`;

const CreatorInfo = styled(FlexDiv)`
  justify-content:space-between;
  background-color:#eef2f7;
  padding:20px;
  border-radius:20px;
  width:100%;
  margin:0px 0px 60px;
`;

const CreatorILeft = styled(FlexDiv)`
  .CIbox
  {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .CNbox
  {
    margin-left:30px;
    .title{
      font-size:22px;
      letter-spacing:-1.1px;
      color:#000;
      font-weight:700;
      margin:0px 0px 5px;
    }
    .by{
      font-size:16px;
      letter-spacing:-0.8px;
      color:#000;
      font-weight:600;
      margin:0px;
    }
  }
`;

const CreatorIRight = styled(FlexDiv)`
  justify-content: space-between;
  .ed-box {
    p {
      color: rgb(0 0 0 /30%);
      font-size: 16px;
      letter-spacing: -0.8px;
      font-weight: 600;
      margin: 0px 30px 3px 0px;
    }
    h3 {
      color: #000;
      font-size: 22px;
      letter-spacing: -0.98px;
      font-weight: 700;
      margin: 0px;
    }
    button {
      font-size: 14px;
      color: #000;
      letter-spacing: -0.5px;
      font-weight: 600;
      line-height: normal;
      padding: 9px 23px;
      border-radius: 15px;
      border: 1px solid #000000;
      :hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;

const CollectionDesc = styled.div`
  margin:0px 15px;
  h3{
    color: #000;
    font-size: 24px;
    letter-spacing: -1.07px;
    font-weight: 700;
    margin: 0px 0px 10px;
  }
  p{
    color: #000;
    font-size: 16px;
    line-height:24px;
    letter-spacing: -0.8px;
    margin:0px 0px 30px;
  }
`;

const NFTfourbox = styled(FlexDiv)`
  img.main {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .NFT-home-box {
    border-radius: 10px;
    border: 1px solid #dddddd;
    .NFT-home-box-inner {
      padding: 20px 15px;
      h4 {
        margin: 0px 0px 10px;
        font-size: 18px;
        color: #000000;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.67px;
      }
    }
  }
`;

const NFTImgBX = styled(FlexDiv)`
   width: 100%;
   height: 253px;
   border-radius: 10px 10px 0 0;
   overflow: hidden;
   img {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
`;

const CollectionBar = styled(FlexDiv)`
  justify-content: space-between;
  margin-bottom: 20px;
  p {
    font-size: 14px;
    letter-spacing: -0.62px;
    font-weight: 600;
    margin: 0px;
    color: #000;
    span {
      font-size: 12px;
      letter-spacing: -0.53px;
      font-weight: 300;
    }
    a {
      font-size: 10px;
      letter-spacing: -0.5px;
      font-weight: 600;
      color: #000;
      :hover {
        color: #555;
        text-decoration: underline;
      }
    }
  }
`;

const Edition = styled(FlexDiv)`
  justify-content: flex-start;
  background-color: #eef2f7;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 0px 0px 20px;
  .ed-box {
    margin-right:20px;
    p {
      color: #8e9194;
      font-size: 10px;
      letter-spacing: -0.6px;
      font-weight: 600;
      margin: 0px 0px 5px;
    }
    h3 {
      color: #000;
      font-size: 16px;
      letter-spacing: -0.89px;
      font-weight: 700;
      margin: 0px;
      span {
        font-size: 10px;
        font-weight: 300;
        letter-spacing: -0.44px;
      }
    }
  }
`;

const UserImgName = styled(FlexDiv)`
  justify-content: flex-start;
  color: #000;
  font-size: 14px;
  letter-spacing: -0.7px;
  font-weight: 600;
  margin: 0px;
  img {
    border-radius: 50%;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`;

Gs.W25V2 = styled(Gs.W25V2)`
  ${NFTfourbox}.cdetail & {
    width: 33.33%;
  }
`;

const EditCollection = styled.div`
  margin:65px auto 0px;
  button{background-color:transparent; border:1px solid #000; color:#000; padding:13px 53px; border-radius:15px; font-size:14px; letter-spacing:-0.5px; font-weight:600;
    :hover{ box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 20%);}
  }
`;
export default CollectionDetail;
