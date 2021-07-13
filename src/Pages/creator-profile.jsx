import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import dateFormat from "dateformat";

import Gs from "../Theme/globalStyles";
import LoaderGif from "../Assets/images/loading.gif";
import UserIcon from "../Assets/images/user-img.jpg";
import ProfielBack from "../Assets/images/profile-back.jpg";
import CopyICO from "../Assets/images/icon-copy.svg";
import PlusICO from "../Assets/images/icon-plus.svg";

import SocialICO01 from "../Assets/images/social-icon01.svg";
import SocialICO03 from "../Assets/images/social-icon03.svg";
import SocialICO04 from "../Assets/images/social-icon04.svg";
import SocialICO05 from "../Assets/images/social-icon05.svg";
import SocialICO06 from "../Assets/images/social-icon06.svg";

import { actions } from "../actions";

import Created from "../Component/profile/created";
import Collected from "../Component/profile/collected";
import Collection from "../Component/profile/collection";
import Liked from "../Component/profile/liked";


class CreatorProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      loading: false,
    }
  }

  componentDidMount() {
    const { id } = this.state;
    this.props.getUserProfile(id); // fetch user profile by id
    this.props.getIsFollow(id); // check user is following
  }

  componentDidUpdate(prevProps, prevState) {
    const { status } = this.props;
    const { id } = this.state;
    if (status !== prevProps.status) {
      this.setState({ loading: false }) // stop loader
      this.props.getUserProfile(id); // fetch user profile by id
    }
  }

  followToggler = (id) => {
    this.setState({ loading: true }) // start loader
    this.props.followToggler(id); // follow toggle api called
  }



  render() {
    const { profile, status, web3Data, authData } = this.props;
    const { id, loading } = this.state;
    return (
      <>

        {loading ? (
          <>
            <BlackWrap>
              <WhiteBX01>
                <LoaderBX>
                  <img src={LoaderGif} alt="" />
                </LoaderBX>
              </WhiteBX01>
            </BlackWrap>
          </>
        ) : ('')}
        {profile ?
          (
            <>
              <Helmet>
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content={profile?.name} />
                <meta property="og:image" content={profile.profile ? profile.profile : UserIcon} />
                <meta property="og:description" content={profile?.bio} />
              </Helmet>

              <ProMBannerBX
                style={{
                  backgroundImage: `url(${profile.cover ? profile.cover : ProfielBack
                    })`,
                }}
              >
                <ProMBX01>
                  <ProSBX01>
                    <UserImgBX>
                      <UserImgSB>
                        <img src={profile.profile ? profile.profile : UserIcon} alt="" />
                      </UserImgSB>
                    </UserImgBX>

                    <UserDetailBX>
                      <UserDTitle01>
                        {profile ? profile.name : "User Name"}
                        <span>@{profile ? profile.username : "username"}</span>
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

                      {id ? (
                        authData ?
                          web3Data.isLoggedIn && (authData.data.id !== profile.id) ? <EditPrBTN className="disabled"><button className="ani-1" onClick={() => this.followToggler(profile.id)}>{status.isFollowed ? 'Unfollow' : 'Follow'}</button></EditPrBTN> : ('')
                          : ''
                      ) : (
                        <EditPrBTN>
                          <button
                            onClick={() => this.props.history.push("/user/edit-profile")}
                          >
                            Edit Profile
                          </button>
                        </EditPrBTN>
                      )}
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

                <HomeTabs>
                  <Tabs>
                    {profile.role.roleName === 'CREATOR' ? (
                      <>
                        <TabList>
                          <Tab>Created</Tab>
                          <Tab>Collected</Tab>
                          <Tab>Collections</Tab>
                          <Tab>Liked</Tab>
                        </TabList>

                        <TabPanel> <Created /> </TabPanel>
                        <TabPanel> <Collected />  </TabPanel>
                        <TabPanel> <Collection /> </TabPanel>
                        <TabPanel> <Liked /> </TabPanel>
                      </>
                    ) : (
                      <>
                        <TabList>
                          <Tab>Collected</Tab>
                          <Tab>Collections</Tab>
                          <Tab>Linked</Tab>
                        </TabList>

                        <TabPanel> <Collected /> </TabPanel>
                        <TabPanel> <Collection /> </TabPanel>
                        <TabPanel> <Liked /> </TabPanel>
                      </>
                    )}

                  </Tabs>
                </HomeTabs>
              </Gs.Container>
            </>
          ) : <LoaderBX> <img src={LoaderGif} alt="" /> </LoaderBX>}
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
const ProMBannerBX = styled(FlexDiv)`
  width: 100%;
  height: 300px;
  margin-bottom: 230px;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
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
`;
const ProSBX01 = styled(FlexDiv)`
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const UserImgBX = styled(FlexDiv)`
  width: 142px;
  justify-content: flex-start;
  position: relative;
`;
const UserImgSB = styled.div`
  width: 122px;
  height: 122px;
  border-radius: 62px;
  overflow: hidden;
  border: 1px solid #efecf0;
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
`;

const ProSBX03 = styled(FlexDiv)`
  flex-direction: row;
  margin-bottom: auto;
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
const EditPrBTN = styled.div`
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
  &.disabled{
    pointer-events: none;
    background-color:rgb(244 0 88 / 30%);
    border-color:rgb(244 0 88 / 20%);
    button{
    color:rgb(0 0 0 / 30%);
    }
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

const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
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
  margin: 0 auto;
  min-height: 418px;
  padding: 50px;
  background-color: #fff;
  border-radius: 30px;
  justify-content: flex-start;
  align-content: center;
`;


const mapDipatchToProps = (dispatch) => {
  return {
    getUserProfile: (id) => dispatch(actions.getUserProfile(id)),
    getIsFollow: (id) => dispatch(actions.getIsFollow(id)),
    followToggler: (id) => dispatch(actions.followToggler(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    profile: state.fetchUserProfile,
    status: state.fetchIsFollow,
    web3Data: state.fetchWeb3Data,
    authData: state.fetchAuthData,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(CreatorProfile);
