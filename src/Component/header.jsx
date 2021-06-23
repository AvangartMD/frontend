import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import Connect from "./connect";
import { connect } from "react-redux";
import { actions } from "../actions";
import LogoImg from "../Assets/images/logo.png";
import NotifiIcon from "../Assets/images/notification.svg";
import UserIcon from "../Assets/images/userIcon.png";
import RightArrow from "../Assets/images/rightArrow.svg";
import DisconnectICO from "../Assets/images/icon-disconnect.svg";
import Language from "./lang.switch";
import Login from "./Modals/login";
import { web3 } from "../web3";
import BecomeCreator from "./become-a-creator";

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
    };
  }
  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
  }
  async componentDidUpdate(prevProps, prevState) {
    let { web3Data, nonce, authData } = this.props;
    console.log("this", web3Data);

    if (web3Data !== prevProps.web3Data) {
      console.log("this");
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          this.signatureRequest(undefined, true);
        }
      });
    }
    if (nonce !== prevProps.nonce) {
      this.signatureRequest(nonce);
    }
    if (authData?.token !== prevProps.authData?.token) {
      console.log(authData);
      if (authData.token) {
        let { web3Data } = this.state;
        web3Data.isLoggedIn = true;
        this.setState({ web3Data, userDetails: authData.details }, () => {
          this.toggle(4);
          this.refreshStates();
        });
      }
    }
  }

  componentDidMount() {
    let { web3Data } = this.props;
    if (!web3Data) {
      // this.props.getWeb3();
      console.log("hete");
    } else {
      this.setState({ web3Data: web3Data }, () => {
        if (web3Data.accounts[0]) {
          this.signatureRequest(undefined, true);
        }
      });
    }
  }
  async signatureRequest(nonce, stepOne) {
    const { web3Data } = this.state;
    if (stepOne) {
      console.log("step one");
      this.props.generateNonce(web3Data.accounts[0]);
    } else {
      try {
        const signature = await web3.eth.personal.sign(
          web3.utils.utf8ToHex(nonce),
          web3Data.accounts[0]
        );
        this.props.authLogin(nonce, signature);
      } catch (error) {
        this.setState({ error: { isError: true, msg: error.message } });
        console.log("this error", error);
      }
      console.log("step two");
    }
  }
  connectToWallet = (isWalletConnect) => {
    console.log("works");
    this.props.enableMetamask();
    this.setState({ loader: true });
  };
  refreshStates = () => {
    this.setState({ error: { isError: false, msg: "" }, loader: false });
  };

  render() {
    const { web3Data, loader, error, userDetails } = this.state;
    console.log(userDetails);

    return (
      <>
        <HeadMBX>
          <HeadMBX02>
            <HeadSbx01>
              <Logo>
                <img src={LogoImg} alt="" />
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
                <AvBTN02 className="colorBTN">Become a Creator</AvBTN02>
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
                    0.00 BNB
                    <span>0000000000000</span>
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
                        <button>
                          <i>
                            {" "}
                            <img src={UserIcon} alt="" />
                          </i>{" "}
                          View your profile{" "}
                          <span>
                            {" "}
                            <img src={RightArrow} alt="" />
                          </span>
                        </button>
                        <button>
                          <i>
                            {" "}
                            <img src={DisconnectICO} alt="" />
                          </i>
                          Disconnect{" "}
                          <span>
                            {" "}
                            <img src={RightArrow} alt="" />
                          </span>
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
            connectToWallet={this.connectToWallet}
            loader={loader}
            error={error}
            refreshStates={this.refreshStates}
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
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
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
export default connect(mapStateToProps, mapDipatchToProps)(Header);
