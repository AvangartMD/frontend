import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Gs from '../../Theme/globalStyles';
import { NavLink } from 'react-router-dom';
import Media from '../../Theme/media-breackpoint';
import Collapse from '@kunukn/react-collapse';
import { Link } from 'react-router-dom';

import CloseBTN01 from '../../Assets/images/closeBTN01.svg';
import { getContractInstance } from '../../helper/functions';
import { actions } from '../../actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { web3 } from '../../web3';
import TxnStatus from './txnStatus';

function PABpopup(props) {
  const {
    web3Data,
    edition,
    nonce,
    price,
    currentBidValue,
    toggle,
    method,
    currentEdition,
  } = props;
  const escrowContractInstance = getContractInstance(true);
  const [txnStatus, setTxnStatus] = useState('');
  const [bnbVal, setBnbVal] = useState('');
  const [usdVal, setUsdVal] = useState('');
  const [bnbUSDPrice, setBnbUSDPrice] = useState();
  const [accountBalance, setAccountBalance] = useState({ bnb: 0, usd: 0 });
  const [error, setError] = useState({ isError: false, msg: '' });

  useEffect(async () => {
    const string =
      'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd';
    await fetch(string)
      .then((resp) => resp.json())
      .then(async (data) => {
        setBnbUSDPrice(data.binancecoin.usd);
      });
  }, []);
  useEffect(async () => {
    if (web3Data.accounts[0] && bnbUSDPrice) {
      const bnbBalance = Number(
        web3.utils.fromWei(await web3.eth.getBalance(web3Data.accounts[0]))
      );
      setAccountBalance({
        bnb: bnbBalance,
        usd: bnbUSDPrice * bnbBalance,
      });
    }
  }, [web3Data.accounts[0], bnbUSDPrice]);

  const placeBid = async () => {
    // console.log("the val", bnbVal);
    const val = method === 'buyNow' ? price.toString() : bnbVal;
    const sendObj = { from: web3Data.accounts[0] };
    if (method != 'claimAfterAuction') {
      if (!val) return;
      sendObj.value = web3.utils.toWei(val, 'ether');
    }

    if (!error.isError) {
      setTxnStatus('initiate');
      await escrowContractInstance.methods[method](+nonce, currentEdition)
        .send(sendObj)
        .on('transactionHash', (hash) => {
          setTxnStatus('progress');
        })
        .on('receipt', (receipt) => {
          setTxnStatus('complete');
        })
        .on('error', (error) => {
          setTxnStatus('complete');
        });
    }
  };
  const onValEnter = (e, inUSD) => {
    const val = e.target.value;
    const _bnbVal = inUSD ? val / bnbUSDPrice : val;
    const _usdval = inUSD ? val : val * bnbUSDPrice;
    if (+_bnbVal <= currentBidValue)
      setError({
        isError: true,
        msg: "Input should be greater than NFT's current bid price ",
      });
    else if (+_bnbVal <= price)
      setError({
        isError: true,
        msg: "Input amount should be greater than NFT's price ",
      });
    else if (+_bnbVal > accountBalance.bnb)
      setError({
        isError: true,
        msg: 'Input amount exceeded account balance',
      });
    else
      setError({
        isError: false,
        msg: '',
      });

    setBnbVal(_bnbVal);
    setUsdVal(_usdval);
  };
  const refreshStates = () => {
    setBnbVal('');
    setUsdVal('');
    setTxnStatus('');
  };
  return (
    <>
      <BlackWrap>
        <WhiteBX01>
          <CloseBTN
            className='ani-1'
            onClick={() => {
              toggle(8);
              refreshStates();
            }}
          >
            <img src={CloseBTN01} alt='' />
          </CloseBTN>

          {/* place a bid and make an offer popup */}
          {!txnStatus ? (
            <>
              {method === 'placeBid' ? (
                <>
                  {' '}
                  <PBtitle>Place a Bid</PBtitle>
                  <PBDesc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    donec ut sapien faucibus.
                  </PBDesc>
                  <BalanceLine>
                    <p className='balance'>Your Balance :</p>
                    <p className='price-state'>
                      {accountBalance.bnb.toLocaleString(2)} BNB |{' '}
                      {accountBalance.usd.toLocaleString(2)} USD
                    </p>
                  </BalanceLine>
                  <HalfInputs className={error.isError ? 'errorinput' : null}>
                    <HIBox>
                      <input
                        className='BR-straight'
                        type='text'
                        placeholder='0.00'
                        value={bnbVal}
                        onChange={(e) => onValEnter(e)}
                      />
                      <p>BNB</p>
                    </HIBox>
                    <HIBox>
                      <input
                        className='BL-straight'
                        type='text'
                        placeholder='0.00'
                        value={usdVal}
                        onChange={(e) => onValEnter(e, true)}
                      />
                      <p>USD</p>
                    </HIBox>
                    {error.isError ? (
                      <p className='error'>{error.msg}</p>
                    ) : null}
                  </HalfInputs>
                  <PBbutton>
                    <button className='ani-1' onClick={() => placeBid()}>
                      Place
                    </button>
                  </PBbutton>
                </>
              ) : (
                <>
                  <PBtitle className='AStitle'>Confirm</PBtitle>
                  <PBDesc className='ASDesc mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut sapien faucibus, ornare arcu et, bibendum risus.
                    Nam ultricies urna sed lectus pulvinar, at iaculis ipsum
                    cursus.
                  </PBDesc>
                  {/* <SkyWalletAddress>{reciever}</SkyWalletAddress> */}
                  <NFTcartButtons>
                    <button
                      className='ani-1 bordered'
                      onClick={() => toggle(8)}
                    >
                      Cancel
                    </button>
                    <button className='ani-1' onClick={() => placeBid()}>
                      {method === 'buyNow' ? 'Buy' : 'Claim'}
                    </button>
                  </NFTcartButtons>
                </>
              )}
            </>
          ) : (
            <TxnStatus
              status={txnStatus}
              toggle={toggle}
              toggleIndex={8}
              refreshStates={refreshStates}
            />
          )}
        </WhiteBX01>
      </BlackWrap>
    </>
  );
}

