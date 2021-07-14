import React, { Component } from "react";
import styled from "styled-components";
import CloseBTN02 from "../../Assets/images/icon-set-exit.svg";
import Media from "../../Theme/media-breackpoint";

function Magnifypopup({ toggle, imageURL }) {
  return (
    <>
      <WhiteWrap>
        <CloseBTND2 className="ani-1" onClick={() => toggle(6)}>
          <img src={CloseBTN02} alt="" />
        </CloseBTND2>
        <img src={imageURL} alt="" />
      </WhiteWrap>
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const WhiteWrap = styled(FlexDiv)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1011;
  backdrop-filter: blur(2px);
`;

const CloseBTND2 = styled(FlexDiv)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 10%);
  background-color: #fff;
  position: absolute;
  right: 30px;
  top: 30px;
  padding: 0;
  margin: 0px;
  cursor: pointer;
  z-index: 9;
  :hover img {
    transform: rotate(90deg);
  }
  ${Media.xs}{
    right: 15px;
    top: 15px;
  }
`;

export default Magnifypopup;
