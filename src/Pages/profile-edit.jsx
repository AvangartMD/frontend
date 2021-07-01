import React, { Component } from "react";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { connect } from "react-redux";
import Collapse from "@kunukn/react-collapse";
import { HashLink as Link } from "react-router-hash-link";
import { withRouter } from "react-router";
import Sticky from "react-sticky-el";
import NFTModal from "../Component/nftpopups";

import DDdownA from "../Assets/images/dd-down-arrow.svg";
import CICON01 from "../Assets/images/peSocICO-01.svg";
import CICON02 from "../Assets/images/peSocICO-02.svg";
import CICON03 from "../Assets/images/peSocICO-03.svg";
import CICON04 from "../Assets/images/peSocICO-04.svg";
import CICON05 from "../Assets/images/peSocICO-05.svg";
import CICON06 from "../Assets/images/peSocICO-06.svg";

import { actions } from "../actions";

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
  }

  async componentDidMount() {
    const { profile } = this.props;
    if (!profile) {
      this.props.getProfile(); // fetch profile
    }
  }

  formchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { profile } = this.props;
    function pointSelect(curr) {
      let hash = window.location.hash.substr(1);
      if (hash == curr) return "active";
      else return "inactive";
    }
    return (
      <Gs.MainSection>
        <div style={{ minHeight: "100vh", width: "100%" }}>
          <Gs.Container>
            <NFTminting>
              <Gs.W200px>
                <Sticky>
                  <NFTLeft>
                    <Link
                      className={pointSelect("accountSettings")}
                      to="#accountSettings"
                      smooth={true}
                    >
                      Account Settings
                    </Link>
                    <Link
                      className={pointSelect("biography")}
                      to="#biography"
                      smooth={true}
                    >
                      Biography
                    </Link>
                    <Link
                      className={pointSelect("verifyProfile")}
                      to="#verifyProfile"
                      smooth={true}
                    >
                      Verify Profile
                    </Link>
                    <Link
                      className={pointSelect("socialLink")}
                      to="#socialLink"
                      smooth={true}
                    >
                      Social Links
                    </Link>
                  </NFTLeft>

                  <BackBTN01
                    onClick={() => this.props.history.push("/profile")}
                  >
                    Back to Profile
                  </BackBTN01>
                </Sticky>
              </Gs.W200px>
              <Gs.W880px className="displayflex">
                <Gs.W605px>
                  <NFTMiddle>
                    <NFTtitle id="accountSettings">
                      <h4>Account Settings</h4>
                      <p className="mb-30">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </NFTtitle>
                    <form
                      onChange={(e) => this.formchange(e)}
                      // onSubmit={(e) => this.createNFT(e)}
                    >
                      <NFTForm>
                        <div className="label-line">
                          <label>Name</label>
                        </div>
                        <input
                          type="text"
                          required
                          name="name"
                          defaultValue={profile ? profile.name : ""}
                          placeholder="Type something…"
                        />
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Username</label>
                        </div>
                        <div className="iLeft">
                          <i>@</i>
                          <input
                            type="text"
                            required
                            name="username"
                            placeholder="Type something…"
                            defaultValue={profile ? profile.username : ""}
                          />
                        </div>
                        {/* <div className="iLeft errorinput">
                                                    <i>@</i>
                                                    <input
                                                        type="text"
                                                        name="description"
                                                        placeholder="Type something…"
                                                        defaultValue={profile?profile.username:''}
                                                    />
                                                    <p className="error">it’s taken</p>
                                                </div>  */}
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Email</label>
                          <FlexDiv className="JCSB">
                            <p>
                              Phasellus at dui imperdiet, eleifend lacus
                              gravida, accumsan arcu.{" "}
                            </p>
                          </FlexDiv>
                        </div>
                        <input
                          type="text"
                          name="email"
                          required
                          placeholder="Type something…"
                          defaultValue={profile ? profile.email : ""}
                        />
                      </NFTForm>
                      <NFTtitle id="biography">
                        <h4 className="mt-30">Biography</h4>
                        <p className="mb-30">
                          Write a little bit about yourself
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <textarea
                          type="textarea"
                          name="bio"
                          placeholder="0"
                          value={profile ? profile.bio : ""}
                        >
                          {" "}
                        </textarea>
                      </NFTForm>
                      <NFTtitle id="verifyProfile">
                        <h4 className="mt-30">Verify Profile</h4>
                        <p className="mb-30">
                          Show us how authentic your profile
                        </p>
                      </NFTtitle>
                      <NFTForm>
                        <CustomCheckbox1>
                          <label class="checkbox-container">
                            {" "}
                            <img src={CICON01} alt="" />
                            Verify via Twitter
                            <button
                              type="checkbox"
                              name="category"
                              value="aa"
                            />
                            <span class="checkmark v2"></span>
                          </label>
                          <label class="checkbox-container">
                            {" "}
                            <img src={CICON02} alt="" />
                            Verify via Instagram
                            <button
                              type="checkbox"
                              name="category"
                              value="celebrity"
                            />
                            <span class="checkmark v2"></span>
                          </label>
                        </CustomCheckbox1>
                      </NFTForm>
                      <NFTtitle id="socialLink">
                        <h4 className="mt-30">Social Links</h4>
                        <p className="mb-30">
                          Add your social media links for people who want you
                          know more
                        </p>
                      </NFTtitle>

                      <NFTForm>
                        <div className="label-line">
                          <label>Website</label>
                        </div>
                        <div className="iLeft">
                          <i>
                            <img src={CICON03} alt="" />
                          </i>
                          <input
                            type="text"
                            name="website"
                            placeholder="Type something…"
                            defaultValue={
                              profile ? profile.portfolio.website.username : ""
                            }
                          />
                        </div>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Instagram</label>
                        </div>
                        <div className="iLeft">
                          <i>
                            <img src={CICON02} alt="" />
                          </i>
                          <input
                            type="text"
                            name="instagarm"
                            placeholder="Type something…"
                            defaultValue={
                              profile
                                ? profile.portfolio.instagarm.username
                                : ""
                            }
                          />
                        </div>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Discord</label>
                        </div>
                        <div className="iLeft">
                          <i>
                            <img src={CICON04} alt="" />
                          </i>
                          <input
                            type="text"
                            name="discord"
                            placeholder="Type something…"
                            defaultValue={
                              profile ? profile.portfolio.discord.username : ""
                            }
                          />
                        </div>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Youtube</label>
                        </div>
                        <div className="iLeft">
                          <i>
                            <img src={CICON05} alt="" />
                          </i>
                          <input
                            type="text"
                            name="youtube"
                            placeholder="Type something…"
                            defaultValue={
                              profile ? profile.portfolio.youtube.username : ""
                            }
                          />
                        </div>
                      </NFTForm>
                      <NFTForm>
                        <div className="label-line">
                          <label>Facebook</label>
                        </div>
                        <div className="iLeft">
                          <i>
                            <img src={CICON06} alt="" />
                          </i>
                          <input
                            type="text"
                            name="facebook"
                            placeholder="Type something…"
                            defaultValue={
                              profile ? profile.portfolio.facebook.username : ""
                            }
                          />
                        </div>
                      </NFTForm>
                      <CreateItemButton>
                        <button type="submit">Create Item</button>
                      </CreateItemButton>
                    </form>
                  </NFTMiddle>
                </Gs.W605px>
              </Gs.W880px>
            </NFTminting>
          </Gs.Container>
        </div>
        <Collapse
          isOpen={this.state.isOpen4}
          className={
            "app__collapse " + (this.state.isOpen4 ? "collapse-active" : "")
          }
        >
          <NFTModal toggle={this.toggle} />
        </Collapse>
      </Gs.MainSection>
    );
  }
  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}
