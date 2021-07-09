import React, { Component, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Gs from "./../Theme/globalStyles";
import { Link, NavLink } from "react-router-dom";
import Media from "./../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { connect } from "react-redux";

import LogoImg from "../Assets/images/logoWhite.png";
import NotifiIcon from "../Assets/images/notification.svg";
import UserIcon from "../Assets/images/userIcon.png";
import RightArrow from "../Assets/images/rightArrow.svg";
import DisconnectICO from "../Assets/images/icon-disconnect.svg";
import Language from "./lang.switch";
import { actions } from "../actions";
import Login from "./Modals/login";
import BecomeCreator from "../Component/Modals/become-creator";

function Footer(props) {
  const { web3Data, authData: userDetails } = props;
  const checkRole = (user) => {
    if (user.role.roleName === "COLLECTOR") {
      return <BecomeCreator isFooter={false} />;
    } else if (user.role.roleName === "CREATOR" && user.status === "APPROVED") {
      return (
        <AvBTN01 className='createButton'>
          <Link to="/user/nftminting">
            <FormattedMessage id="Create" defaultMessage="Create" />
          </Link>
        </AvBTN01>
      );
    } else if (user.role.roleName === "CREATOR" && user.status !== "APPROVED") {
      return <AvBTN01>Waitlist</AvBTN01>;
    }
  };
  const toggle = (index) => {
    setIsOpen4(!isOpen4);
  };
  const [isOpen4, setIsOpen4] = useState(false);
  return (
    <>
      <FooterMBX>
        <FooterSbx01>
          <FooterSSbx01>
            <img src={LogoImg} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque mollis urna ac ante tempor rutrum. Morbi in fringilla
              nisi.
            </p>

            <button>
              <FormattedMessage id="Learn_more" defaultMessage="Learn More" />
            </button>
          </FooterSSbx01>
          <FooterSSbx02>
            <NavLink to="-">
              <FormattedMessage id="Marketplace" defaultMessage="Marketplace" />
            </NavLink>
            <NavLink to="-">
              <FormattedMessage id="Collections" defaultMessage="Collections" />
            </NavLink>
            <NavLink to="-">
              <FormattedMessage id="Creators" defaultMessage="Creators" />
            </NavLink>
            <NavLink to="-">
              <FormattedMessage
                id="Become_a_creator"
                defaultMessage="Become a Creator"
              />
            </NavLink>
          </FooterSSbx02>
          <FooterSSbx02>
            <NavLink to="-">
              <FormattedMessage
                id="Term_of_service"
                defaultMessage="Terms of Service"
              />
            </NavLink>
            <NavLink to="-">
              <FormattedMessage
                id="Privacy_policy"
                defaultMessage="Privacy Policy"
              />
            </NavLink>
            <NavLink to="-">
              <FormattedMessage
                id="Cookie_policy"
                defaultMessage="Cookie Policy"
              />
            </NavLink>
          </FooterSSbx02>
          <FooterSSbx02>
            <NavLink to="-">Instagram</NavLink>
            <NavLink to="-">Twitter</NavLink>
            <NavLink to="-">Discord</NavLink>
            <NavLink to="-">Blog</NavLink>
          </FooterSSbx02>
          <FooterSSbx02>
            <NavLink to="-">How to use?</NavLink>
            <NavLink to="-">FAQ</NavLink>
            <NavLink to="-">Support</NavLink>
          </FooterSSbx02>

          <FooterSSbx03>
            {!web3Data.isLoggedIn ? (
              <>
                {/* <AvBTN01 onClick={() => toggle()}>
                  <FormattedMessage id="Login" defaultMessage="Login" />
                </AvBTN01> */}
                {/* <AvBTN01 className='createButton'>
                  <Link to="/user/nftminting">
                    <FormattedMessage id="Create" defaultMessage="Create" />
                  </Link>
                </AvBTN01> */}
                {/* <AvBTN01>Waitlist</AvBTN01> */}
               
              </>
            ) : userDetails && userDetails.status === true ? (
              checkRole(userDetails.data)
            ) : (
              ""
            )}
            <Language header={false} />
          </FooterSSbx03>
        </FooterSbx01>
      </FooterMBX>
      <Collapse
        isOpen={isOpen4}
        className={"app__collapse " + (isOpen4 ? "collapse-active" : "")}
      >
        <Login toggle={toggle} isFooter={true} footerToggleVal={isOpen4} />
        {/* <BecomeCreator toggle={this.toggle} /> */}
      </Collapse>
    </>
  );
}

// }
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterMBX = styled.div`
  padding: 40px 0;
  background-color: #2d2d2d;
  width: 100%;
`;
const FooterSbx01 = styled(FlexDiv)`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FooterSSbx01 = styled(FlexDiv)`
  width: 36%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  p {
    color: #fff;
    max-width: 320px;
    font-size: 12px;
    line-height: 22px;
    font-weight: 400;
  }
  button {
    color: #fff;
    background-color: transparent;
    border: 0;
    outline: none;
    padding: 0;
    font-size: 12px;
    text-decoration: underline;
    :hover {
      color: #d327ce;
    }
  }
`;

const FooterSSbx02 = styled(FlexDiv)`
  width: 12.2%;
  padding-right: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 48px;
  a {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 8px;
    :hover {
      text-decoration: underline;
    }
  }
`;
const FooterSSbx03 = styled(FlexDiv)`
  width: 15.2%;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  padding-top: 48px;
`;

const AvBTN01 = styled.button`
  padding: 9px 40px;
  color: #fff;
  background-color: #000;
  border-radius: 15px;
  :hover {
    background-color: #d121d6;
    -webkit-box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
  }
  &.createButton{
    a{
      color:#fff;
    }
  }
`;

const LanBTN = styled(FlexDiv)`
  margin-left: 30px;
  position: relative;
  margin-top: 50px;
  button {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
  }
`;
const DDContainer = styled(FlexDiv)`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  bottom: calc(100% + 5px);
  width: 200px;
  right: 0;
  overflow: hidden;
  z-index: 100;
  &.ver2 {
    width: 300px;
    left: auto;
    transform: translateX(0);
    right: 0;
    top: calc(100% + 20px);
    padding: 0;
  }
  &.ver3 {
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% + 34px);
    padding: 0;
  }
`;
const DDBtnbar01 = styled(FlexDiv)`
  font-size: 16px;
  color: #b3b3b3;
  font-weight: 600;
  button {
    font-size: 16px;
    padding: 0 10px;
    margin: 0 6px;
    color: #b3b3b3;
    &.active {
      color: #000;
    }
    :hover {
      color: #000;
    }
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getWeb3: () => dispatch(actions.getWeb3()),
    enableMetamask: () => dispatch(actions.enableMetamask()),
    generateNonce: (address) => dispatch(actions.generateNonce(address)),
    authLogin: (nonce, signature) =>
      dispatch(actions.authLogin(nonce, signature)),
    authenticateUser: () => dispatch(actions.authenticateUser()),
    getUserDetails: () => dispatch(actions.getUserDetails()),
    authLogout: () => dispatch({ type: "AUTH_LOGOUT", data: null }),
    web3Logout: () =>
      dispatch({
        type: "FETCH_WEB3_DATA",
        data: { isLoggedIn: false, accounts: [] },
      }),
  };
};
const mapStateToProps = (state) => {
  return {
    web3Data: state.fetchWeb3Data,
    networkId: state.fetchNetworkId,
    isMetamaskEnabled: state.fetchMetamask,
    nonce: state.fetchNonce,
    authData: state.fetchAuthData,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(Footer);
