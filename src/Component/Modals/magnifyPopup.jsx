import React, { Component, useState } from "react";
import styled from "styled-components";
import CloseBTN02 from "../../Assets/images/icon-set-exit.svg";
import Media from "../../Theme/media-breackpoint";

function Magnifypopup({ toggle, imageURL }) {
  const [hrClass, sethrClass] = useState("");
  return (
    <>
      <WhiteWrap>
        <CloseBTND2 className="ani-1" onClick={() => toggle(6)}>
          <img src={CloseBTN02} alt="" />
        </CloseBTND2>
        <div className={`vs-box  ${hrClass}`}>
          <img
            src={imageURL}
            alt=""
            onLoad={(image) => {
              if (image.target.width > image.target.height) {
                sethrClass("hr-box");
              }
              //  else if (image.target.height > image.target.width) {
              //   this.setState({ imageClass: "vertical-tnimg" });
              // }
            }}
          />
        </div>
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
  .vs-box {
    height: min(100vw - 50px, 100vh - 50px);
    width: min(100vw - 50px, 100vh - 50px);
    max-height: calc(100vh - 32px);
    max-width: calc(100% - 32px);
    display: flex;
    align-items: center;
    justify-content: center;
    &.hr-box {
      width: min(100vw - 50px);
    }
  }
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
  ${Media.xs} {
    right: 15px;
    top: 15px;
  }
`;

export default Magnifypopup;
