import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Media from "./../Theme/media-breackpoint";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Collapse from "@kunukn/react-collapse";

import NFT2 from "../Assets/images/nft2.jpg";
import UserImg from "../Assets/images/user-img.jpg";
import HeartIcon from "../Assets/images/heart-icon.svg";
import StarIcon from "../Assets/images/star-icon.svg";
import RoundIcon from "../Assets/images/round-icon.svg";
import AdBannerIMG from "../Assets/images/adbanner.jpg";
import LArrow from "../Assets/images/banner-larrow.svg";
import RArrow from "../Assets/images/banner-rarrow.svg";
import SerICON from "../Assets/images/searchICO.svg";
import FiltICON from "../Assets/images/filterICO.svg";
import LoaderGif from "../Assets/images/loading.gif";
import ProfielBack from '../Assets/images/profile-back.jpg'
import UserImg01 from '../Assets/images/userImg.png'
import CopyICO from "../Assets/images/icon-copy.svg"
import PlusICO from "../Assets/images/icon-plus.svg"
import ADBanner from '../Assets/images/adbanner01.jpg'

import SocialICO01 from "../Assets/images/social-icon01.svg"
import SocialICO02 from "../Assets/images/social-icon02.svg"
import SocialICO03 from "../Assets/images/social-icon03.svg"
import SocialICO04 from "../Assets/images/social-icon04.svg"
import SocialICO05 from "../Assets/images/social-icon05.svg"
import SocialICO06 from "../Assets/images/social-icon06.svg"


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen1: false,
        };
    }
    render() {
        return (
            <>
                <ProMBannerBX style={{ backgroundImage: `url(${ProfielBack})` }}>

                    <ProMBX01>
                        <ProSBX01>
                            <UserImgBX>
                                <UserImgSB>
                                    <img src={UserImg01} alt="" />
                                </UserImgSB>

                                <ImgUplBTN>
                                    <button><img src={PlusICO} alt="" /> </button>

                                    <div className='ddMBX'>
                                        <button>Edit Profile Pic</button>
                                        <button>Edit Cover Pic</button>
                                    </div>

                                </ImgUplBTN>




                            </UserImgBX>
                            <UserDetailBX>
                                <UserDTitle01>
                                    User Name
                                    <span>@username</span>
                                </UserDTitle01>
                                <UserDText01>
                                    Lorem ipsum dolor sit amet, consectetur ascing elit. Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu.
                                </UserDText01>
                                <UserSocilMBX>
                                    <button><img src={SocialICO01} alt="" /></button>
                                    <button><img src={SocialICO02} alt="" /></button>
                                    <button><img src={SocialICO03} alt="" /></button>
                                    <button><img src={SocialICO04} alt="" /></button>
                                    <button><img src={SocialICO05} alt="" /></button>
                                    <button><img src={SocialICO06} alt="" /></button> 
                                </UserSocilMBX> 
                                <UserDText02>
                                    Join <span>13.07.2021</span>
                                </UserDText02> 
                            </UserDetailBX>
                        </ProSBX01>

                        <ProSBX02>
                            <ProSBX03>
                                <FollowerMBX>
                                    Created <span>519</span>
                                </FollowerMBX>
                                <FollowerMBX>
                                    Followers <span>519</span>
                                </FollowerMBX>
                                <FollowerMBX>
                                    Following <span>519</span>
                                </FollowerMBX>
                                <EditPrBTN> Follow </EditPrBTN>
                            </ProSBX03>

                            <ProSBX04>
                                <span>#000000</span> xyz…….asd3t21f4986543 <button><img src={CopyICO} alt="" /></button>

                            </ProSBX04>
                        </ProSBX02>
                    </ProMBX01>

                </ProMBannerBX>



                <Gs.Container>
                    <ADBannerMBX>

                        <img src={ADBanner} alt='' />

                    </ADBannerMBX>


                <HomeTabs>
                    <Tabs>
                        <TabList>
                            <Tab>Artist</Tab>
                            <Tab>Artworks</Tab>
                            <Tab>Collector</Tab>
                            <Tab>Our Picks</Tab>
                        </TabList>
                        <TabPanel>
                            
                <FilterMBX>
                    <FilterLbx>
                        <button className="active">All</button> <button>Art</button>{" "}
                        <button>Celebrity</button> <button>Sport</button>
                    </FilterLbx>
                </FilterMBX>




                <HomeNFTs>
                    <Gs.Container>
                        <NFTfourbox>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                            <Gs.W25V2>
                                <Gs.TenpxGutter>
                                    <div className="NFT-home-box">
                                        <NFTImgBX>
                                            {" "}
                                            <img src={NFT2} alt="" />{" "}
                                        </NFTImgBX>
                                        <div className="NFT-home-box-inner">
                                            <h4>
                                                Artwork name / title dolor lorem ipsum sit adipiscing
                                            </h4>
                                            <CollectionBar>
                                                <p>
                                                    25 <span>of 2500</span>
                                                </p>
                                                <p>
                                                    <Link to="/">
                                                        See the collection{" "}
                                                        <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </p>
                                            </CollectionBar>
                                            <Edition className="edition2">
                                                <div className="ed-box">
                                                    <p>Current bid</p>
                                                    <h3>0.00 BNB</h3>
                                                </div>
                                                <div className="ed-box">
                                                    <p>Ending in</p>
                                                    <h3>13h 12m 11s</h3>
                                                </div>
                                            </Edition>
                                            <UserImgName>
                                                <img src={UserImg} alt="" />
                                                @username
                                            </UserImgName>
                                        </div>
                                    </div>
                                </Gs.TenpxGutter>
                            </Gs.W25V2>
                        </NFTfourbox>

                        <LoaderBX>
                            <img src={LoaderGif} alt="" />
                        </LoaderBX>
                    </Gs.Container>
                </HomeNFTs>
            


                        </TabPanel>
                        <TabPanel>2</TabPanel>
                        <TabPanel>3</TabPanel>
                        <TabPanel>4</TabPanel>
                    </Tabs>
                </HomeTabs>
                </Gs.Container>



            </>
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

const ProMBannerBX = styled(FlexDiv)`
    width: 100%; height:300px; margin-bottom:230px; background-size: cover; background-position:50% 50%; position:relative;
`
const ProMBX01 = styled(FlexDiv)`
    width: 100%; max-width:1160px; background-color:#fff; padding:40px; border-radius:40px; min-height:315px; margin-bottom: -291px;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.1); align-items:stretch;
`
const ProSBX01 = styled(FlexDiv)`
    width:50%; justify-content:flex-start; align-items: flex-start;
`;

const UserImgBX = styled(FlexDiv)`
    width:142px;  justify-content:flex-start; position:relative;
`
const UserImgSB = styled.div`
    width:122px; height:122px; border-radius:62px; overflow:hidden; border:1px solid #efecf0;
    img { width:100%; height:100%; object-fit: cover;}
`
const UserDetailBX = styled(FlexDiv)`
    justify-content:flex-start; flex-direction:column; width:calc(100% - 142px);
`
const UserDTitle01 = styled.div`
    font-size:22px; font-weight:600; color:#000000; width:100%; margin-top:19px; margin-bottom:18px;
    span{ font-size:16px; display:block; width:100%; margin-top:6px;}

`
const UserDText01 = styled.div`
    font-size:12px; font-weight:500; color:#000000;  
`
const UserDText02 = styled(UserDText01)`
 color:rgba(0,0,0,0.3); width:100%; margin-top:30px;
 
 span{ color:#000000; padding-left:25px; }
`
const UserSocilMBX = styled(FlexDiv)`
    width:100%; justify-content:flex-start; margin-top:22px;

    button{ display:block; width:28px; height:28px; padding: 0; margin: 0 4px 0 0; filter:brightness(0.2);
        :hover{filter:brightness(1);}
        img{ width:100%; height:100%; object-fit: cover;}

    }
`
const ProSBX02 = styled(FlexDiv)`
    width:50%; justify-content:flex-end; flex-direction:column; align-items: flex-end;
`;

const ProSBX03 = styled(FlexDiv)`
    flex-direction:row; margin-bottom:auto;

`
const FollowerMBX = styled(FlexDiv)`
    font-size: 16px;  font-weight: 600; color: #B2B2B2; justify-content:flex-start; padding-right:10px; 
    span{ width:100%; margin-top:5px; color:#000; font-size:22px; display:block;      }  
`
const EditPrBTN = styled.button`
border: 1px solid #000000; border-radius: 15px;  padding: 8px 18px;  margin: 0 auto;  font-size: 14px; font-weight: 600; color: #000; 
:hover{ background-color:#F40058; color: #fff; border: 1px solid #F40058; } 
`

const ProSBX04 = styled(FlexDiv)`
    min-width:172px; background-color: #EEF2F7; border-radius:15px; min-height:38px; padding:6px 12px 6px 105px; margin:50px 0 0 0; font-size:14px; color: #000; position:relative; 

    span{ background-color: #f40058; position:absolute; left:0; top:0; line-height:38px; padding:0 12px; border-radius:15px; color:#fff; height:38px;}

    button{ padding:0; margin:0 0 0 8px; :hover{ opacity:0.6;}}

`
const ImgUplBTN = styled(FlexDiv)`
    position:absolute; width:21px; height:21px; right: 28px; bottom: 8px;  display:none; 
    button{ width:21px; height:21px; padding:0; :hover{ filter:brightness(1.2)}; }  
    ${UserImgBX}:hover & {display:block; } 
    .ddMBX{ position:absolute; box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2); border: solid 1px #eef2f7;  background-color: #ffffff; width:100px; border-radius:20px; padding:6px 0; top:24px; z-index:100; overflow:hidden; display:none; left: 50%;  transform: translateX(-50%);
        button{ display:block; font-size:12px; padding:8px 8px; width:100%; height:auto;
            :hover{ background-color:#D9F5F5; :hover{ filter:brightness(1)}}
        } 
    }
    :hover .ddMBX{ display:block;} 
`

const ADBannerMBX = styled(FlexDiv)`
    width:100%; margin:0 0 50px 0; border-radius: 10px; overflow:hidden;
    img { max-width:100%; height:auto;}
` 
const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
`;
const HomeNFTs = styled.div`
  width: 100%;
  margin-top: 40px;
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
        content: "";
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
        content: "";
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
        content: "";
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

const NFTfirstbox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  position: relative;
  border-radius: 10px;
  margin-bottom: 30px;
  .w60 {
    width: 60%;
  }
  .w40 {
    width: 40%;
  }
`;
const NFTfbleft = styled(FlexDiv)`
  background-color: #eef2f7;
  padding: 80px 0px;
  img {
    box-shadow: 20px 20px 40px 1px rgb(0 0 0 /30%);
  }
`;
const NFTfbright = styled.div`
  padding: 20px 50px;
  h3 {
    color: #000000;
    font-size: 22px;
    letter-spacing: -0.83px;
    margin: 0px 0px 10px;
    line-height: normal;
  }
  p {
    color: #000000;
    font-size: 12px;
    letter-spacing: -0.53px;
    margin: 0px 0px 10px;
    line-height: 20px;
  }
  a {
    color: #000000;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin: 0px 0px 40px;
    line-height: 20px;
    display: block;
    :hover {
      color: #555;
      text-decoration: underline;
    }
  }
`;
const NFTLike = styled(FlexDiv)`
  width: 56px;
  height: 34px;
  position: absolute;
  right: 20px;
  top: 20px;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%);
  border-radius: 30px;
  p {
    color: #ff2a44;
    font-size: 12px;
    font-weight: 600;
    margin: 0px;
  }
  a {
    line-height: normal;
    width: 15px;
    height: 15px;
    margin: 0px 4px 0px 0px;
  }
`;

const Edition = styled(FlexDiv)`
  justify-content: space-between;
  background-color: #eef2f7;
  border-radius: 10px;
  padding: 16px 20px;
  margin: 0px 0px 40px;
  .ed-box {
    p {
      color: #8e9194;
      font-size: 12px;
      letter-spacing: -0.6px;
      font-weight: 600;
      margin: 0px 0px 5px;
    }
    h3 {
      color: #000;
      font-size: 20px;
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

const NFTfourbox = styled(FlexDiv)`  
    flex-wrap:wrap; margin:0px -10px 50px; 
    .row{margin:0px -10px;}
    img.main{width:100%; border-top-left-radius:10px; border-top-right-radius:10px;}
        .NFT-home-box{ border-radius:10px; border:1px solid #dddddd; 
          :hover{ box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);} 
          .NFT-home-box-inner{ padding:20px 15px;
            h4{margin:0px 0px 10px; font-size:18px; color:#000000; font-weight:600; line-height:normal; letter-spacing:-0.67px;}
            .edition2
            {
              justify-content:flex-start; padding:10px 15px; margin-bottom:20px;
              .ed-box{
                margin-right:20px;
                p{font-size:10px; letter-spacing:-0.5px; margin:0px;}
                h3{font-size:16px; letter-spacing:-0.71px;}
                button{font-size:10px; color:#000; letter-spacing:-0.36px; font-weight:600; line-height:normal; padding:10px 17px; border-radius:13px; border:1px solid #000000;
                  :hover{background-color:#d121d6; color:#fff; border-color:#d121d6;}
                }
              }
            }
            .JCSB{justify-content:space-between;
              .ed-box{margin-right:0px;}
            }
          }
        }
      }
      .JCSB {
        justify-content: space-between;
        .ed-box {
          margin-right: 0px;
        }
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

const AdBanner = styled.div`
  border-radius: 20px;
  padding: 120px 0px;
  margin: 120px 0px;
  text-align: center;
  background: url(${AdBannerIMG}) no-repeat;
  background-size: cover;
  p {
    color: #000000;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 700;
    line-height: normal;
    max-width: 680px;
    width: 100%;
    margin: 0 auto 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
  button {
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
    }
  }
`;

const AdBanner2 = styled.div`
  padding: 120px 0px;
  margin: 120px 0px 0px;
  text-align: center;
  background: url(${AdBannerIMG}) no-repeat;
  background-size: cover;
  h2 {
    color: #000000;
    font-size: 42px;
    letter-spacing: -2px;
    font-weight: bold;
    line-height: normal;
    max-width: 680px;
    width: 100%;
    margin: 0 auto 30px;
  }
  p {
    color: #000000;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-weight: 700;
    line-height: normal;
    max-width: 680px;
    width: 100%;
    margin: 0 auto 50px;
    :last-child {
      margin-bottom: 0px;
    }
  }
  button {
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
    }
  }
`;
const FilterMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  max-width: 1080px;
  margin: 30px auto 0 auto;
`;

const FilterLbx = styled(FlexDiv)`
  width: 45%;
  justify-content: flex-start;

  button {
    display: inline-block;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    border-radius: 15px;
    background-color: #eef2f7;
    margin-right: 8px;

    &.active {
      background-color: #00babc;
      color: #fff;
    }
    :hover {
      background-color: #00babc;
      color: #fff;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;
const FilterRbx = styled(FlexDiv)`
  width: 55%;
  justify-content: flex-end;
`;
const FilterInputBX = styled(FlexDiv)`
  width: 100%;
  max-width: 220px;
  position: relative;
  margin-right: 9px;

  input {
    background-color: #eef2f7;
    font-size: 14px;
    border-radius: 15px;
    border: 1px solid transparent;
    outline: none;
    height: 38px;
    width: 100%;
    padding: 3px 3px 3px 40px;
    :focus {
      background-color: #fff;
      border: 1px solid #00babc;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;
const SearchICO = styled(FlexDiv)`
  width: 21px;
  height: 21px;
  position: absolute;
  left: 11px;
  top: 9px;
`;
const FilterICO = styled(FlexDiv)`
  width: 21px;
  height: 21px;
  position: absolute;
  left: 11px;
  top: 9px;
`;
const FilterBAR = styled(FlexDiv)`
  width: 100%;
  max-width: 220px;
  justify-content: flex-start;
  position: relative;
  background-color: #eef2f7;
  border-radius: 15px;
  border: 0px;
  outline: none;
  height: 38px;
  padding: 3px 3px 3px 40px;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  border: 1px solid transparent;
  &.active,
  &:hover {
    background-color: #fff;
    border: 1px solid #00babc;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const DDContainer = styled(FlexDiv)`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  top: calc(100% + 7px);
  width: 100%;
  left: 0;
  overflow: hidden;
  z-index: 100;

  .md-checkbox:hover {
    background-color: #d9f5f5;
  }
`;

export default Profile;
