import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";
import Collapsible from 'react-collapsible';
import Media from "../Theme/media-breackpoint";

import Blackcross from "../Assets/images/black-cross.svg";
import Bluecross from "../Assets/images/blue-cross.svg";

class Faq extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      tabPanel: 'all',
      searched: false,
      filter: [],
      page: 1,
    };
  }

  render() {
    return (
      <Gs.MainSection>
        <FaqContainer>
          <Faqtitle>
            <h2>Frequently Asked Questions</h2>
            <FilterLbx>
              <button class="active" id="all">All</button>
              <button class="">Art</button>
              <button class="">Celebrity</button>
              <button class="">Sport</button>
            </FilterLbx>
            <FaqAccordian>
              <Collapsible trigger="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Nulla ac dui laoreet, interdum felis vitae, fermentum elit?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Nulla pretium odio ut turpis pretium viverra?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Duis condimentum diam et diam lacinia malesuada?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Suspendisse ut eros sit amet augue commodo commodo non ac ex?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Nulla pretium odio ut turpis pretium viverra?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Duis condimentum diam et diam lacinia malesuada?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Suspendisse ut eros sit amet augue commodo commodo non ac ex?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Nulla ac dui laoreet, interdum felis vitae, fermentum elit?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Nulla pretium odio ut turpis pretium viverra?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Duis condimentum diam et diam lacinia malesuada?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Suspendisse ut eros sit amet augue commodo commodo non ac ex?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Nulla pretium odio ut turpis pretium viverra?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Duis condimentum diam et diam lacinia malesuada?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
              <Collapsible trigger="Suspendisse ut eros sit amet augue commodo commodo non ac ex?">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium tortor quis risus ullamcorper, efficitur congue odio luctus. Quisque varius, neque sed ultricies sollicitudin, ante neque tristique leo, euismod efficitur massa lorem vitae augue. Aliquam sit amet nibh a nunc rutrum vulputate. In hendrerit auctor suscipit. Maecenas eu arcu vel ligula tincidunt fermentum a lobortis erat. Vivamus augue nulla, sodales a egestas ac, rutrum sed diam. Quisque posuere at lorem vitae faucibus. Suspendisse nunc turpis, porta lacinia iaculis et, tincidunt a nulla. Nullam vestibulum sagittis nisi in egestas. Aliquam erat volutpat. Integer a ante sit amet odio tincidunt sollicitudin faucibus a tellus.
                </p>
              </Collapsible>
            </FaqAccordian>

          </Faqtitle>
        </FaqContainer>
      </Gs.MainSection>
    );
  }
  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}
// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FaqContainer = styled.div`
  margin:60px auto 80px; max-width:835px; width:100%;
  ${Media.md}{
    width:94%;
  }
`;

const Faqtitle = styled.div`
  h2{font-size:32px; letter-spacing:-1.52px; font-weight:700; margin:0px 0px 20px; color:#000; line-height:normal;}
`;
const FilterLbx = styled(FlexDiv)`
  justify-content: flex-start; margin-bottom:40px;
  button {
    display: inline-block;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    border-radius: 15px;
    background-color: #eef2f7;
    margin:0px 8px 8px 0px;
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

const FaqAccordian = styled.div`
  .Collapsible{margin:0px 0px 40px;}
  .Collapsible__trigger{font-size:20px; letter-spacing:-0.89px; font-weight:bold; color:#000; line-height:normal; border-bottom:1px solid #ddd; cursor:pointer; padding:0px 17px 13px 0px; display:block; position:relative;
  :after{content:''; width:14px; height:14px; position:absolute; right:0px; top:0px; background:url(${Blackcross}); background-size:contain;}
  &.is-open{
    color:#00babc;
    :after{ width:17px; height:17px; background:url(${Bluecross}); background-size:contain;}
    } 
  }
  .Collapsible__contentInner{
    p{font-size:16px; color:#000; letter-spacing:-0.8px; line-height:normal;}
  }
`;


export default Faq;
