import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Gs from './../../Theme/globalStyles';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Media from './../../Theme/media-breackpoint';
import Collapse from '@kunukn/react-collapse';

import CloseBTN01 from '../../Assets/images/closeBTN01.svg';
import WalletICO01 from '../../Assets/images/walletICO-01.png';
// import WalletICO02 from "../../Assets/images/walletICO-02.png";
import WalletICO02 from '../../Assets/images/wallet-connect.svg';

import LoaderGif from '../../Assets/images/loading.gif';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { web3 } from '../../web3';
import { actions } from '../../actions';

function Login(props) {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState({ isError: false, msg: '' });
  const {
    web3Data,
    generateNonce,
    enableMetamask,
    authLogin,
    toggle,
    nonce,
    authData,
    enabledWalletConnect,
  } = props;

  useEffect(() => {
    if (web3Data.accounts[0]) {
      setLoader(true);
      if (web3Data.accounts[0] && !nonce) signatureRequest(undefined, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3Data.accounts[0]]);

  useEffect(() => {
    if (nonce && web3Data.accounts[0]) signatureRequest(nonce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nonce]);

  useEffect(() => {
    if (authData?.status === 401) {
      setLoader(false);
      setError({ isError: true, msg: authData.data.message });
    } else if (authData) {
      refreshStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData]);

  const connectToWallet = () => {
    setLoader(true);
    if (web3Data.accounts[0]) {
      checkAuthentication(web3Data);
    } else {
      if (typeof window.web3 !== 'undefined') {
        enableMetamask();
      } else {
        setLoader(false);
        setError({ isError: true, msg: 'Please download metamask first.!' });
      }
    }
  };

  const checkAuthentication = (web3Data) => {
    if (
      !localStorage.getItem('avangartAuthToken') ||
      web3Data.accounts[0] !== localStorage.getItem('userAddress')
    )
      signatureRequest(undefined, true);
  };

  const signatureRequest = async (nonce, stepOne) => {
    if (stepOne) {
      generateNonce(web3Data.accounts[0]);
    } else {
      try {
        if (!web3Data.isLoggedIn) {
          const chainId = web3.eth.net.getId().then((chainId) => {
            return chainId;
          });

          if (chainId !== 97) {
            // MetaMask injects the global API into window.ethereum
            try {
              // check if the chain to connect to is installed
              const changeRequest = await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
              });
              const signature = await web3.eth.personal.sign(
                web3.utils.utf8ToHex(nonce),
                web3Data.accounts[0]
              );
              authLogin(nonce, signature);
              refreshStates();
            } catch (error) {
              // console.log('error ')
              // This error code indicates that the chain has not been added to MetaMask
              // if it is not, then install it into the user MetaMask
              if (error.code === 4902) {
                try {
                  await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                      {
                        chainId: '0x61',
                        rpcUrl:
                          'https://data-seed-prebsc-1-s1.binance.org:8545/',
                      },
                    ],
                  });
                } catch (addError) {
                  // console.error(addError);
                }
              }

              if (error.code === 4001) {
                setLoader(false);
                setError({ isError: true, msg: error.message });
              }
              // console.error(error);
            }
          } else {
            const signature = await web3.eth.personal.sign(
              web3.utils.utf8ToHex(nonce),
              web3Data.accounts[0]
            );
            authLogin(nonce, signature);
            refreshStates();
          }
        }
      } catch (error) {
        setLoader(false);
        setError({ isError: true, msg: error.message });
      }
    }
  };

  const refreshStates = () => {
    localStorage.clear();
    setError({ isError: false, msg: '' });
    setLoader(false);
    toggle(4);
  };

  return (
    <>
      <BlackWrap>
        <WhiteBX01>
          <CloseBTN
            className='ani-1'
            onClick={() => {
              refreshStates();
            }}
          >
            <img src={CloseBTN01} alt='' />
          </CloseBTN>
          {!error.isError ? (
            !loader ? (
              <>
                <OnbTitle01>Connect your wallet</OnbTitle01>
                <OnbText01>
                  <FormattedMessage
                    id='connect_wallet'
                    defaultMessage='By connecting your wallet,
                      you agree to our {termLink} and our {privacyLink}.'
                    values={{
                      termLink: (
                        <NavLink to='/legal'>
                          <FormattedMessage
                            id='term_of_service'
                            defaultMessage='Term of Service'
                          />
                        </NavLink>
                      ),
                      privacyLink: (
                        <NavLink to='/legal'>
                          <FormattedMessage
                            id='privacy_policy'
                            defaultMessage='Privacy Policy'
                          />
                        </NavLink>
                      ),
                    }}
                  />
                </OnbText01>
                <OnBTNBar>
                  <button onClick={() => connectToWallet()}>
                    <i>
                      <img src={WalletICO01} alt='' />
                    </i>
                    MetaMask
                  </button>
                  <button onClick={() => props.enabledWalletConnect()}>
                    <i>
                      <img src={WalletICO02} alt='' />
                    </i>
                    WalletConnect
                  </button>
                </OnBTNBar>
              </>
            ) : (
              <>
                <OnbTitle01 className='v2'>
                  <FormattedMessage
                    id='follow_the_instructions'
                    defaultMessage='Please follow the instructions on your wallet'
                  />
                </OnbTitle01>
                <LoaderBX>
                  <img src={LoaderGif} alt='' />
                </LoaderBX>
              </>
            )
          ) : (
            <>
              <OnbTitle01 className='v2'>
                <FormattedMessage id='attention' defaultMessage='Attention.!' />
              </OnbTitle01>
              <OnbText01 className='text-center'>{error.msg}</OnbText01>
              {error.msg === 'Please download metamask first.!' ? (
                <InstallBtn
                  className='ani-1'
                  onClick={() => window.open('https://metamask.io/', '_blank')}
                >
                  Go to MetaMask's website
                </InstallBtn>
              ) : (
                ``
              )}
            </>
          )}
        </WhiteBX01>
      </BlackWrap>
    </>
  );
}

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
      display: flex;
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
  margin: 30px auto 0 auto;
`;

const OnbTitle01 = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin-bottom: 15px;
  letter-spacing: -1px;
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
  &.text-center {
    text-align: center;
    width: 100%;
    margin: 20px 0px 40px;
  }
  a {
    color: #d121d6;
  }
`;

const InstallBtn = styled.button`
  background-color: #000000;
  border: 1px solid #000;
  color: #fff;
  font-size: 16px;
  letter-spacing: -0.5px;
  font-weight: 700;
  border-radius: 15px;
  margin: 0 auto;
  padding: 17px 15px;
  width: 100%;
  :hover {
    background-color: #fff;
    color: #000;
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
  ${Media.xs} {
    padding: 50px 25px;
  }
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
  ${Media.xs} {
    right: 15px;
    top: 15px;
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getWeb3: () => dispatch(actions.getWeb3()),
    enableMetamask: () => dispatch(actions.enableMetamask()),
    enabledWalletConnect: () => dispatch(actions.enabledWalletConnect()),
    generateNonce: (address) => dispatch(actions.generateNonce(address)),
    authLogin: (nonce, signature) =>
      dispatch(actions.authLogin(nonce, signature)),
    authenticateUser: () => dispatch(actions.authenticateUser()),
    getUserDetails: () => dispatch(actions.getUserDetails()),
    authLogout: () => dispatch({ type: 'AUTH_LOGOUT', data: null }),
    web3Logout: () =>
      dispatch({
        type: 'FETCH_WEB3_DATA',
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