const toggle = (index) => {
  let collapse = 'isOpen' + index;
  this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
};
// }

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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

const WhiteBX0D3 = styled(FlexDiv)`
  width: 100%;
  position: relative;
  max-width: 400px;
  margin: 0 15px;
  min-height: 418px;
  padding: 50px;
  background-color: #fff;
  border-radius: 30px;
  justify-content: flex-start;
  align-content: flex-start;
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

const PBtitle = styled.div`
  font-size: 24px;
  letter-spacing: -1px;
  color: #000;
  font-weight: 600;
  margin: 0px 0px 10px;
  width: 100%;
  &.AStitle {
    text-align: center;
    margin: 0px 0px 20px;
  }
  &.TN-title {
    margin: 0px 0px 20px;
  }
`;

const PBDesc = styled.div`
  font-size: 14px;
  letter-spacing: -0.55px;
  color: #000;
  margin: 0px 0px 30px;
  width: 100%;
  line-height: 18px;
  &.ASDesc {
    text-align: center;
    margin: 0px 0px 40px;
  }
  &.mb-20 {
    margin: 0px 0px 20px;
  }
  &.mb-10 {
    margin: 0px 0px 10px;
  }
`;

const BalanceLine = styled(FlexDiv)`
  justify-content: space-between;
  margin: 0px 0px 6px;
  width: 100%;
  .balance {
    font-size: 12px;
    color: #8e9194;
    margin: 0px;
    font-weight: 600;
  }
  .price-state {
    font-size: 16px;
    letter-spacing: -0.8px;
    color: #000;
    margin: 0px;
    font-weight: 300;
  }
`;

const HalfInputs = styled(FlexDiv)`
  justify-content: flex-start;

  &.errorinput {
    input {
      border-color: #ff2a44;
      &.BR-straight {
        border-right-color: #ddd;
      }
    }
    .error {
      font-size: 12px;
      color: #ff2a44;
      margin: 8px 0px 0px;
      letter-spacing: -0.6px;
    }
  }
