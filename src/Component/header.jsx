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
    let { web3Data, nonce, authData } = this.props;

    if (web3Data.accounts[0] !== prevProps.web3Data.accounts[0]) {
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          this.fetchTokenBalance(web3Data);
          // this.checkAuthentication(web3Data);
        }
      });
    }
    if (web3Data.isLoggedIn !== prevProps.web3Data.isLoggedIn) {
      this.setState({ web3Data: web3Data });
    }
    // if (nonce !== prevProps.nonce) {
    //   // this.signatureRequest(nonce);
    // }
    if (authData !== prevProps.authData) {
      console.log(authData);
      if (authData.status === true) {
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
          // this.checkAuthentication(web3Data);

          // else this.props.authenticateUser();
        }
      });
    }
  }
  async fetchTokenBalance(web3Data) {
    const accountBalance = Number(
      web3.utils.fromWei(await web3.eth.getBalance(web3Data.accounts[0]))
    ).toLocaleString(undefined, 2);
    // function _compactAddress(address) {
    const newAddress = web3Data.accounts[0];
    const compactUserAddress = newAddress
      ? newAddress.substring(0, 5) +
        "...." +
        newAddress.substring(newAddress.length - 5, newAddress.length)
      : "00000000000";

    this.setState({ accountBalance, compactUserAddress });
  }
  // checkAuthentication(web3Data) {
  //   if (
  //     !localStorage.getItem("token") ||
  //     web3Data.accounts[0] !== localStorage.getItem("userAddress")
  //   )
  //     this.signatureRequest(undefined, true);
  //   else this.props.getUserDetails();
  // }
  // async signatureRequest(nonce, stepOne) {
  //   const { web3Data } = this.state;
  //   if (stepOne) {
  //     this.props.generateNonce(web3Data.accounts[0]);
  //   } else {
  //     try {
  //       const signature = await web3.eth.personal.sign(
  //         web3.utils.utf8ToHex(nonce),
  //         web3Data.accounts[0]
  //       );
  //       this.props.authLogin(nonce, signature);
  //     } catch (error) {
  //       this.setState({ error: { isError: true, msg: error.message } });
  //     }
  //   }
  // }

  // connectToWallet = (isWalletConnect) => {
  //   this.props.enableMetamask();
  //   this.setState({ loader: true });
  // };
  // refreshStates = () => {
  //   this.setState({ error: { isError: false, msg: "" }, loader: false });
  // };

  checkRole = (user) => {
    if (user.role.roleName === "COLLECTOR") {
      return <BecomeCreator />;
    } else if (user.role.roleName === "CREATOR" && user.status === "APPROVED") {
      return (
        <AvBTN02 className="colorBTN">
          <Link to="/user/nftminting">
            <button>Create</button>
          </Link>
        </AvBTN02>
      );
    } else if (user.role.roleName === "CREATOR" && user.status !== "APPROVED") {
      return <AvBTN02 className="colorBTN">Waitlist</AvBTN02>;
    }
  };

  disconnect = () => {
    localStorage.clear();
    this.props.authLogout();
    this.props.web3Logout();
    this.props.history.push("/");
  };

  render() {
    const {
      web3Data,
      loader,
      error,
      userDetails,
      accountBalance,
      compactUserAddress,
    } = this.state;
    const { authData } = this.props;
    return (
      <>
        <HeadMBX>
          <HeadMBX02>
            <HeadSbx01>
              <Logo>
                <Link to="/">
                  <img src={LogoImg} alt="" />
                </Link>
              </Logo>
            </HeadSbx01>

            <HeadSbx01>
              <nav>
                <NavLink to="/marketplace" exact activeClassName="active">
                  <FormattedMessage
                    id="Marketplace"
                    defaultMessage="Marketplace"
                  />
                </NavLink>
                <NavLink to="/creators" exact activeClassName="active">
                  <FormattedMessage id="Creators" defaultMessage="Creators" />
                </NavLink>
                <NavLink to="/3" exact activeClassName="active">
                  <FormattedMessage
                    id="How_to_use?"
                    defaultMessage="How to use?"
                  />
                </NavLink>
              </nav>
            </HeadSbx01>

            {/* without Login  */}
            {!web3Data.isLoggedIn ? (
              <HeadSbx01>
                <AvBTN01 onClick={() => this.toggle(4)}>
                  <FormattedMessage id="Login" defaultMessage="Login" />
                </AvBTN01>
                <Language header={true} />
              </HeadSbx01>
            ) : (
              <HeadSbx01>
                {userDetails ? this.checkRole(userDetails) : ""}

                <NotificationBX onClick={() => this.toggle(3)}>
                  <span className="RedDot"></span>
                  <button>
                    <img src={NotifiIcon} alt="" />
                  </button>

                  <Collapse
                    isOpen={this.state.isOpen3}
                    className={
                      "app__collapse collapse-css-transition  " +
                      (this.state.isOpen3 ? "collapse-active" : "")
                    }
                  >
                    <DDContainer className="ver3">
                      <NotificationSBX01>
                        <button>
                          Lorem ipsum dolor sit amet{" "}
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec ut sapien faucibus, ornare arcu et,
                            bibendum risus.
                          </span>
                        </button>
                        <button>
                          Lorem ipsum dolor sit amet{" "}
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec ut sapien faucibus, ornare arcu et,
                            bibendum risus.
                          </span>
                        </button>
                        <button>
                          Lorem ipsum dolor sit amet{" "}
                          <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec ut sapien faucibus, ornare arcu et,
                            bibendum risus.
                          </span>
                        </button>
                      </NotificationSBX01>
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

        <Collapse
          isOpen={this.state.isOpen4}
          className={
            "app__collapse " + (this.state.isOpen4 ? "collapse-active" : "")
          }
        >
          <Login
            toggle={this.toggle}
            // connectToWallet={this.connectToWallet}
            // loader={loader}
            // error={error}
            // refreshStates={this.refreshStates}
          />
          {/* <BecomeCreator toggle={this.toggle} /> */}
        </Collapse>
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
`;
const HeadMBX02 = styled(FlexDiv)`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;
const HeadSbx01 = styled(FlexDiv)`
  width: 33.33%;
  justify-content: flex-start;
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
  }
  &:nth-child(3) {
    justify-content: flex-end;
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
    border: 1px solid #eef2f7;
    border-radius: 15px;
    :hover {
      border: 1px solid #d6dde5;
      -webkit-box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
      box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
    }
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
const NotificationSBX01 = styled(FlexDiv)`
  align-items: flex-start;
  justify-content: flex-start;

  button {
    width: 100%;
    height: auto;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    display: block;
    text-align: left;
    padding: 15px;
    border-bottom: 1px solid #eef2f7;

    span {
      font-size: 10px;
      font-weight: 400;
      display: block;
      width: 100%;
      margin-top: 5px;
    }
    :hover {
      background-color: #d9f5f5;
    }
  }
`;

const ABC = styled(FlexDiv)`
  align-items: flex-start;
  justify-content: flex-start;
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
export default withRouter(connect(mapStateToProps, mapDipatchToProps)(Header));
