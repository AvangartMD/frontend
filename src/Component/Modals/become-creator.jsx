import styled from "styled-components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import CloseBTN01 from "../../Assets/images/closeBTN01.svg";

import { actions } from "../../actions";
import { services } from "../../services";

class BecomeCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      loading: false,
      becomeCreator: false,
    };
  }

  async componentDidMount() {
    const { categories } = this.props;
    if (!categories) {
      this.props.getCategories(); // fetch categories config
    }
  }

  onFormChange = (event) => {
    this.setState({
      [event.target.name]:
        event.target.name === "category"
          ? this.state.category
            ? [...this.state.category, event.target.value]
            : [event.target.value]
          : event.target.value,
    });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      bio,
      instagram,
      website,
      category,
      twitter,
    } = this.state;
    const userObj = {
      name: name,
      email: email,
      bio: bio,
      portfolio: {
        instagarm: { username: instagram, url: null },
        website: { url: website },
        twitter: { username: twitter },
      },
      isCreator: true,
      profile: website,
      category: category,
    };
    this.setState({ loading: true }); // start loading
    this.updateUser(userObj);
  };

  updateUser = async (obj) => {
    this.setState({ loading: false }); // stop loading
    const request = services.put(`user/update`, obj);
    request
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        if (response.status === 200) {
          this.setState({
            isOpen1: false,
            isOpen2: false,
            isOpen3: false,
            becomeCreator: true,
          });
        }
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.status === 401 || e.response.status === 403) {
            localStorage.removeItem("token");
          }
          // other error code (404, 500, etc): no need to log out
        }
      });
  };

  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };

  render() {
    const { categories } = this.props;
    const {
      isOpen1,
      isOpen2,
      isOpen3,
      loading,
      becomeCreator,
      isOpen4,
    } = this.state;
    return (
      <>
        {!isOpen4 && becomeCreator ? (
          <>
            <BlackWrap>
              <WhiteBX01>
                <CloseBTN className="ani-1" onClick={() => this.toggle(4)}>
                  {" "}
                  <img src={CloseBTN01} alt="" />{" "}
                </CloseBTN>

                <TokenBox>
                  <WGTitle>Profile request sent</WGTitle>
                  <WGdescText>
                    Profile status will be updated once admin approves the
                    request
                  </WGdescText>
                </TokenBox>
              </WhiteBX01>
            </BlackWrap>
          </>
        ) : (
          ""
        )}

        {becomeCreator ? (
          <AvBTN02 className={!this.props.isFooter ? "colorBTN" : ""}>Waiting</AvBTN02>
        ) : (
            <AvBTN02 className={!this.props.isFooter ? "colorBTN" : ""} onClick={() => { this.setState({ isOpen1: true }); }}>
              <FormattedMessage
                id="Become_a_creator"
                defaultMessage="Become a Creator"
              />
          </AvBTN02>
        )}

        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          {isOpen1 ? (
            <BlackWrap>
              <WhiteBX02>
                <CloseBTN
                  className="ani-1"
                  onClick={() => {
                    this.setState({ isOpen1: false });
                  }}
                >
                  <img src={CloseBTN01} alt="" />
                </CloseBTN>

                <BACLeft>
                  <BACLtitle>Who are you?</BACLtitle>
                  <BACLdesc>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque
                    ornare augue non finibus commodo.
                  </BACLdesc>
                  <BACLlist>
                    <Link className="active" to="/">
                      01
                    </Link>
                    <Link to="/">02</Link>
                    <Link to="/">03</Link>
                  </BACLlist>
                </BACLeft>
                <BACRight>
                  <NFTForm>
                    <div className="label-line">
                      <label>
                        Name<sup>*</sup>
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="Type name…"
                      name="name"
                      required
                    />
                  </NFTForm>
                  <NFTForm>
                    <div className="label-line">
                      <label>
                        Email<sup>*</sup>
                      </label>
                    </div>
                    <input
                      type="text"
                      placeholder="Type email…"
                      name="email"
                      required
                    />
                  </NFTForm>
                  <NFTForm>
                    <div className="label-line">
                      <label>
                        Explain Yourself<sup>*</sup>
                      </label>
                    </div>
                    <textarea name="bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque ornare augue non finibus commodo.
                    </textarea>
                  </NFTForm>
                  <CreateItemButton>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ isOpen2: true });
                      }}
                    >
                      Next
                    </button>
                  </CreateItemButton>
                </BACRight>
              </WhiteBX02>
            </BlackWrap>
          ) : (
            ""
          )}

          {isOpen2 ? (
            <BlackWrap>
              <WhiteBX02>
                <CloseBTN
                  className="ani-1"
                  onClick={() => {
                    this.setState({ isOpen2: false, isOpen1: false });
                  }}
                >
                  <img src={CloseBTN01} alt="" />
                </CloseBTN>

                <BACLeft>
                  <BACLtitle>What’s your style?</BACLtitle>
                  <BACLdesc>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque
                    ornare augue non finibus commodo.
                  </BACLdesc>
                  <BACLlist>
                    <Link to="/">01</Link>
                    <Link className="active" to="/">
                      02
                    </Link>
                    <Link to="/">03</Link>
                  </BACLlist>
                </BACLeft>
                <BACRight>
                  <NFTForm>
                    <div className="label-line">
                      <label>NFT Category</label>
                      <p>Phasellus at dui imperdiet, eleifend lacus gravida</p>
                    </div>
                    <CustomCheckbox1>
                      {categories
                        ? categories.map((category, index) => {
                            return (
                              <label class="checkbox-container">
                                <img
                                  src={category.image}
                                  alt=""
                                  style={{
                                    maxWidth: "32px",
                                    maxHeight: "32px",
                                  }}
                                />
                                {category.categoryName}
                                <input
                                  type="checkbox"
                                  name="category"
                                  value={category.id}
                                />
                                <span class="checkmark"></span>
                              </label>
                            );
                          })
                        : ""}
                    </CustomCheckbox1>
                  </NFTForm>
                  <CreateItemButton>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ isOpen1: true, isOpen2: false });
                      }}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ isOpen3: true });
                      }}
                    >
                      Next
                    </button>
                  </CreateItemButton>
                </BACRight>
              </WhiteBX02>
            </BlackWrap>
          ) : (
            ""
          )}

          {isOpen3 ? (
            <BlackWrap>
              <WhiteBX02>
                <CloseBTN
                  className="ani-1"
                  onClick={() => {
                    this.setState({
                      isOpen3: false,
                      isOpen2: false,
                      isOpen1: false,
                    });
                  }}
                >
                  <img src={CloseBTN01} alt="" />
                </CloseBTN>
                <BACLeft>
                  <BACLtitle>Promote yourself!</BACLtitle>
                  <BACLdesc>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Quisque
                    ornare augue non finibus commodo.
                  </BACLdesc>
                  <BACLlist>
                    <Link to="/">01</Link>
                    <Link to="/">02</Link>
                    <Link className="active" to="/">
                      03
                    </Link>
                  </BACLlist>
                </BACLeft>
                <BACRight>
                  <NFTForm>
                    <div className="label-line">
                      <label>Portfolio website</label>
                    </div>
                    <input
                      type="text"
                      placeholder="Type your id…"
                      name="website"
                      required
                    />
                  </NFTForm>
                  <NFTForm>
                    <div className="label-line">
                      <label>Instagram account</label>
                    </div>
                    <input
                      type="text"
                      placeholder="Type your id…"
                      name="instagram"
                      required
                    />
                  </NFTForm>
                  <NFTForm>
                    <div className="label-line">
                      <label>Twitter account</label>
                    </div>
                    <input
                      type="text"
                      placeholder="Type your id…"
                      name="twitter"
                      required
                    />
                  </NFTForm>
                  <CreateItemButton>
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({ isOpen2: true, isOpen3: false });
                      }}
                    >
                      Previous
                    </button>
                    <button type="submit" disabled={loading}>
                      {loading ? "loading.." : "Submit"}
                    </button>
                  </CreateItemButton>
                </BACRight>
              </WhiteBX02>
            </BlackWrap>
          ) : (
            ""
          )}
        </form>
      </>
    );
  }
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
  z-index: 1011;
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
  z-index: 9;
  :hover {
    transform: rotate(90deg);
  }
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

