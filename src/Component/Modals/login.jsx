import React, { Component } from "react";
import styled from "styled-components";
import Gs from "./../../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "./../../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";

import CloseBTN01 from "../../Assets/images/closeBTN01.svg";
import WalletICO01 from "../../Assets/images/walletICO-01.png";
import WalletICO02 from "../../Assets/images/walletICO-02.png";

import LoaderGif from "../../Assets/images/loading.gif";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { web3 } from "../../web3";
import { actions } from "../../actions";

function Login(props) {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({ isError: false, msg: "" });
  const {
    web3Data,
    getUserDetails,
    generateNonce,
    enableMetamask,
    authLogin,
    toggle,
    nonce,
    authData,
    isFooter,
    footerToggleVal,
  } = props;
  useEffect(() => {
    console.log("1", isFooter);
    if (web3Data.accounts[0] && !isFooter) checkAuthentication(web3Data);
  }, [web3Data.accounts[0]]);
  useEffect(() => {
    console.log("2", isFooter);
    if (nonce && !isFooter) signatureRequest(nonce);
  }, [nonce]);
  useEffect(() => {
    console.log("3", isFooter);
    if (authData?.status === 401 && !isFooter) {
      setError({ isError: true, msg: authData.data.message });
    }
  }, [authData]);
  const connectToWallet = (isWalletConnect) => {
    if (web3Data.accounts[0]) {
      checkAuthentication(web3Data);
    } else {
      enableMetamask();
    }
    setLoader(true);
  };
  const checkAuthentication = (web3Data) => {
    if (
      !localStorage.getItem("token") ||
      web3Data.accounts[0] !== localStorage.getItem("userAddress")
    )
      signatureRequest(undefined, true);
    else getUserDetails();
  };
  const signatureRequest = async (nonce, stepOne) => {
    // const { web3Data } = this.state;
    if (stepOne) {
      generateNonce(web3Data.accounts[0]);
    } else {
      try {
        const signature = await web3.eth.personal.sign(
          web3.utils.utf8ToHex(nonce),
          web3Data.accounts[0]
        );
        authLogin(nonce, signature);
      } catch (error) {
        setError({ error: { isError: true, msg: error.message } });
      }
    }
  };
  const refreshStates = () => {
    setError({ isError: false, msg: "" });
    setLoader(false);
  };

  return (
    <>
      <BlackWrap>
        <WhiteBX01>
          <CloseBTN
            className="ani-1"
            onClick={() => {
              toggle(4);
              refreshStates();
            }}
          >
            <img src={CloseBTN01} alt="" />
          </CloseBTN>
          {!error.isError ? (
            !loader ? (
              <>
                <OnbTitle01>Connect your wallet</OnbTitle01>
                <OnbText01>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut sapien faucibus, ornare arcu et, bibendum risus. Nam
                  ultricies urna sed lectus pulvinar, at iaculis ipsum cursus.
                </OnbText01>
                <OnBTNBar>
                  <button onClick={() => connectToWallet()}>
                    <i>
                      <img src={WalletICO01} alt="" />
                    </i>
                    MetaMask
                  </button>
                  <button>
                    <i>
                      <img src={WalletICO02} alt="" />
                    </i>
                    TrustWallet
                  </button>
                </OnBTNBar>
              </>
            ) : (
              <>
                <OnbTitle01 className="v2">
                  Please follow the instructions on your wallet
                </OnbTitle01>
                <LoaderBX>
                  <img src={LoaderGif} alt="" />
                </LoaderBX>
              </>
            )
          ) : (
            <>
              <OnbTitle01>Attention!</OnbTitle01>
              <OnbText01>{error.msg}</OnbText01>
            </>
          )}
        </WhiteBX01>
      </BlackWrap>
    </>
  );
}

const toggle = (index) => {
  let collapse = "isOpen" + index;
  this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
};

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const OnBTNBar = styled(FlexDiv)`
  flex-direction: column;
  width: 100%;
  margin-top: 25px;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #eef2f7;
    border-radius: 10px;
    height: 58px;
    margin-bottom: 8px;
    i {
      width: 32px;
      height: 32px;
      display: block;
      margin-right: 12px;
      margin-left: 4px;
    }
    :hover {
      filter: brightness(0.97);
    }
  }
`;

const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 60px auto 0 auto;
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
const OnbText01 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #000;
  letter-spacing: -0.5px;
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
const CloseBTN = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 27px;
  padding: 0;
  margin: 0px;
  :hover {
    transform: rotate(90deg);
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
export default connect(mapStateToProps, mapDipatchToProps)(Login);