// const mintNFT=async()=> {
//   const { web3Data, nftContractInstance, newNFTURI } = this.state;
//   // uint256 _editions, (no of Editions)
//   //     string memory _tokenURI, (NFT image code)
//   //     address _creator,
//   //     address _coCreator,
//   //     uint256 _creatorPercent,
//   //     uint256 _coCreatorPercent,
//   //     Type _saleType, (0 for Buy now and 1 for Auction)
//   //     uint256 _timeline, (0 for Buy now and end time in unix timestamp for Auction)
//   //     uint256 _pricePerNFT, (price for each edition of the NFT)
//   //     uint256 _adminPlatformFee (if admin is the minter then he can pass the fee, else 0)
//   await nftContractInstance.methods
//     .mintToken(newNFTURI)
//     .send({ from: web3Data.accounts[0] })
//     .on("transactionHash", (hash) => {
//       // this.onTransactionHash(hash);
//       console.log(hash);
//     })
//     .on("receipt", (receipt) => {
//       this.onReciept();
//     })
//     .on("error", (error) => {
//       this.onTransactionError(error);
//     });
// }

// render() {
//   function pointSelect(curr) {
//     let hash = window.location.hash.substr(1);
//     if (hash == curr) return "active";
//     else return "inactive";
//   }
//   const nftObj = this.state.nftObj;
//   console.log(this.state.nftObj);
//   return (
//     <Gs.MainSection>
//       <div style={{ minHeight: "100vh", width: "100%" }}>
//         <Gs.Container>
//           <NFTminting>
//             <Gs.W200px>
//               <Sticky>
//                 <NFTLeft>
//                   <Link className={pointSelect("accountSettings")} to="profile-edit#accountSettings" smooth={true} >
//                     Account Settings
//                   </Link>
//                   <Link className={pointSelect("biography")} to="profile-edit#biography" smooth={true} >
//                     Biography
//                   </Link>
//                   <Link className={pointSelect("verifyProfile")} to="profile-edit#verifyProfile" smooth={true} >
//                     Verify Profile
//                   </Link>
//                   <Link className={pointSelect("socialLink")} to="profile-edit#socialLink" smooth={true} >
//                     Social Links
//                   </Link>
//                 </NFTLeft>