const WhiteBX02 = styled.div`
  width: 100%;
  position: relative;
  max-width: 720px;
  margin: 0 auto;
  min-height: 518px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
`;

const BACLeft = styled.div`
  background-color: #eef2f7;
  padding: 60px 50px;
  max-width: 320px;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

const BACLtitle = styled.div`
  color: #000;
  font-size: 22px;
  letter-spacing: -0.55px;
  margin: 0px 0px 15px;
  font-weight: bold;
`;

const BACLdesc = styled.div`
  color: #000;
  font-size: 16px;
  letter-spacing: -0.8px;
  margin: 0px 0px 30px;
`;

const BACLlist = styled.div`
  a {
    color: rgb(0 0 0 / 20%);
    font-size: 12px;
    font-weight: bold;
    letter-spacing: -0.6px;
    margin: 0px 20px 0px 0px;
    &.active {
      color: rgb(0 0 0 / 100%);
    }
  }
`;

const BACRight = styled.div`
  padding: 60px 50px;
  width: 100%;
  position: relative;
`;

const NFTForm = styled.div`
  position: relative;
  .label-line {
    margin: 0px 0px 6px;
    label {
      font-size: 12px;
      color: #8e9194;
      font-weight: 600;
    }
    sup {
      top: -0.1em;
    }
    p {
      color: #8e9194;
      font-size: 12px;
      letter-spacing: -0.4px;
      font-weight: 300;
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
    color: #000000;
    letter-spacing: -0.9px;
    margin: 0px 0px 15px;
    ::placeholder {
      color: #000;
      opacity: 20%;
    }
  }
  textarea {
    width: 100%;
    min-height: 109px;
    line-height: 24px;
    resize: none;
    border: 1px solid #dddddd;
    border-radius: 10px;
    padding: 15px;
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    letter-spacing: -0.8px;
    margin: 0px 0px 15px;
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

const CreateItemButton = styled.div`
  margin: 0px;
  position: absolute;
  right: 50px;
  left: auto;
  bottom: 60px;
  button {
    font-size: 14px;
    color: #000;
    letter-spacing: -0.5px;
    width: 100px;
    height: 44px;
    margin: 0px 0px 0px 5px;
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid #000;
    :hover {
      background: linear-gradient(90deg, #d121d6, #febf11);
      color: #fff;
      border: none;
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
    width: 100%;
    margin: 0px 0px 5px 0px;
    cursor: pointer;
    padding-left: 15px;
    line-height: 54px;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.8px;
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

const AvBTN02 = styled.button`
  padding: 11px 23px;
  font-size: 12px;
  color: #fff;
  background-color: #000;
  border-radius: 15px;
  :hover {
    background-color: #d121d6;
    -webkit-box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
  }

  &.grayBTN {
    background-color: #b2b2b2;
    :hover {
      background-color: #878787;
    }
  }
  &.colorBTN {
    background: #d121d6;
    background: -moz-linear-gradient(left, #d121d6 0%, #febf11 100%);
    background: -webkit-linear-gradient(left, #d121d6 0%, #febf11 100%);
    background: linear-gradient(to right, #d121d6 0%, #febf11 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d121d6', endColorstr='#febf11',GradientType=1 );
    color: #fff;
    :hover {
      filter: brightness(0.9);
    }
  }
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
const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 60px auto 0 auto;
`;
const AvBTN01 = styled.button`
  padding: 9px 40px;
  color: #fff;
  background-color: #000;
  border-radius: 15px;
  :hover {
    background-color: #d121d6;
    -webkit-box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
    box-shadow: 1px 8px 10px 1px rgba(0, 0, 0, 0.08);
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(actions.fetchCategories()),
  };
};

const mapStateToProps = (state) => {
  return {
    categories: state.fetchCategory,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(BecomeCreator);
