import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { withRouter } from "react-router";
import dateFormat from "dateformat";
import { motion } from "framer-motion";

import AdBannerIMG from "../Assets/images/adbanner.jpg";
import LoaderGif from "../Assets/images/loading.gif";
import UserIcon from "../Assets/images/user-img.jpg";
import ProfielBack from "../Assets/images/profile-back.jpg";
import CopyICO from "../Assets/images/icon-copy.svg";
import PlusICO from "../Assets/images/icon-plus.svg";
import ADBanner from "../Assets/images/adbanner01.jpg";

import SocialICO01 from "../Assets/images/social-icon01.svg";
import SocialICO03 from "../Assets/images/social-icon03.svg";
import SocialICO04 from "../Assets/images/social-icon04.svg";
import SocialICO05 from "../Assets/images/social-icon05.svg";
import SocialICO06 from "../Assets/images/social-icon06.svg";

import { actions } from "../actions";
import { services } from "../services";
import { Context } from '../Component/wrapper';
import { expiryTime } from '../config';
import { compressImage } from "../helper/functions";

import Created from "../Component/profile/created";
import Collected from "../Component/profile/collected";
import Collection from "../Component/profile/collection";
import Liked from "../Component/profile/liked";
import Drafts from "../Component/profile/drafts";
import Media from '../Theme/media-breackpoint';

class Profile extends Component {

  static contextType = Context;
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.profileInput = React.createRef();
    this.profileCoverInput = React.createRef();
    this.walletAddress = React.createRef();

