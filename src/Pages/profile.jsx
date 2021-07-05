import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Drafts from "../Component/profile/drafts";
import Artist from "../Component/profile/artits";
import ProfileCard from "../Component/Cards/profileCard";

import { actions } from "../actions";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    }
  }

  componentDidMount() {
    let { profile } = this.props;
    if (!profile) {
      this.props.getProfile();// fetch  profile
    }
  }

  render() {
    const { profile } = this.props;
    const { id } = this.state;
    console.log('profile ??? ', profile?profile.name:'')
    return (
      <>

        {profile ? <ProfileCard id={id?id===profile.id?null:id:null} profile={ profile } /> : "" }

        <Gs.Container>
          {/* <ADBannerMBX>
                        <img src={ADBanner} alt='' />
                    </ADBannerMBX> */}

          {id ? (
            <HomeTabs>
              <Tabs>
                <TabList>
                  <Tab>Created</Tab>
                  <Tab>Collected</Tab>
                  <Tab>Collections</Tab>
                  <Tab>Linked</Tab>
                </TabList>

                <TabPanel>1</TabPanel>
                <TabPanel>2</TabPanel>
                <TabPanel>3</TabPanel>
                <TabPanel>4</TabPanel>
              </Tabs>
            </HomeTabs>
          ): (
              <HomeTabs>
                <Tabs>
                  <TabList>
                    <Tab>Artist</Tab>
                    <Tab>Artworks</Tab>
                    <Tab>Collector</Tab>
                    <Tab>Our Picks</Tab>
                    <Tab>Drafts</Tab>
                  </TabList>

                  <TabPanel>
                    <Artist />
                  </TabPanel>
                  <TabPanel>2</TabPanel>
                  <TabPanel>3</TabPanel>
                  <TabPanel>4</TabPanel>
                  <TabPanel>
                    <Drafts />
                  </TabPanel>
                </Tabs>
              </HomeTabs>
          )}

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

const mapDipatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(actions.getProfile()),
  };
};
const mapStateToProps = (state) => {
  return {
    profile: state.fetchProfile,
  };
};

export default withRouter(connect(mapStateToProps, mapDipatchToProps)(Profile));
