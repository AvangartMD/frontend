import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { actions } from "../../actions";
import CloseBTN01 from "../../Assets/images/closeBTN01.svg";
import { services } from "../../services";
import { connect } from "react-redux";
import { useEffect } from "react";
import Media from "./../../Theme/media-breackpoint";

import Sport from "../../Assets/images/icon-set-sport.svg";
import Celebrity from "../../Assets/images/icon-set-celebrity.svg";

function CreateCollection(props) {
  const [collectionAdded, setCollectionAdded] = useState(false);
  const msg1 = {
    0: "Collection Added!",
    1: "You can select your newly created collection.",
  };
  const [msg, setMsg] = useState(msg1);

  // const msg2 ={0:"Addition Failed!", 1:}
  useEffect(() => {
    if (props.newCollection && props.newCollection.status) {
      props.getCollectionList();
      setCollectionAdded(true);
      setMsg(msg1);
    } else if (props.newCollection && !props.newCollection.status) {
      setCollectionAdded(true);
      setMsg({ 0: "Addition Failed!", 1: props.newCollection.message });
    } else {
      setCollectionAdded(false);
    }
  }, [props.newCollection]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const logoLink = await services.uploadFileOnBucket(
      e.target.file.files[0],
      "collctionLogos"
    );
    const obj = {
      name: e.target.name.value,
      description: e.target.description.value,
      logo: logoLink,
    };
    if (obj.name) props.createCollection(obj);
  };
  return (
    <>
      <BlackWrap>
        {collectionAdded ? (
          <>
            <WhiteBX01>
              {" "}
              <WGTitle>{msg[0]}</WGTitle>
              <WGdescText>{msg[1]}</WGdescText>
              {/* <WGdescText>
              Cras sit amet augue consectetur, sodales quam a, congue lacus.
            </WGdescText> */}
              <WGBtn
                onClick={() => {
                  // setCollectionAdded(false);
                  props.toggle(2);
                }}
              >
                OK
              </WGBtn>
            </WhiteBX01>
          </>
        ) : (
          <WhiteBX01>
            <form onSubmit={(e) => onFormSubmit(e)}>
              <>

                <CloseBTN className="ani-1" onClick={() => props.toggle(2)}>
                  <img src={CloseBTN01} alt="" />
                </CloseBTN>
                <CCTitle>Create Collection</CCTitle>

                <NFTForm>
                  <div className="label-line">
                    <label>Collection Name</label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type something…"
                  />
                </NFTForm>
                <NFTForm>
                  <div className="label-line">
                    <label>About Collection</label>
                  </div>
                  <textarea name="description" defaultValue="Type something…"></textarea>
                </NFTForm>
                <NFTForm>
                  <div className="label-line">
                    <label>Category</label>
                    <p>
                      Choose category for listing your NFT. You can choose
                      up to 2.
                    </p>
                  </div>
                  <CustomCheckbox1>
                    <label className="checkbox-container">
                      <img src={Celebrity} alt="" />
                      Celebrity
                      <input
                        type="checkbox"
                        name="category"
                        value="celebrity"
                      />
                      <span className="checkmark"></span>
                    </label>
                    <label className="checkbox-container">
                      <img src={Sport} alt="" />
                      Sport
                      <input
                        type="checkbox"
                        name="category"
                        value="sport"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </CustomCheckbox1>
                </NFTForm>
                <NFTForm>
                  <div className="label-line">
                    <label>Collection Cover Image</label>
                    <FlexDiv className="JCSB">
                      <p>Upload PNG, GIF, WEBP</p>
                      <p>
                        <b>Max 30 mb.</b>
                      </p>
                    </FlexDiv>
                  </div>
                  <FileuploadBox>
                    <label className="custom-file-upload">
                      <input type="file" name="file" />
                      Choose
                    </label>
                    <input type="file" placeholder="Choose" />
                  </FileuploadBox>
                </NFTForm>
                <CreateItemButton>
                  <button type="submit">Create Item</button>
                </CreateItemButton>

              </>
            </form>
          </WhiteBX01>
        )}
      </BlackWrap>
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .JCSB {
    justify-content: space-between;
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
  ${Media.xs}{
    padding:50px 25px;
  }
  form{
    width:100%;
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
  ${Media.xs}{
    right: 15px;
    top: 15px;
  }
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
  width:100%;
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

const FTTitle = styled.div`
  color: #000000;
  font-size: 24px;
  letter-spacing: -1px;
  margin-bottom: 25px;
  font-weight: 700;
`;

const TokenBox = styled(FlexDiv)`
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  button {
    color: #000000;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.5px;
    padding: 13px 35px;
    border-radius: 15px;
    border: 1px solid #000000;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
const TokenLeft = styled.div`
  p {
    color: #000000;
    font-size: 16px;
    letter-spacing: -0.8px;
    font-weight: 600;
    margin: 0px;
    &.small {
      color: rgb(0 0 0 / 23%);
      margin: 0px;
      font-size: 12px;
      letter-spacing: -0.6px;
    }
  }
`;

const CCTitle = styled.div`
  color: #000000;
  font-size: 24px;
  letter-spacing: -1px;
  margin-bottom: 25px;
  font-weight: 700;
`;

const NFTForm = styled.div`
  position: relative;
  width: 100%;
  .label-line {
    margin: 0px 0px 6px;
    label {
      font-size: 12px;
      color: #8e9194;
      letter-spacing: -0.6px;
      font-weight: 600;
    }
    span {
      color: #8e9194;
      font-size: 12px;
      letter-spacing: -0.6px;
      margin-left: 6px;
    }
    p {
      color: #8e9194;
      font-size: 10px;
      letter-spacing: -0.7px;
      font-weight: light;
      margin: 0px;
    }
  }
  input {
    width: 100%;
    height: 54px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.8px;
    margin: 0px 0px 20px;
    ::placeholder {
      color: #000;
      opacity: 20%;
    }
  }
  textarea {
    width: 100%;
    min-height: 82px;
    line-height: 24px;
    resize: none;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.8px;
    margin: 0px 0px 20px;
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

const FileuploadBox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin: 0px 0px 30px;
  input {
    display: none;
  }
  .custom-file-upload {
    border: 1px solid #000000;
    border-radius: 15px;
    font-size: 14px;
    color: #000;
    letter-spacing: -0.5px;
    padding: 13px 28px;
    cursor: pointer;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const CreateItemButton = styled.div`
  margin: 0px;
  width: 100%;
  text-align: center;
  button {
    font-size: 14px;
    color: #fff;
    letter-spacing: -0.5px;
    padding: 13px 60px;
    cursor: pointer;
    border-radius: 15px;
    background-color: rgb(0 0 0 / 30%);
    :hover {
      background-color: #000;
    }
  }
`;

const CustomCheckbox1 = styled(FlexDiv)`
  justify-content: flex-start;
  margin-bottom: 30px;
  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 54px;
    width: calc(130px - 5px);
    margin-right: 10px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: -0.9px;
    color: #000;
    img {
      margin-right: 5px;
      width:25px;
    }
    ${Media.lg} {
      width: calc(130px - 5px);
      margin: 0px 10px 10px 0px;
    }
    ${Media.sm} {
      width: 100%;
      margin-right:0px;
    }
  }
  .checkbox-container input {
    position: absolute;
    left: 0;
    opacity: 0;
    cursor: pointer;
    margin: 0px;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 54px;
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #dddddd;
  }
  .checkbox-container input:checked ~ .checkmark {
    border: 1px solid #00babc;
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    createCollection: (obj) => dispatch(actions.createCollection(obj)),
    getCollectionList: () => dispatch(actions.getCollectionList()),
  };
};
const mapStateToProps = (state) => {
  return {
    newCollection: state.fetchNewCollection,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(CreateCollection);
