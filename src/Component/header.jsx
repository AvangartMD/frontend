import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import Connect from "./connect";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { actions } from "../actions";
import LogoImg from "../Assets/images/logo.png";
import NotifiIcon from "../Assets/images/notification.svg";
import UserIcon from "../Assets/images/user-img.jpg";
import RightArrow from "../Assets/images/rightArrow.svg";
import DisconnectICO from "../Assets/images/icon-disconnect.svg";
import Language from "./lang.switch";
import Login from "./Modals/login";
import { web3 } from "../web3";
import BecomeCreator from "./Modals/become-creator";
import Notifications from "../Component/header/notification";
import { FaBars } from 'react-icons/fa';
import CloseBTN01 from "../Assets/images/closeBTN01.svg";
import IconMenuOpen from "../Assets/images/icon-set-menu.svg";
import IconMenuClose from "../Assets/images/icon-set-close.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      web3Data: {
        isLoggedIn: false,
        accounts: [],
      },
      loader: false,
      error: { isError: false, msg: "" },
      userDetails: null,
      accountBalance: 0,
      compactUserAddress: "00000000000",
    };
  }
  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
  }
  async componentDidUpdate(prevProps, prevState) {
    let { web3Data, authData } = this.props;

    if (web3Data.accounts[0] !== prevProps.web3Data.accounts[0]) {
      if (web3Data.accounts[0] !== localStorage.getItem("userAddress"))
        localStorage.setItem("userAddress", "");
      else if (localStorage.getItem("avangartAuthToken")) this.props.getUserDetails();
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          this.fetchTokenBalance(web3Data);
        }
      });
    }
    if (web3Data.isLoggedIn !== prevProps.web3Data.isLoggedIn) {
      this.setState({ web3Data: web3Data });
    }
    if (authData !== prevProps.authData) {
      if (authData) {
        this.setState({ userDetails: authData.data });
      }
    }
  }

  componentDidMount() {
    let { web3Data } = this.props;
    if (!web3Data.accounts[0]) {
      this.props.getWeb3();
    } else {
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          this.fetchTokenBalance(web3Data);
        }
      });
    }
    window.ethereum.on("accountsChanged", accounts => { // metamask user address changed
      if (!web3Data.accounts[0]) {
        this.props.clearNonce()
        this.props.authLogout()
        this.props.web3Logout(accounts)
        this.props.history.push("/")
        this.setState({ isOpen4: true })
      }
    });
  }
  async fetchTokenBalance(web3Data) {
    const accountBalance = Number(
      web3.utils.fromWei(await web3.eth.getBalance(web3Data.accounts[0]))
    ).toLocaleString(undefined, 2);
    const newAddress = web3Data.accounts[0];
    const compactUserAddress = newAddress
      ? newAddress.substring(0, 5) +
      "...." +
      newAddress.substring(newAddress.length - 5, newAddress.length)
      : "00000000000";

    this.setState({ accountBalance, compactUserAddress });
  }

  checkRole = (user) => {
    if (user.role.roleName === "COLLECTOR") {
      return <BecomeCreator isHeader={true} />;
    } else if (user.role.roleName === "CREATOR" && user.status === "APPROVED") {
      return (
        <Link to="/user/nftminting">
          <AvBTN02 className="colorBTN">
            Create
          </AvBTN02>
        </Link>
      );
    } else if (user.role.roleName === "CREATOR" && user.status !== "APPROVED") {
      return <AvBTN02 className="colorBTN">Waitlist</AvBTN02>;
    }
  };

  disconnect = () => {
    const { web3Data } = this.props;
    localStorage.clear();
    this.props.authLogout();
    this.props.web3Logout(web3Data.accounts);
    this.props.history.push("/");
  };

  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };

  render() {
    const {
      web3Data,
      userDetails,
      accountBalance,
      compactUserAddress,
    } = this.state;
    return (
      <>
        <HeadMBX>
          <HeadMBX02>
            <HeadSbx01 className="mobile-logo">
              <Logo>
                <Link to="/">
                  <img src={LogoImg} alt="" />
                </Link>
              </Logo>
            </HeadSbx01>

            <HeadSbx01>
              <MobileMenu>
                {web3Data.isLoggedIn ?
                  <NotificationBX onClick={() => this.toggle(3)}>
                    <button className="">
                      <img src={NotifiIcon} alt="" />
                      <span className="RedDot"></span>
                    </button>

                    <Collapse
                      isOpen={this.state.isOpen3}
                      className={
                        "app__collapse collapse-css-transition  " +
                        (this.state.isOpen3 ? "collapse-active" : "")
                      }
                    >
                      <DDContainer className="ver3">
                        <Notifications />
                      </DDContainer>

                    </Collapse>
                  </NotificationBX>
                : ``}
                
                <Bars onClick={() => this.toggle(11)} className={(this.state.isOpen11 ? "menu-active" : "")} />
              </MobileMenu>
              <MobileSidebar>
                <Collapse id="mobile-block"
                  isOpen={this.state.isOpen11}
                  className={
                    "app__collapse " + (this.state.isOpen11 ? "collapse-active" : "")
                  }
                >
                  <MobInner>
                    <div className="mobile-links">
                      {web3Data.isLoggedIn ?
                        <NavLink to="/user/profile" exact activeClassName="active" onClick={() => this.toggle(11)}>
                          Profile
                        </NavLink>
                        : ``}
                      <NavLink to="/marketplace" exact activeClassName="active" onClick={() => this.toggle(11)}>
                        <FormattedMessage
                          id="Marketplace"
                          defaultMessage="Marketplace"
                        />
                      </NavLink>
                      <NavLink to="/collections" exact activeClassName="active" onClick={() => this.toggle(11)}>
                        <FormattedMessage id="Collections" defaultMessage="Collections" />
                      </NavLink>
                      <NavLink to="/creators" exact activeClassName="active" onClick={() => this.toggle(11)}>
                        <FormattedMessage id="Creators" defaultMessage="Creators" />
                      </NavLink>
                      <NavLink to="/how-to-use" exact activeClassName="active" onClick={() => this.toggle(11)}>
                        <FormattedMessage
                          id="How_to_use?"
                          defaultMessage="How to use?"
                        />
                      </NavLink>
                      <NavLink to="/" exact activeClassName="active" onClick={() => this.toggle(12)}>
                        More
                      </NavLink>
                    </div>
                    <Collapse
                      isOpen={this.state.isOpen12}
                      className={
                        "app__collapse " + (this.state.isOpen12 ? "collapse-active" : "")
                      }
                    >
                      <Moremenu>
                        <div className="more-parts">
                          <NavLink to="blog-list" onClick={() => { this.toggle(12); this.toggle(11) }}>Avangart Blog</NavLink>
                          <NavLink to="/faq" onClick={() => { this.toggle(12); this.toggle(11) }}>FAQ</NavLink>
                          <NavLink to="" onClick={() => { this.toggle(12); this.toggle(11) }}>Support</NavLink>
                        </div>
                        <div className="more-parts">
                          <NavLink to="/legal" onClick={() => { this.toggle(12); this.toggle(11) }}>
                            <FormattedMessage
                              id="Term_of_service"
                              defaultMessage="Terms of Service"
                            />
                          </NavLink>
                          <NavLink to="/legal" onClick={() => { this.toggle(12); this.toggle(11) }}>
                            <FormattedMessage
                              id="Privacy_policy"
                              defaultMessage="Privacy Policy"
                            />
                          </NavLink>
                          <NavLink to="/legal" onClick={() => { this.toggle(12); this.toggle(11) }}>
                            <FormattedMessage
                              id="Cookie_policy"
                              defaultMessage="Cookie Policy"
                            />
                          </NavLink>
                        </div>
                      </Moremenu>
                    </Collapse>

                    {!web3Data.isLoggedIn ?
                      <>
                        <Language header={true} />
                        <div className="mobile-login-btn">
                          <AvBTN01 onClick={() => this.toggle(4)}>
                            <FormattedMessage id="Login" defaultMessage="Login" />
                          </AvBTN01>
                        </div>
                      </>
                      : <>
                        <Language header={true} />
                        <div className="mobile-login-btn">
                          {userDetails ? this.checkRole(userDetails) : ""}
                        </div>
                        <Mobiledisconnect onClick={() => { this.disconnect(); this.toggle(11); }}>Disconnect</Mobiledisconnect>
                      </>
                    }
                    <FooterrightLinks>
                      <Link to='/'>Instagram</Link>
                      <Link to='/'>Twitter</Link>
                      <Link to='/'>Discord</Link>
                    </FooterrightLinks>
                  </MobInner>
                </Collapse>
              </MobileSidebar>

              <nav className="desktop-menu">
                <NavLink to="/marketplace" exact activeClassName="active">
                  <FormattedMessage
                    id="Marketplace"
                    defaultMessage="Marketplace"
                  />
                </NavLink>
                <NavLink to="/creators" exact activeClassName="active">
                  <FormattedMessage id="Creators" defaultMessage="Creators" />
                </NavLink>
                <NavLink to="/how-to-use" exact activeClassName="active">
                  <FormattedMessage
                    id="How_to_use?"
                    defaultMessage="How to use?"
                  />
                </NavLink>
              </nav>
            </HeadSbx01>

            {/* without Login  */}
            {!web3Data.isLoggedIn ? (
              <HeadSbx01 className="desktop-menu">
                <AvBTN01 onClick={() => this.toggle(4)}>
                  <FormattedMessage id="Login" defaultMessage="Login" />
                </AvBTN01>
                <Language header={true} />
              </HeadSbx01>
            ) : (
              <HeadSbx01 className="desktop-menu">
                {userDetails ? this.checkRole(userDetails) : ""}

                <NotificationBX onClick={() => this.toggle(3)}>

                  <button className="active">
                    <img src={NotifiIcon} alt="" />
                    <span className="RedDot"></span>
                  </button>

                  <Collapse
                    isOpen={this.state.isOpen3}
                    className={
                      "app__collapse collapse-css-transition  " +
                      (this.state.isOpen3 ? "collapse-active" : "")
                    }
                  >
                    <DDContainer className="ver3">
                      <Notifications />
                    </DDContainer>

                  </Collapse>
                </NotificationBX>
                <AccountBX onClick={() => this.toggle(2)}>
                  <span>
                    {accountBalance} BNB
                    <span>{compactUserAddress}</span>
                  </span>{" "}
                  <i>
                    {" "}
                    <img
                      src={
                        userDetails
                          ? userDetails.profile
                            ? userDetails.profile
                            : UserIcon
                          : UserIcon
                      }
                      alt=""
                    />
                  </i>
                  <Collapse
                    isOpen={this.state.isOpen2}
                    className={
                      "app__collapse collapse-css-transition  " +
                      (this.state.isOpen2 ? "collapse-active" : "")
                    }
                  >
                    <DDContainer className="ver2">
                      <DDBtnbar02>
                        <button
                          onClick={() =>
                            this.props.history.push("/user/profile")
                          }
                        >
                          <i>
                            {" "}
                            <img
                              src={
                                userDetails
                                  ? userDetails.profile
                                    ? userDetails.profile
                                    : UserIcon
                                  : UserIcon
                              }
                              alt=""
                            />
                          </i>{" "}
                          View your profile{" "}
                          <span>
                            {" "}
                            <img src={RightArrow} alt="" />
                          </span>
                        </button>
                        <button
                          onClick={() => {
                            this.disconnect();
                          }}
                        >
                          <i>
                            {" "}
                            <img src={DisconnectICO} alt="" />
                          </i>
                          Disconnect{" "}
                          {/* <span>
                            {" "}
                            <img src={RightArrow} alt="" />
                          </span> */}
                        </button>

                      </DDBtnbar02>
                    </DDContainer>
                  </Collapse>
                </AccountBX>
              </HeadSbx01>
            )}
          </HeadMBX02>
        </HeadMBX>

        {this.state.isOpen4 ? <Login toggle={this.toggle} /> : ``}
      </>
    );
  }

  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeadMBX = styled(FlexDiv)`
  width: 100%;
  min-height: 100px;
  position: absolute;
  z-index: 100;
  ${Media.md}{
    min-height: 80px;
  }
`;
const HeadMBX02 = styled(FlexDiv)`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  ${Media.lg}{
    margin: 0 15px;
    justify-content:flex-start;
  }
`;
const HeadSbx01 = styled(FlexDiv)`
  width: 33.33%;
  justify-content: flex-start;
  &.mobile-logo
  {
    ${Media.md}{
      width:auto;
    } 
  }
  &.desktop-menu,.desktop-menu
  {
    ${Media.md}{
      display:none;
    } 
  }
  ${Media.lg}{
    width:28.33%;
  }
  &:nth-child(2) {
    justify-content: center;
    & nav:hover {
      a:not(:hover) {
        opacity: 0.3;
      }
    }
    a {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      padding: 0 20px;
      line-height: 25px;
      position: relative;
      ${Media.lg}{
        font-size:15px;
        padding: 0 15px;
      }
      :hover,
      &.active {
        :after {
          content: "";
          left: 20px;
          right: 20px;
          height: 2px;
          background-color: #000;
          display: block;
          position: absolute;
          bottom: -3px;
        }
      }
    }
    ${Media.lg}{
      width:33.33%;
    }
  }
  &:nth-child(3) {
    justify-content: flex-end;
    ${Media.lg}{
      width:38.33%;
    }
  }
`;
const Logo = styled(FlexDiv)``;

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
`;

const LanBTN = styled(FlexDiv)`
  margin-left: 30px;
  position: relative;
  button {
    font-size: 12px;
    font-weight: 600;
    color: #000;
  }
