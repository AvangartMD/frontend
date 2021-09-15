import React, { Component, useState } from "react";
import styled from "styled-components";
import CloseBTN02 from "../../Assets/images/icon-set-exit.svg";
import Media from "../../Theme/media-breackpoint";
import { Scrollbars } from "react-custom-scrollbars";

function CustomScrollbars(props) {
  return (
    <Scrollbars
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => <div {...props} className="view" />}
      autoHide
      style={props.style}
    >
      {props.children}
    </Scrollbars>
  );
}

function Magnifypopup({ toggle, imageURL }) {
  const [hrClass, sethrClass] = useState("");
  return (
    <>
      <WhiteWrap>
        <CloseBTND2 className="ani-1" onClick={() => toggle(6)}>
          <img src={CloseBTN02} alt="" />
        </CloseBTND2>
        <div className={`vs-box  ${hrClass}`}>
          <CustomScrollbars
            autoHide
            autoHideTimeout={1000}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <img
              src={imageURL}
              alt=""
              onLoad={(image) => {
                if (image.target.width >= image.target.height) {
                  console.log("this", image.target);
                  sethrClass("hr-box");
                } else {
                  console.log("this", image.target.width, image.target.height);
                }
              }}
            />
          </CustomScrollbars>
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
      .view {
        align-items: center;
      }
    }
    .view {
      display: flex;
      // align-items:center;
      justify-content: center;
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