    this.state = {
      profile: { file: null, url: null },
      cover: { file: null, url: null },
      profile_banner: false,
      dashboard: cookies.get('dashboard') || null,
      profileInfo: cookies.get('profileInfo') || null,
    };
  }

  async componentDidMount() {
    const { dashboard, profileInfo, cookies } = this.props;
    if (!this.state.dashboard && !dashboard) {
      this.props.getDashboard() // fetch dashboard config
    } else {
      this.props.setDashboard(cookies.get('dashboard'))
      const isActive = cookies.get('dashboard').filter(dash => dash.name === "Profile Info").map(data => data.isActive)[0]
      this.setState({ profile_banner: isActive })
    }
    if (!this.state.profileInfo && !profileInfo) {
      this.props.getProfileInfo() // fetch profile info list
    } else {
      this.props.setProfileInfo(cookies.get('profileInfo'))
    }
    this.props.getProfile(); // fetch profile
  }

  componentDidUpdate(prevProps, prevState) {
    let { updated, dashboard, cookies, profileInfo, authData } = this.props;
    if (updated !== prevProps.updated) {
      this.props.getUserDetails(); // fetch user updated details
    }
    if (authData !== prevProps.authData) {
      this.profileUpdated(updated); // profile updated
    }
    if (dashboard && !cookies.get('dashboard')) {
      this.setCookie('dashboard', dashboard) // set dashboard data in cookie
      const isActive = dashboard.filter(dash => dash.name === "Profile Info").map(data => data.isActive)[0]
      this.setState({ profile_banner: isActive })
    }
    if (profileInfo && !cookies.get('profileInfo')) {
      this.setCookie('profileInfo', profileInfo) // set profile info in cookie
    }
  }

  setCookie = (name, dashboard) => {
    const { cookies } = this.props;
    const expire = new Date(Date.now() + (expiryTime * 60 * 60 * 1000)) // cookie will expire after 12 hours
    cookies.set(name, dashboard, { path: '/', expires: expire });
  }

  profileFileChange = async () => {
    this.setState({ loading: true }); // start the loader
    let file = this.profileInput.current.files[0];
    let url = URL.createObjectURL(file);
    this.setState({ profile: { url: url, file: file } });
    if (file.size > 3145728) {
      // check file size
      file = await compressImage(file); // compress image
    }
    const profile_src = await services.uploadFileOnBucket(file, "profile");
    let userObj = { profile: profile_src };
    this.props.updateProfile(userObj); // update profile
  };

  coverFileChange = async () => {
    this.setState({ loading: true }); // start the loader
    let file = this.profileCoverInput.current.files[0];
    let url = URL.createObjectURL(file);
    this.setState({ cover: { url: url, file: file } });
    if (file.size > 3145728) {
      // check file size
      file = await compressImage(file); // compress image
    }
    const cover_src = await services.uploadFileOnBucket(file, "cover");
    let userObj = { cover: cover_src };
    this.props.updateProfile(userObj); // update profile
  };

  profileUpdated = (data) => {
    this.setState({ loading: false }); // stop loader
  };

  renderedProfileInfo(profile, index) {
    let context = this.context;
    let img = ''
    if (context.locale === 'tr') {
      img = profile.banner.tu
    } else {
      img = profile.banner.en
    }
    return (
      <a target='_blank' rel="noopener noreferrer"
        href={profile.url}
        key={index}>
        <motion.img
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          key={index}
          src={img}
          exit={{ opacity: 0 }}
        />
      </a>
    )
  }

  render() {
    const { profile, profileInfo } = this.props;
    const { loading, profile_banner } = this.state;
    return (
      <>
        <ProMBannerBX
          style={{
            backgroundImage: `url(${this.state.cover.url
              ? this.state.cover.url
              : profile
                ? profile.cover
                  ? profile.cover
                  : ProfielBack
                : ProfielBack
              })`,
          }}
        >
          <ProMBX01>
            <ProSBX01>
              <UserImgBX>
                <UserImgSB>
                  {this.state.profile.url ? (
                    <img src={this.state.profile.url} alt="" />
                  ) : (
                    <motion.img
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      key={profile?.profile ? profile.profile : UserIcon}
                      src={profile?.profile ? profile.profile : UserIcon}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </UserImgSB>

                <ImgUplBTN>
                  <button>
                    <img src={PlusICO} alt="" />{" "}
                  </button>
                  <div className="ddMBX">
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      ref={this.profileInput}
                      name="profile_pic"
                      id="profile_file"
                      hidden
                      onChange={() => {
                        this.profileFileChange();
                      }}
                    />
                    <button
                      onClick={() => {
                        this.profileInput.current.click();
                      }}
                    >
                      Edit Profile Pic
                    </button>

                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      ref={this.profileCoverInput}
                      name="profileCoverInput"
                      id="profileCoverInput"
                      hidden
                      onChange={() => {
                        this.coverFileChange();
                      }}
                    />
                    <button
                      onClick={() => {
                        this.profileCoverInput.current.click();
                      }}
                    >
                      Edit Cover Pic
                    </button>
                  </div>
                </ImgUplBTN>
              </UserImgBX>

              <UserDetailBX>
                <UserDTitle01>
                  {profile ? profile.name ? profile.name : "User Name" : "User Name"}
                  <span>@{profile ? profile.username ? profile.username : "username" : "username"}</span>
                </UserDTitle01>
                <UserDText01>{profile ? profile.bio : "user bio"}</UserDText01>
                <UserSocilMBX>
                  {profile ? (
                    profile.portfolio?.website?.url ? (
                      <button
                        onClick={() => {
                          window.open(profile.portfolio.website.url, "_blank");
                        }}
                      >
                        <img src={SocialICO01} alt="" />
                      </button>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {profile ? (
                    profile.portfolio?.facebook?.url ? (
                      <button
                        onClick={() => {
                          window.open(profile.portfolio.facebook.url, "_blank");
                        }}
                      >
                        <img src={SocialICO03} alt="" />
                      </button>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {profile ? (
                    profile.portfolio?.twitter?.url ? (
                      <button
                        onClick={() => {
                          window.open(profile.portfolio.twitter.url, "_blank");
                        }}
                      >
                        <img src={SocialICO04} alt="" />
                      </button>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {profile ? (
                    profile.portfolio?.youtube?.url ? (
                      <button
                        onClick={() => {
                          window.open(profile.portfolio.youtube.url, "_blank");
                        }}
                      >
                        <img src={SocialICO05} alt="" />
                      </button>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                  {profile ? (
                    profile.portfolio?.instagarm?.url ? (
                      <button
                        onClick={() => {
                          window.open(
                            profile.portfolio.instagarm.url,
                            "_blank"
                          );
                        }}
                      >
                        <img src={SocialICO06} alt="" />
                      </button>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </UserSocilMBX>
                <UserDText02>
                  Join{" "}
                  <span>
                    {profile
                      ? dateFormat(
                        new Date(profile.createdAt).toString(),
                        "dd mmmm yyyy"
                      )
                      : "join date"}
                  </span>
                </UserDText02>
              </UserDetailBX>
            </ProSBX01>

            <ProSBX02>
              <ProSBX03>
                <FollowerMBX>
                  Created <span>{profile ? profile.nftCreated : "000"}</span>
                </FollowerMBX>
                <FollowerMBX>
                  Followers{" "}
                  <span>{profile ? profile.followersCount : "000"}</span>
                </FollowerMBX>
                <FollowerMBX>
                  Following{" "}
                  <span>{profile ? profile.followingCount : "000"}</span>
                </FollowerMBX>
                <EditPrBTN onClick={() => this.props.history.push("/user/edit-profile")}>
                  Edit Profile
                </EditPrBTN>
              </ProSBX03>

              <ProSBX04>
                <span>#000000</span>{" "}
                {profile ? profile.walletAddress : "xyz...."}{" "}
                <button
                  title="Copied"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      profile ? profile.walletAddress : "xyz...."
                    );
                  }}
                >
                  <img src={CopyICO} alt="" />
                </button>
              </ProSBX04>
            </ProSBX02>
          </ProMBX01>
        </ProMBannerBX>

        <Gs.Container>
          {loading ? (
            <>
              <BlackWrap>
                <WhiteBX01>
                  <OnbTitle01 className="v2">
                    Please wait profile is updating
                  </OnbTitle01>
                  <LoaderBX>
                    <img src={LoaderGif} alt="" />
                  </LoaderBX>
                </WhiteBX01>
              </BlackWrap>
            </>
          ) : (
            ""
          )}

          <ADBannerMBX>
            {profile_banner && profileInfo ?
              profileInfo.map((info, key) => this.renderedProfileInfo(info, key))
              : ``}
          </ADBannerMBX>

          <HomeTabs>
            <Tabs>

              {profile?.role.roleName === 'CREATOR' ? (
                <>
                  <TabList>
                    <Tab>Created</Tab>
                    <Tab>Collected</Tab>
                    <Tab>Collections</Tab>
                    <Tab>Liked</Tab>
                    <Tab>Drafts</Tab>
                  </TabList>

                  <TabPanel> <Created /> </TabPanel>
                  <TabPanel> <Collected role='creator' />  </TabPanel>
                  <TabPanel> <Collection /> </TabPanel>
                  <TabPanel> <Liked /> </TabPanel>
                  <TabPanel> <Drafts /> </TabPanel>
                </>
              ) : (
                <>
                  <TabList>
                    <Tab>Collected</Tab>
                    <Tab>Collections</Tab>
                    <Tab>Liked</Tab>
                    <Tab>Drafts</Tab>
                  </TabList>

                  <TabPanel> <Collected role='collector' /> </TabPanel>
                  <TabPanel> <Collection /> </TabPanel>
                  <TabPanel> <Liked /> </TabPanel>
                  <TabPanel> <Drafts /> </TabPanel>
                </>
              )}

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
  width: 100%;
  height: 300px;
  margin-bottom: 230px;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  ${Media.md}{
    margin-bottom: 150px;
  }
`;
const ProMBX01 = styled(FlexDiv)`
  width: 100%;
  max-width: 1160px;
  background-color: #fff;
  padding: 40px;
  border-radius: 40px;
  min-height: 315px;
  margin-bottom: -291px;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.1);
  align-items: stretch;
  ${Media.lg}{
    max-width:94%;
  }
  ${Media.md}{
    padding: 20px;
    min-height:200px;
  }
`;
const ProSBX01 = styled(FlexDiv)`
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
  ${Media.lg}{
    width: 40%;
  }
  ${Media.sm}{
    width: 100%;
  }
`;

const UserImgBX = styled(FlexDiv)`
  width: 142px;
  justify-content: flex-start;
  position: relative;
  ${Media.md}{
    width:120px;
  }
`;
const UserImgSB = styled.div`
  width: 122px;
  height: 122px;
  border-radius: 62px;
  overflow: hidden;
  border: 1px solid #efecf0;
  ${Media.md}{
    width: 100px;
    height: 100px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const UserDetailBX = styled(FlexDiv)`
  justify-content: flex-start;
  flex-direction: column;
  width: calc(100% - 142px);
`;
const UserDTitle01 = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  width: 100%;
  margin-top: 19px;
  margin-bottom: 18px;
  span {
    font-size: 16px;
    display: block;
    width: 100%;
    margin-top: 6px;
  }
`;
const UserDText01 = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #000000;
`;
const UserDText02 = styled(UserDText01)`
  color: rgba(0, 0, 0, 0.3);
  width: 100%;
  margin-top: 30px;
  span {
    color: #000000;
    padding-left: 25px;
  }
`;
const UserSocilMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 22px;
  button {
    display: block;
    width: 28px;
    height: 28px;
    padding: 0;
    margin: 0 4px 0 0;
    filter: brightness(0.2);
    :hover {
      filter: brightness(1);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const ProSBX02 = styled(FlexDiv)`
  width: 50%;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  ${Media.lg}{
    width: 60%;
  }
  ${Media.sm}{
    width: 100%;
  }
`;

const ProSBX03 = styled(FlexDiv)`
  flex-direction: row;
  margin-bottom: auto;
  ${Media.md}{
    margin-top:15px;
    width:-webkit-fill-available;
    justify-content: flex-end;
  }
`;
const FollowerMBX = styled(FlexDiv)`
  font-size: 16px;
  font-weight: 600;
  color: #b2b2b2;
  justify-content: flex-start;
  padding-right: 10px;
  span {
    width: 100%;
    margin-top: 5px;
    color: #000;
    font-size: 22px;
    display: block;
  }
`;
const EditPrBTN = styled.button`
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 8px 18px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  :hover {
    background-color: #f40058;
    color: #fff;
    border: 1px solid #f40058;
  }
  ${Media.md}{
    margin:initial;
  }
`;

const ProSBX04 = styled(FlexDiv)`
  min-width: 172px;
  background-color: #eef2f7;
  border-radius: 15px;
  min-height: 38px;
  padding: 6px 12px 6px 105px;
  margin: 50px 0 0 0;
  font-size: 14px;
  color: #000;
  position: relative;
  ${Media.md}{
    width: -webkit-fill-available;
  }
  span {
    background-color: #f40058;
    position: absolute;
    left: 0;
    top: 0;
    line-height: 38px;
    padding: 0 12px;
    border-radius: 15px;
    color: #fff;
    height: 38px;
  }

  button {
    padding: 0;
    margin: 0 0 0 8px;
    :hover {
      opacity: 0.6;
    }
  }
`;
const ImgUplBTN = styled(FlexDiv)`
  position: absolute;
  width: 21px;
  height: 21px;
  right: 28px;
  bottom: 8px;
  display: none;
  button {
    width: 21px;
    height: 21px;
    padding: 0;
    :hover {
      filter: brightness(1.2);
    }
  }
  ${UserImgBX}:hover & {
    display: block;
  }
  .ddMBX {
    position: absolute;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    border: solid 1px #eef2f7;
    background-color: #ffffff;
    width: 100px;
    border-radius: 20px;
    padding: 6px 0;
    top: 24px;
    z-index: 100;
    overflow: hidden;
    display: none;
    left: 50%;
    transform: translateX(-50%);
    button {
      display: block;
      font-size: 12px;
      padding: 8px 8px;
      width: 100%;
      height: auto;
      :hover {
        background-color: #d9f5f5;
        :hover {
          filter: brightness(1);
        }
      }
    }
  }
  :hover .ddMBX {
    display: block;
  }
`;

const ADBannerMBX = styled(FlexDiv)`
  width: 100%;
  margin: 0 0 50px 0;
  border-radius: 10px;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
`;

const HomeTabs = styled.div`
  margin: 0px 0px 70px;
  .react-tabs__tab-list {
    border-bottom: 1px solid #ddd;
    margin-bottom: 30px;
    ${Media.sm}{
      display:flex;
      overflow-x:auto;
      overflow-y:hidden;
      flex-wrap:initial;
    }
  }
  .react-tabs__tab {
    bottom: 0px;
    padding: 6px 0px;
    margin: 0px 20px;
    color: rgb(0 0 0 / 30%);
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.8px;
    ${Media.sm}{
      font-size: 16px;
      margin:0px 30px 0px 0px;
    }
    :focus
    {
      box-shadow:none;
      border:none;
    }
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

const OnbTitle01 = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #000;
  margin-bottom: 15px;

  &.v2 {
    max-width: 220px;
    margin: 0 auto;
    text-align: center;
    line-height: 28px;
  }
`;

const BlackWrap = styled(FlexDiv)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 101;
  backdrop-filter: blur(2px);
`;

const WhiteBX01 = styled(FlexDiv)`
  width: 100%;
  position: relative;
  max-width: 400px;
  margin: 0 15px;
  min-height: 418px;
  padding: 50px;
  background-color: #fff;
  border-radius: 30px;
  justify-content: flex-start;
  align-content: center;
  ${Media.xs}{
    padding:50px 25px;
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(actions.getProfile()),
    getUserDetails: () => dispatch(actions.getUserDetails()),
    updateProfile: (params) => dispatch(actions.updateUserDetails(params)),
    getProfileBanner: () => dispatch(actions.getProfileBanner()),
    getDashboard: () => dispatch(actions.fetchDashboardConfig()),
    setDashboard: (data) => dispatch({ type: 'FETCHED_DASHBOARD', data: data }),
    getProfileInfo: () => dispatch(actions.getProfileInfo()),
    setProfileInfo: (data) => dispatch({ type: 'FETCHED_PROFILE_INFO', data: data })
  };
};
const mapStateToProps = (state) => {
  return {
    profile: state.fetchProfile,
    updated: state.updateProfile,
    dashboard: state.fetchDashboard,
    profileBanner: state.fetchProfileBanner,
    profileInfo: state.fetchProfileInfo,
    authData: state.fetchAuthData,
  };
};

export default withCookies(withRouter(connect(mapStateToProps, mapDipatchToProps)(Profile)));