`;
const AvBTN02 = styled.button`
  padding: 11px 23px;
  font-size: 12px;
  color: #fff;
  background-color: #000;
  border-radius: 15px;
  :hover {
    background-color: #d121d6;
    -webkit-box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
  }

  &.grayBTN {
    background-color: #b2b2b2;
    :hover {
      background-color: #878787;
    }
  }
  &.colorBTN {
    background: #d121d6;
    background: -moz-linear-gradient(left, #d121d6 0%, #febf11 100%);
    background: -webkit-linear-gradient(left, #d121d6 0%, #febf11 100%);
    background: linear-gradient(to right, #d121d6 0%, #febf11 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d121d6', endColorstr='#febf11',GradientType=1 );
    color: #fff;
    :hover {
      filter: brightness(0.9);
    }
  }
`;

const NotificationBX = styled(FlexDiv)`
  margin-left: 8px;
  position: relative;
  & > button {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    &.active,:hover {
      border: 1px solid #d6dde5;
      -webkit-box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
      box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
      border: 1px solid #eef2f7;
      background-color:#ffffff;
      span.RedDot {display:block;}
    }
    span.RedDot {
      width: 12px;
      height: 12px;
      border-radius: 8px;
      display: block;
      position: absolute;
      right: -2px;
      top: -2px;
      background-color: #ff2a44;
      display:none;
    }
  }
`;
const AccountBX = styled(FlexDiv)`
  margin-left: 8px;
  position: relative;
  border: solid 1px transparent;
  width: 170px;
  justify-content: flex-end;
  background-color: #fff;
  padding: 8px 10px;
  border-radius: 20px;
  z-index: 101;
  cursor: pointer;
  ${Media.lg}{
    padding: 8px 10px;
  }
  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    border: solid 1px #eef2f7;
  }

  & i {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  & span {
    font-size: 14px;
    font-weight: 600;
    color: #000;
    display: block;
    text-align: right;
    line-height: 16px;
    padding-right: 8px;
    span {
      font-size: 10px;
      color: #b3b3b3;
      width: 100%;
      padding-right: 0;
    }
  }
`;
const DDContainer = styled(FlexDiv)`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  top: calc(100% + 30px);
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
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
    ${Media.md} {
      transform:none;
      left:auto;
      right:-49px;
      width:100vw;
      top: calc(100% + 21px);
      box-shadow:none;
      border-radius:0px;
      padding:30px 25px;
      justify-content:flex-start;
    }
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
const DDBtnbar02 = styled(FlexDiv)`
  width: 100%;
  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 58px;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #eef2f7;
    & i {
      width: 34px;
      height: 34px;
      margin: 0 8px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    & span {
      margin-left: auto;
    }
    &:nth-last-child(01) {
      border-bottom: 0px;
    }
    &:hover {
      background-color: #d9f5f5;
    }
  }
`;

const ABC = styled(FlexDiv)`
  align-items: flex-start;
  justify-content: flex-start;
`;

const CloseBTN = styled.button`
  width: 20px;
  height: 20px;
  // position: absolute;
  // right: 20px;
  // top: 27px;
  padding: 0;
  margin: 0px;
  :hover {
    transform: rotate(90deg);
  }
  ${Media.xs} {
    right: 15px;
    top: 15px;
  }
`;

const MobileMenu = styled(FlexDiv)`
  display:none;
  ${Media.md}{
    display:flex;
    position:absolute;
    right:15px;
  }
`;

const Bars = styled.div`
  color:#000;
  font-size:20px;
  margin-left:10px;
  background:url(${IconMenuOpen}) no-repeat;
  width:24px;
  height:24px;
  &.menu-active
  {
    background:url(${IconMenuClose}) no-repeat;
  }
`;

const MobileSidebar = styled.div`
  background-color:#fff;
  width:100%;
  position:absolute;
  top:80px;
  left:0px;
  display:none;
  ${Media.md}{
    display:block;
  }
  .collapse-active#mobile-block
  {
    height:auto !important;
  }
`;

const MobInner = styled.div`
  width:100%;
  padding:30px 25px;
  .mobile-links
  {
    a{
      width:max-content;
      display:block;
      font-size:18px;
      padding:0px 0px 22px !important;
      :after
      {
        left:0px !important;
        bottom:18px !important;
        width:100%;
        height:3px !important;
      }
    }
    :hover {
      a:not(:hover) {
        opacity: 0.3;
      }
    }
  }
  .mobile-login-btn
  {
    margin-top:80px;
    text-align:center;
    button
    {
      padding: 12px 75px 15px;
      font-size:18px;
      text-transform:capitalize;
    }
    a{
      :after{display:none !important;}
    }
  }
`;

const FooterrightLinks = styled(FlexDiv)`
  margin:30px 0px 40px;
  a{
    font-size:14px !important;
    letter-spacing:-0.6px !important;
    font-weight:500 !important;
    :last-child
    {
      margin-right:0px;
    }
  }
`;

const Mobiledisconnect = styled(FlexDiv)`
  margin:15px 0px 0px;
  font-size:14px !important;
  letter-spacing:-0.6px !important;
  font-weight:500 !important;
  text-decoration:underline;
  :after
  {
    display:none !important;
  }
`;

const Moremenu = styled(FlexDiv)`
  .more-parts
  {
    width:50%;
    a
    {
      font-size:14px;
      letter-spacing:-0.62px;
      font-weight:600;
      display:block;
      margin-bottom:15px;
      :after
      {
        display:none !important;
      }
    }
  }
  :hover {
    a:not(:hover) {
      opacity: 0.3;
    }
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getWeb3: () => dispatch(actions.getWeb3()),
    enableMetamask: () => dispatch(actions.enableMetamask()),
    generateNonce: (address) => dispatch(actions.generateNonce(address)),
    clearNonce: () => dispatch({ type: "GENERATE_NONCE", data: null }),
    authLogin: (nonce, signature) =>
      dispatch(actions.authLogin(nonce, signature)),
    authenticateUser: () => dispatch(actions.authenticateUser()),
    getUserDetails: () => dispatch(actions.getUserDetails()),
    authLogout: () => dispatch({ type: "AUTH_LOGIN", data: null }),
    web3Logout: (accounts) =>
      dispatch({
        type: "FETCH_WEB3_DATA",
        data: { isLoggedIn: false, accounts: accounts },
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
export default withRouter(connect(mapStateToProps, mapDipatchToProps)(Header));
