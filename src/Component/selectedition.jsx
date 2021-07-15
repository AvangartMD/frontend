import React, { Component, useState } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { NavLink } from "react-router-dom";
import Media from "../Theme/media-breackpoint";
import Collapse from "@kunukn/react-collapse";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

import CloseBTN01 from "../Assets/images/closeBTN01.svg";
import FiltICON from "../Assets/images/filterICO.svg";
import UserIcon from "../Assets/images/userIcon.png";
import { web3 } from "../web3";
import { useEffect } from "react";

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

function SelectEdition(props) {
  const [editions, setEditions] = useState([]);
  const [filterPopup, setFilterPopup] = useState([]);
  const { NFTDetails, web3Data } = props;
  useEffect(() => {
    createEditionData();
  }, [NFTDetails, web3Data]);
  const createEditionData = () => {
    let editionsData = [];
    if (NFTDetails)
      for (let i = 0; i < NFTDetails.edition; i++) {
        const soldEdition = NFTDetails.editions.find(
          ({ edition }) => edition == i + 1
        );
        if (soldEdition) {
          editionsData.push({
            number: Number(soldEdition.edition),
            isOwner:
              web3Data.accounts[0] ===
              web3.utils.toChecksumAddress(soldEdition.walletAddress),
            ownerId: soldEdition.ownerId,
            isOpenForSale: soldEdition.isOpenForSale,
            saleState: "",
            price: web3.utils.fromWei(soldEdition.price.toString()),
          });
        } else {
          editionsData.push({
            number: i + 1,
            isOwner: NFTDetails?.ownerId.id == props.authData?.data?.id,
            ownerId: NFTDetails?.ownerId,
            isOpenForSale: true,
            saleState: "",
            price: NFTDetails.price,
          });
        }
      }
    setEditions(editionsData);
  };
  const toggle = (index) => {
    let tVal = filterPopup === index ? "" : index;
    setFilterPopup(tVal);
  };

  // render() {
  return (
    <>
      <BlackWrap>
        <WhiteBX0D2>
          <CloseBTN className="ani-1" onClick={() => props.toggle(10)}>
            <img src={CloseBTN01} alt="" />
          </CloseBTN>

          <Htitle>Select Edition</Htitle>

          <FilterMBX>
            <FilterLbx>
              <button className="active">All</button> <button>For Sale</button>
            </FilterLbx>
            <FilterBAR
              onClick={() => toggle(1)}
              // className={state.isOpen1 ? "active" : ""}
            >
              <FilterICO>
                <img src={FiltICON} alt="" />
              </FilterICO>
              Filter
              <Collapse
                isOpen={filterPopup === 1}
                className={
                  "app__collapse collapse-css-transition  " +
                  (filterPopup === 1 ? "collapse-active" : "")
                }
              >
                <DDContainer>
                  <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label htmlFor="vehicle1">All</label>
                  </div>
                  <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle2"
                      name="vehicle2"
                      defaultChecked
                      value="Bike"
                    />
                    <label htmlFor="vehicle2">Live auction</label>
                  </div>
                  <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle3"
                      name="vehicle3"
                      value="Bike"
                    />
                    <label htmlFor="vehicle3">Buy now</label>
                  </div>
                  <div className="md-checkbox">
                    <input
                      type="checkbox"
                      id="vehicle4"
                      name="vehicle4"
                      value="Bike"
                    />
                    <label htmlFor="vehicle4">Sold</label>
                  </div>
                </DDContainer>
              </Collapse>
            </FilterBAR>
          </FilterMBX>
          <CustomScrollbars
            autoHide
            autoHideTimeout={1000}
            style={{ width: "100%", height: "400px", position: "relative" }}
          >
            <EditionTable>
              <table>
                <thead>
                  <th>EDITION</th>
                  <th>OWNER</th>
                  <th className="text-center">PRICE</th>
                  <th></th>
                </thead>
                <tbody>
                  {editions.map((edition) => {
                    return (
                      <tr>
                        <td>{edition.number}</td>
                        <td>
                          <FlexDiv className="JCFS">
                            <div className="table-Img">
                              <img
                                src={
                                  edition.ownerId.profile
                                    ? edition.ownerId.profile
                                    : UserIcon
                                }
                                alt=""
                              />
                            </div>
                            @{edition.ownerId.name}
                          </FlexDiv>
                        </td>
                        <td className="text-center">{edition.price} BNB</td>
                        <td>
                          <CustomCheckbox1>
                            <label class="checkbox-container">
                              Select
                              <input
                                type="checkbox"
                                name="category"
                                value="art"
                                onClick={() => {
                                  props.setEditionnumber(edition.number);
                                  props.toggle(10);
                                }}
                              />
                              <span class="checkmark"></span>
                            </label>
                          </CustomCheckbox1>
                        </td>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td>02</td>
                    <td>
                      <FlexDiv className="JCFS">
                        <div className="table-Img">
                          <img src={UserIcon} alt="" />
                        </div>
                        @username
                      </FlexDiv>
                    </td>
                    <td className="text-center">0.00 BNB</td>
                    <td>
                      <CustomCheckbox1>
                        <label class="checkbox-container">
                          Select
                          <input type="checkbox" name="category" value="art" />
                          <span class="checkmark"></span>
                        </label>
                      </CustomCheckbox1>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>03</td>
                    <td>
                      <FlexDiv className="JCFS">
                        <div className="table-Img">
                          <img src={UserIcon} alt="" />
                        </div>
                        @username
                      </FlexDiv>
                    </td>
                    <td className="text-center">0.00 BNB</td>
                    <td>
                      <CustomCheckbox1>
                        <label class="checkbox-container">
                          Select
                          <input type="checkbox" name="category" value="art" />
                          <span class="checkmark"></span>
                        </label>
                      </CustomCheckbox1>
                    </td>
                  </tr>
                  <tr> */}
                  {/* <td>04</td>
                    <td>
                      <FlexDiv className="JCFS">
                        <div className="table-Img">
                          <img src={UserIcon} alt="" />
                        </div>
                        @username
                      </FlexDiv>
                    </td>
                    <td className="text-center">0.00 BNB</td>
                    <td>
                      <CustomCheckbox1>
                        <label class="checkbox-container">
                          Select
                          <input type="checkbox" name="category" value="art" />
                          <span class="checkmark"></span>
                        </label>
                      </CustomCheckbox1>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>05</td>
                    <td>
                      <FlexDiv className="JCFS">
                        <div className="table-Img">
                          <img src={UserIcon} alt="" />
                        </div>
                        @username
                      </FlexDiv>
                    </td>
                    <td className="text-center">0.00 BNB</td>
                    <td>
                      <CustomCheckbox1>
                        <label class="checkbox-container">
                          Select
                          <input type="checkbox" name="category" value="art" />
                          <span class="checkmark"></span>
                        </label>
                      </CustomCheckbox1>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>06</td>
                    <td>
                      <FlexDiv className="JCFS">
                        <div className="table-Img">
                          <img src={UserIcon} alt="" />
                        </div>
                        @username
                      </FlexDiv>
                    </td>
                    <td className="text-center">0.00 BNB</td>
                    <td>
                      <CustomCheckbox1>
                        <label class="checkbox-container">
                          Select
                          <input type="checkbox" name="category" value="art" />
                          <span class="checkmark"></span>
                        </label>
                      </CustomCheckbox1>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td>07</td>
                    <td>
                      <FlexDiv className="JCFS">
                        <div className="table-Img">
                          <img src={UserIcon} alt="" />
                        </div>
                        @username
                      </FlexDiv>
                    </td>
                    <td className="text-center">0.00 BNB</td>
                    <td>
                      <CustomCheckbox1>
                        <label class="checkbox-container">
                          Select
                          <input type="checkbox" name="category" value="art" />
                          <span class="checkmark"></span>
                        </label>
                      </CustomCheckbox1>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </EditionTable>
          </CustomScrollbars>
        </WhiteBX0D2>
      </BlackWrap>
    </>
  );
}

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
const WhiteBX0D2 = styled(FlexDiv)`
  width: 100%;
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  min-height: 491px;
  padding: 50px 50px 0px 50px;
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

const Htitle = styled.div`
  font-size: 22px;
  letter-spacing: -0.55px;
  color: #000;
  font-weight: 600;
  margin: 0px 0px 20px;
  width: 100%;
`;

const FilterLbx = styled(FlexDiv)`
  width: 45%;
  justify-content: flex-start;
  button {
    display: inline-block;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    border-radius: 15px;
    background-color: #eef2f7;
    margin-right: 8px;

    &.active {
      background-color: #00babc;
      color: #fff;
    }
    :hover {
      background-color: #00babc;
      color: #fff;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const FilterICO = styled(FlexDiv)`
  width: 21px;
  height: 21px;
  position: absolute;
  left: 11px;
  top: 9px;
`;
const FilterBAR = styled(FlexDiv)`
  width: 100%;
  max-width: 220px;
  justify-content: flex-start;
  position: relative;
  background-color: #eef2f7;
  border-radius: 15px;
  border: 0px;
  outline: none;
  height: 38px;
  padding: 3px 3px 3px 40px;
  font-size: 14px;
  color: #000000;
  cursor: pointer;
  border: 1px solid transparent;
  &.active,
  &:hover {
    background-color: #fff;
    border: 1px solid #00babc;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const DDContainer = styled(FlexDiv)`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  top: calc(100% + 7px);
  width: 100%;
  left: 0;
  overflow: hidden;
  z-index: 100;

  .md-checkbox:hover {
    background-color: #d9f5f5;
  }
`;

const FilterMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
`;
const EditionTable = styled.div`
  width: 100%;
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 25px;
    .text-center {
      text-align: center;
    }
    .text-right {
      text-align: right;
    }
    thead {
      padding-bottom: 30px;
      th {
        color: rgb(0 0 0 / 30%);
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        text-align: left;
      }
    }
    tbody {
      td {
        color: #000;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: -0.9px;
        .JCFS {
          justify-content: flex-start;
        }
        .table-Img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 10px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;

const CustomCheckbox1 = styled(FlexDiv)`
  justify-content: flex-end;
  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 10px;
    cursor: pointer;
    padding: 13px 32px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.9px;
    color: #000;
    img {
      margin-right: 5px;
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
    height: 44px;
    width: 100%;
    background-color: transparent;
    border-radius: 15px;
    border: 1px solid #000;
  }
  .checkbox-container input:checked ~ .checkmark {
    background-color: rgb(0 0 0 / 30%);
    border-color: rgb(0 0 0 / 30%);
  }
`;

export default SelectEdition;