`;

const HIBox = styled(FlexDiv)`
  width: 50%;
  position: relative;
  input {
    border: 1px solid #dddddd;
    width: 100%;
    height: 54px;
    border-radius: 10px;
    padding: 0px 40px 0px 15px;
    font-size: 24px;
    letter-spacing: -1.2px;
    color: #000;
    font-weight: 600;
    ::placeholder {
      color: #000;
    }
    &.BR-straight {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    &.BL-straight {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-left: 0px;
    }
  }
  p {
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
    font-weight: 600;
    color: #000;
    margin: 0px;
    line-height: 13px;
  }
`;

const PBbutton = styled.div`
  margin: 40px auto 0px;
  button {
    background-color: rgb(0 0 0 / 30%);
    padding: 14px 78px;
    color: #fff;
    font-size: 14px;
    border-radius: 15px;
    &.colorful {
      background: linear-gradient(90deg, #d121d6, #febf11);
    }
    :hover {
      background: linear-gradient(90deg, #d121d6, #febf11);
    }
  }
`;

const NFTcartButtons = styled.div`
  margin: 0 auto;
  button {
    background-color: #000;
    color: #fff;
    width: 140px;
    height: 44px;
    border-radius: 15px;
    font-size: 14px;
    letter-spacing: -0.5px;
    margin: 0px 5px 5px;
    :hover {
      background-image: linear-gradient(90deg, #d121d6, #febf11);
      box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 20%);
    }
    &:disabled {
      background-color: rgb(0 0 0 / 30%);
      :hover {
        background: rgb(0 0 0 / 30%);
        box-shadow: none;
      }
    }
    &.bordered {
      background-color: transparent;
      border: 1px solid #000;
      color: #000;
      :hover {
        background: none;
      }
      &.bor-large {
        padding: 12px 85px;
        width: auto;
      }
    }
    &.bor-large {
      padding: 12px 70px;
      width: auto;
    }
  }
  ${WhiteBX0D3} & {
    position: absolute;
    bottom: 50px;
    left: 0px;
    width: 100%;
    text-align: center;
  }
`;

const NFTForm = styled.div`
  position: relative;
  width: 100%;
  &.Custom-piece {
    .label-line {
      label {
        font-size: 16px;
        color: #000;
        font-weight: 500;
      }
    }
  }
  .label-line {
    margin: 0px 0px 6px;
    label {
      font-size: 12px;
      color: #8e9194;
      letter-spacing: -0.2px;
    }
  }
  input {
    width: 100%;
    height: 54px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 16px;
    color: #000000;
    letter-spacing: -0.9px;
    margin: 0px 0px 40px;
    ::placeholder {
      color: #000;
      opacity: 20%;
    }
  }
  .errorinput {
    position: relative;
    input {
      border-color: #ff2a44;
    }
    p.error {
      color: #ff2a44;
      font-size: 12px;
      letter-spacing: -0.6px;
      font-weight: 600;
      margin: 0px;
      position: absolute;
      top: 18px;
      right: 15px;
    }
  }
`;

const SkyWalletAddress = styled.div`
  background-color: #eef2f7;
  padding: 10px 47px;
  border-radius: 15px;
  font-size: 14px;
  letter-spacing: -0.8px;
  font-weight: 600;
  color: #000;
  margin: 0 auto 40px;
  width: auto;
`;

const mapDipatchToProps = (dispatch) => {
  return {
    likeToggler: (id) => dispatch(actions.likeToggler(id)),
    getSingleNFTDetails: (id) => dispatch(actions.getSingleNFTDetails(id)),
    getLikesCount: (id) => dispatch(actions.getLikesCount(id)),
    getIsLiked: (id) => dispatch(actions.getIsLiked(id)),
  };
};
const mapStateToProps = (state) => {
  return {
    web3Data: state.fetchWeb3Data,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(PABpopup);
