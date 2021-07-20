import React, { Component, useState } from 'react';
import styled from 'styled-components';

import CloseBTN01 from '../../Assets/images/closeBTN01.svg';
import { getContractInstance } from '../../helper/functions';
import { actions } from '../../actions';
import { connect } from 'react-redux';
import TxnStatus from './txnStatus';
import Media from './../../Theme/media-breackpoint';
import getContractAddresses from '../../contractData/contractAddress/addresses';

function NftOwnerActions(props) {
  const {
    web3Data,
    toggle,
    ownerActionName,
    edition,
    tokenID,
    isApprovedForAll,
    changeOwnerActionName,
  } = props;
  const succesMsg = {
    burnTokenEdition: 'Burn Succesfull',
    transfer: 'Transfer Succesfull',
  };
  const escrowContractInstance = getContractInstance(true);
  const nftContractContractInstance = getContractInstance();

  const [reciever, setReciever] = useState('');
  const [mintNFTStatus, setNFTStatus] = useState('');
  const [approved, setApproved] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleAction = async (forApproval) => {
    const { escrowContractAddres } = getContractAddresses();
    // let params = [+tokenID, +edition];
    // if (reciever){
    //   params = [web3Data.accounts[0], reciever, +tokenID, +edition, "0111001"];
    // }
    let params;
    if (ownerActionName === 'burnTokenEdition') params = [+tokenID, +edition];
    else if (ownerActionName === 'transfer')
      params = [web3Data.accounts[0], reciever, +tokenID, +edition, '0111001'];
    else if (ownerActionName === 'setApprovalForAll')
      params = [escrowContractAddres, true];
    else return;
    let contractInstance = !isApprovedForAll
      ? nftContractContractInstance
      : escrowContractInstance;
    setNFTStatus('initiate');
    // console.log(params);
    await contractInstance.methods[ownerActionName](...params)
      .send({
        from: web3Data.accounts[0],
      })
      .on('transactionHash', (hash) => {
        setNFTStatus('progress');
      })
      .on('receipt', (receipt) => {
        if (forApproval) {
          setApproved(true);
          setNFTStatus('');
        } else setNFTStatus('complete');
      })
      .on('error', (error) => {
        setNFTStatus('error');
      });
  };
  const refreshStates = () => {
    setNFTStatus('');
    setReciever('');
    setConfirm(false);
  };
  return (
    <>
      <BlackWrap>
        <WhiteBX01>
          <CloseBTN
            className='ani-1'
            onClick={() => {
              toggle(1);
              refreshStates();
            }}
          >
            <img src={CloseBTN01} alt='' />
          </CloseBTN>

          {!mintNFTStatus ? (
            <>
              {ownerActionName === 'burnTokenEdition' && (
                <>
                  <PBtitle className='AStitle'>Are you sure?</PBtitle>
                  <PBDesc className='ASDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut sapien faucibus, ornare arcu et, bibendum risus.
                    Nam ultricies urna sed lectus pulvinar, at iaculis ipsum
                    cursus.
                  </PBDesc>
                  <NFTcartButtons>
                    <button className='ani-1 bordered'>Cancel</button>
                    <button className='ani-1' onClick={() => handleAction()}>
                      Burn
                    </button>
                  </NFTcartButtons>

                  {/* <PBtitle className="AStitle">Burned</PBtitle>
                  <PBDesc className="ASDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut sapien faucibus, ornare arcu et, bibendum risus.
                    Nam ultricies urna sed lectus pulvinar, at iaculis ipsum
                    cursus.
                  </PBDesc>
                  <NFTcartButtons>
                    <button className="ani-1 bordered bor-large">OK</button>
                  </NFTcartButtons> */}
                </>
              )}
              {
                // {/* Transfer NFT popup */}
                ownerActionName === 'transfer' && !confirm && (
                  <>
                    <PBtitle className='TN-title'>Transfer NFT</PBtitle>
                    <PBDesc className='mb-20'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec ut sapien faucibus, ornare arcu et, bibendum risus.
                      Nam ultricies urna sed lectus pulvinar, at iaculis ipsum
                      cursus.
                    </PBDesc>
                    <NFTForm>
                      <div className='label-line'>
                        <label>Wallet Address</label>
                      </div>
                      <input
                        type='text'
                        placeholder='Add Wallet Address'
                        onChange={(e) => setReciever(e.target.value)}
                      />
                    </NFTForm>
                    <NFTcartButtons>
                      <button
                        className='ani-1 bor-large'
                        onClick={() => setConfirm(true)}
                      >
                        Transfer
                      </button>
                    </NFTcartButtons>
                  </>
                )
              }
              {
                // {/* Transfer NFT popup */}
                ownerActionName === 'setApprovalForAll' && !approved && (
                  <>
                    <PBtitle className='TN-title'> Approve Transfer</PBtitle>
                    <PBDesc className='mb-20'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec ut sapien faucibus, ornare arcu et, bibendum risus.
                      Nam ultricies urna sed lectus pulvinar, at iaculis ipsum
                      cursus.
                    </PBDesc>

                    <NFTcartButtons>
                      <button
                        className='ani-1 bor-large'
                        onClick={() => handleAction(true)}
                      >
                        Approve
                      </button>
                    </NFTcartButtons>
                  </>
                )
              }
              {approved && (
                <>
                  <WGTitle>Approved !!</WGTitle>
                  <WGdescText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam nunc nulla, sollicitudin ac dignissim vitae, dapibus
                    at enim.
                  </WGdescText>
                  <WGdescText>
                    Cras sit amet augue consectetur, sodales quam a, congue
                    lacus.
                  </WGdescText>
                  <WGBtn
                    onClick={() => {
                      setApproved(false);
                      changeOwnerActionName('transfer');
                    }}
                  >
                    Go to transfer
                  </WGBtn>
                </>
              )}
              {confirm && (
                <>
                  <PBtitle className='AStitle'>Confirm</PBtitle>
                  <PBDesc className='ASDesc mb-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ut sapien faucibus, ornare arcu et, bibendum risus.
                    Nam ultricies urna sed lectus pulvinar, at iaculis ipsum
                    cursus.
                  </PBDesc>
                  <SkyWalletAddress>{reciever}</SkyWalletAddress>
                  <NFTcartButtons>
                    <button
                      className='ani-1 bordered'
                      onClick={() => toggle(1)}
                    >
                      Cancel
                    </button>
                    <button className='ani-1' onClick={() => handleAction()}>
                      Transfer
                    </button>
                  </NFTcartButtons>
                </>
              )}
            </>
          ) : (
            <TxnStatus
              status={mintNFTStatus}
              msg={succesMsg[ownerActionName]}
              toggleIndex={1}
              toggle={toggle}
              refreshStates={refreshStates}
            />
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
  padding: 10px;
  border-radius: 15px;
  font-size: 13px;
  letter-spacing: -0.8px;
  font-weight: 600;
  color: #000;
  margin: 0 auto 40px;
  width: auto;
`;
const WGTitle = styled.div`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
`;
const WGdescText = styled.div`
  color: #000000;
  font-size: 14px;
  letter-spacing: -0.7px;
  margin-bottom: 10px;
  text-align: center;
`;

const WGBtn = styled.button`
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.7px;
  padding: 13px 86px;
  border-radius: 15px;
  border: 1px solid #000000;
  margin: 30px auto 0px;
  :hover {
    background-color: #000;
    color: #fff;
  }
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

export default connect(mapStateToProps, mapDipatchToProps)(NftOwnerActions);