//                 <BackBTN01>Back to Profile</BackBTN01>

//               </Sticky>
//             </Gs.W200px>
//             <Gs.W880px className="displayflex">
//               <Gs.W605px>
//                 <NFTMiddle>
//                   <NFTtitle id="accountSettings">
//                     <h4>Account Settings</h4>
//                     <p className="mb-30">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     </p>
//                   </NFTtitle>
//                   <form
//                     onChange={(e) => this.formchange(e)}
//                     onSubmit={(e) => this.createNFT(e)}
//                   >
//                     <NFTForm>
//                       <div className="label-line">
//                         <label>Name</label>
//                       </div>
//                       <input
//                         type="text"
//                         name="title" defaultValue="John Doe"
//                         placeholder="Type something…"
//                       />
//                     </NFTForm>
//                     <NFTForm>
//                       <div className="label-line">
//                         <label>Username</label>
//                       </div>
//                       <div className="iLeft errorinput">
//                         <i>@</i>
//                         <input
//                           type="text"
//                           name="description"
//                           placeholder="Type something…"
//                           defaultValue="johndoe"
//                         />
//                         <p className="error">it’s taken</p>
//                       </div>
//                     </NFTForm>
//                     <NFTForm>

//                       <div className="label-line">
//                         <label>Email</label>
//                         <FlexDiv className="JCSB">
//                           <p>Phasellus at dui imperdiet, eleifend lacus gravida, accumsan arcu. </p>
//                         </FlexDiv>
//                       </div>
//                       <input
//                         type="text"
//                         name="description"
//                         placeholder="Type something…"
//                         defaultValue="johndoe@mail.com"
//                       />
//                     </NFTForm>
//                     <NFTtitle id="biography">
//                       <h4 className="mt-30">Biography</h4>
//                       <p className="mb-30">Write a little bit about yourself</p>
//                     </NFTtitle>
//                     <NFTForm>
//                       <textarea
//                         type="textarea"
//                         name="percentShare"
//                         placeholder="0"
//                       > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare augue non finibus commodo. Nam semper purus vel nulla mattis iaculis. Duis rhoncus dictum eros, ut dictum quam. </textarea>
//                     </NFTForm>
//                     <NFTtitle id="verifyProfile">
//                       <h4 className="mt-30">Verify Profile</h4>
//                       <p className="mb-30">
//                         Show us how authentic your profile
//                       </p>
//                     </NFTtitle>
//                     <NFTForm>
//                       <CustomCheckbox1>
//                         <label class="checkbox-container">
//                           {" "}
//                           <img src={CICON01} alt="" />
//                           Verify via Twitter
//                           <button
//                             type="checkbox"
//                             name="category"
//                             value="aa"
//                           />
//                           <span class="checkmark v2"></span>
//                         </label>
//                         <label class="checkbox-container">
//                           {" "}
//                           <img src={CICON02} alt="" />
//                           Verify via Instagram
//                           <button
//                             type="checkbox"
//                             name="category"
//                             value="celebrity"
//                           />
//                           <span class="checkmark v2"></span>
//                         </label>
//                       </CustomCheckbox1>
//                     </NFTForm>
//                     <NFTtitle id="socialLink">
//                       <h4 className="mt-30">Social Links</h4>
//                       <p className="mb-30">
//                         Add your social media links for people who want you know more
//                       </p>
//                     </NFTtitle>

//                     <NFTForm>
//                       <div className="label-line">
//                         <label>Website</label>
//                       </div>
//                       <div className="iLeft">
//                         <i><img src={CICON03} alt="" /></i>
//                         <input
//                           type="text"
//                           name="description"
//                           placeholder="Type something…"
//                           defaultValue="johndoe.com"
//                         />
//                       </div>
//                     </NFTForm>
//                     <NFTForm>
//                       <div className="label-line">
//                         <label>Discord</label>
//                       </div>
//                       <div className="iLeft">
//                         <i><img src={CICON04} alt="" /></i>
//                         <input
//                           type="text"
//                           name="description"
//                           placeholder="Type something…"
//                           defaultValue="@johndoe"
//                         />
//                       </div>
//                     </NFTForm>
//                     <NFTForm>
//                       <div className="label-line">
//                         <label>Youtube</label>
//                       </div>
//                       <div className="iLeft">
//                         <i><img src={CICON05} alt="" /></i>
//                         <input
//                           type="text"
//                           name="description"
//                           placeholder="Type something…"
//                           defaultValue="@johndoe"
//                         />
//                       </div>
//                     </NFTForm>
//                     <NFTForm>
//                       <div className="label-line">
//                         <label>Facebook</label>
//                       </div>
//                       <div className="iLeft">
//                         <i><img src={CICON06} alt="" /></i>
//                         <input
//                           type="text"
//                           name="description"
//                           placeholder="Type something…"
//                           defaultValue="@johndoe"
//                         />
//                       </div>
//                     </NFTForm>

//                     <CreateItemButton>
//                       <button type="submit">Create Item</button>
//                     </CreateItemButton>
//                   </form>
//                 </NFTMiddle>
//               </Gs.W605px>
//             </Gs.W880px>
//           </NFTminting>
//         </Gs.Container>
//       </div>
//       <Collapse
//         isOpen={this.state.isOpen4}
//         className={
//           "app__collapse " + (this.state.isOpen4 ? "collapse-active" : "")
//         }
//       >
//         <NFTModal toggle={this.toggle} />
//       </Collapse>
//     </Gs.MainSection>
//   );
// }
// toggle = (index) => {
//   let collapse = "isOpen" + index;
//   this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
// };
// }
// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .JCSB {
    justify-content: space-between;
  }
`;

const NFTminting = styled(FlexDiv)`
  align-items: flex-start;
  position: relative;
  margin: 60px 0px;
  .sticky {
    top: 20px !important;
  }
  .displayflex {
    display: flex;
    flex-wrap: wrap;
  }
`;

const NFTLeft = styled.div`
  margin: 0px 10px;
  .active {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.8px;
    margin: 0px 0px 15px;
    border-bottom: 3px solid #000;
    padding-bottom: 5px;
    display: inline-block;
  }
  a {
    display: block;
    margin: 0px 0px 22px;
    font-size: 18px;
    color: rgb(0 0 0 / 30%);
    font-weight: 600;
    letter-spacing: -0.8px;
    :hover {
      color: rgb(0 0 0 / 60%);
    }
    &.AdminLink {
      color: rgb(0 186 188 / 30%);
      :hover {
        color: rgb(0 186 188 / 60%);
      }
    }
  }
`;

const NFTRight = styled.div`
  margin: 0px 10px;
`;

// const NFTImgBX = styled(FlexDiv)`
//   width: 100%;
//   height: 253px;
//   border-radius: 10px 10px 0 0;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

const NFTtitle = styled.div`
  h4 {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1.07px;
    margin: 0px 0px 9px;
    &.mt-30 {
      margin-top: 30px;
    }
    &.text-till-blue {
      color: #00babc;
    }
  }
  p {
    color: #000000;
    font-size: 16px;
    letter-spacing: -0.8px;
    margin: 0px 0px 20px;
    &.mb-30 {
      margin-bottom: 30px;
    }
  }
`;

const NFTfourbox = styled(FlexDiv)`
  img.main {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .NFT-home-box {
    border-radius: 10px;
    border: 1px solid #dddddd;
    .NFT-home-box-inner {
      padding: 20px 15px;
      h4 {
        margin: 0px 0px 10px;
        font-size: 18px;
        color: #000000;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.67px;
      }
    }
  }
`;

Gs.W25V2 = styled(Gs.W25V2)`
  ${NFTfourbox}.nftnift & {
    width: 100%;
  }
`;

Gs.TenpxGutter = styled(Gs.TenpxGutter)`
  ${NFTfourbox}.nftnift & {
    margin: 0px;
  }
`;

const NFTMiddle = styled.div`
  margin: 0px 40px;
`;

const NFTForm = styled.div`
  position: relative;
  .label-line {
    margin: 0px 0px 6px;
    label {
      font-size: 16px;
      color: #8e9194;
      letter-spacing: -0.8px;
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
      font-size: 14px;
      letter-spacing: -0.7px;
      font-weight: 300;
      margin: 0px;
    }
  }
  input,
  select {
    width: 100%;
    height: 54px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.9px;
    margin: 0px 0px 30px;
    ::placeholder {
      color: #000;
      opacity: 20%;
    }
  }

  textarea {
    width: 100%;
    height: 110px;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.9px;
    margin: 0px 0px 30px;
    ::placeholder {
      color: #000;
      opacity: 20%;
    }
  }
  .iLeft {
    position: relative;
    i {
      position: absolute;
      left: 15px;
      top: 16px;
      font-size: 18px;
      color: #000;
      font-weight: bold;

      img {
        position: relative;
        left: -7px;
        top: -4px;
      }
    }
    input {
      padding-left: 45px;
    }
  }
  .iRight {
    position: relative;
    i {
      position: absolute;
      right: 15px;
      top: 17px;
      font-size: 18px;
      color: #000;
      font-weight: bold;
    }
    input {
      padding-right: 45px;
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

const FileuploadBox = styled(FlexDiv)`
  border: 1px solid #dddddd;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin: 0px 0px 60px;
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
  margin: 50px 0px 80px;
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

const CustomRadio1 = styled(FlexDiv)`
  justify-content: flex-start;
  margin-bottom: 30px;
  .radio-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 54px;
    width: calc(170px - 5px);
    margin-right: 10px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.9px;
    color: #000;
    img {
      margin-right: 5px;
    }
  }
  .radio-container input {
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
  .radio-container input:checked ~ .checkmark {
    border: 1px solid #00babc;
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
    width: calc(250px - 5px);
    margin-right: 10px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 700;
    font-size: 18px;
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
  .checkbox-container button:hover {
    background-color: #f7f7f7;
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
  .checkmark.v2:hover {
    border: 1px solid #00babc;
  }
  .checkbox-container input:checked ~ .checkmark {
    border: 1px solid #00babc;
  }
`;

const CollectionSelect = styled(FlexDiv)`
  margin-bottom: 60px;
  position: relative;
  select {
    margin-bottom: 0px;
    -webkit-appearance: none;
    background: url(${DDdownA}) no-repeat 97% 55%;
    option {
      border-radius: 10px;
      box-shadow: 0 10px 20px 0 rgb(0 0 0 / 30%);
      margin: 30px;
    }
  }
  button {
    font-size: 14px;
    letter-spacing: -0.5px;
    color: #000;
    font-weight: 700;
    border-radius: 15px;
    border: 1px solid #000000;
    padding: 16px 20px;
    margin-left: 10px;
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const AccountBX = styled(FlexDiv)`
  position: absolute;
  top: 37px;
  right: 0px;
  width: auto;
  justify-content: flex-end;
  padding: 8px 10px;
  z-index: 101;
  cursor: pointer;
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
    font-size: 18px;
    letter-spacing: -0.9px;
    font-weight: 700;
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

const DDBtnbar02 = styled(FlexDiv)`
  width: 100%;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
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

const DDContainer = styled(FlexDiv)`
  position: absolute;
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  top: calc(100% + 30px);
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 100;
  &.ver2 {
    width: 150px;
    left: auto;
    transform: translateX(0);
    right: 0;
    top: calc(100% + 20px);
    padding: 0;
  }
`;

const BackBTN01 = styled.button`
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 0 30px;
  height: 44px;
  margin: 60px 0 0 6px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

const AlertNote = styled.div`
  background-color: #ffe5e9;
  border: 1px solid #ff2a44;
  border-radius: 10px;
  margin: 0px 0px 40px;
  padding: 17px 15px;
  p {
    margin: 0px;
    color: #000000;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.8px;
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getProfile: () => dispatch(actions.getUserDetails()),
    updateProfile: (params) => dispatch(actions.updateUserDetails(params)),
  };
};
const mapStateToProps = (state) => {
  return {
    profile: state.fetchAuthData,
    profileUpdate: state.updateProfile,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDipatchToProps)(ProfileEdit)
);
