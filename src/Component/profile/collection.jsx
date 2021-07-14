import Gs from "../../Theme/globalStyles";
import styled from "styled-components";
import HeartIcon from "../../Assets/images/heart-icon.svg";
import StarIcon from "../../Assets/images/star-icon.svg";
import RoundIcon from "../../Assets/images/round-icon.svg";
import LoaderGif from "../../Assets/images/loading.gif";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import { actions } from "../../actions";
import CollectionCard from "../Cards/collectionCard";


function Collection(props) {

  let { collections, categories } = props;
  const params = useParams();
  const [tabPanel, setTaPanel] = useState("All");

  useEffect(() => {
    if (!collections) props.getCollections(params.id ? params.id : null);
  }, [collections]);

  useEffect(() => {
    if (!categories) props.getCategories();
  }, [categories]);

  useEffect(() => { }, [tabPanel]);

  useEffect(() => {
    return function cleanup() {
      props.clearCollections(); // clear the collection data
    };
  }, [])

  return (
    <>
      <FilterMBX>
        <FilterLbx>
          {categories && collections
            ?
            collections.length > 0 && categories.length > 0 ? <>
                <button
                className={tabPanel === "All" ? "active" : ""}
                id="all"
                onClick={() => {
                  setTaPanel("All");
                }}
              >
                All
              </button>
              {categories.map((category, key) => {
                  return (
                    <button key={key}
                      className={tabPanel === category.id ? "active" : ""}
                      onClick={() => {
                        setTaPanel(category.id);
                      }}
                    >
                      {category.categoryName}
                    </button>
                  );
                })
              }
            </> : ``
          : ``}
        </FilterLbx>
      </FilterMBX>
      <HomeNFTs>
        <Gs.Container>
          <NFTfourbox>
            {collections ? (
              collections.map((collection, key) => (
                <CollectionCard
                  key={key}
                  id={collection.id}
                  collImg={collection.logo}
                  collName={collection.name}
                  creatorName={collection.ownerId?.username}
                />
              ))
            ) : (
              <LoaderBX>
                <img src={LoaderGif} alt="" />
              </LoaderBX>
            )}
          </NFTfourbox>

          {categories && collections ? 
            collections.length === 0 ?
              <CEmpty>
                <h2>Your collection is empty.</h2>
                <p>Start building your collection<br /> by placing bids on artwork.</p>
                <button className="ani-1">Explore artworks</button>
              </CEmpty>
            : ``
          : ``}
        </Gs.Container>
      </HomeNFTs>
    </>
  );
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const NFTfourbox = styled(FlexDiv)`  
    flex-wrap:wrap; margin:0px -10px 50px; justify-content:flex-start;
    .row{margin:0px -10px;}
    img.main{width:100%; border-top-left-radius:10px; border-top-right-radius:10px;}
        .NFT-home-box{ border-radius:10px; border:1px solid #dddddd; 
          :hover{ box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);} 
          .NFT-home-box-inner{ padding:20px 15px;
            h4{margin:0px 0px 10px; font-size:18px; color:#000000; font-weight:600; line-height:normal; letter-spacing:-0.67px;}
            .edition2
            {
              justify-content:flex-start; padding:10px 15px; margin-bottom:20px;
              .ed-box{
                margin-right:20px;
                p{font-size:10px; letter-spacing:-0.5px; margin:0px;}
                h3{font-size:16px; letter-spacing:-0.71px;}
                button{font-size:10px; color:#000; letter-spacing:-0.36px; font-weight:600; line-height:normal; padding:10px 17px; border-radius:13px; border:1px solid #000000;
                  :hover{background-color:#d121d6; color:#fff; border-color:#d121d6;}
                }
              }
            }
            .JCSB{justify-content:space-between;
              .ed-box{margin-right:0px;}
            }
          }
        }
      }
      .JCSB {
        justify-content: space-between;
        .ed-box {
          margin-right: 0px;
        }
      }
    }
  }
`;

const LoaderBX = styled(FlexDiv)`
  width: 100%;
  margin: 50px auto;
`;

const HomeNFTs = styled.div`
  width: 100%;
  margin-top: 40px;
  .home-title {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    margin-bottom: 30px;
    h3 {
      color: #000000;
      font-size: 32px;
      position: relative;
      line-height: 32px;
      margin: 0px 0px 15px;
      padding-left: 20px;
      letter-spacing: -1px;
      :before {
        content: "";
        position: absolute;
        left: 0px;
        top: 12px;
        width: 10px;
        height: 10px;
        background: url(${RoundIcon}) no-repeat;
      }
    }
  }
  .star-title {
    text-align: left;
    margin-bottom: 18px;
    h3 {
      color: #000000;
      font-size: 32px;
      position: relative;
      line-height: 32px;
      margin: 0px;
      padding-left: 20px;
      letter-spacing: -1px;
      :before {
        content: "";
        position: absolute;
        left: 0px;
        top: 12px;
        width: 12px;
        height: 12px;
        background: url(${StarIcon}) no-repeat;
      }
    }
  }
  .heart-title {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    margin-bottom: 30px;
    h3 {
      color: #000000;
      font-size: 32px;
      position: relative;
      line-height: 32px;
      margin: 0px 0px 15px;
      padding-left: 20px;
      letter-spacing: -1px;
      :before {
        content: "";
        position: absolute;
        left: 0px;
        top: 12px;
        width: 12px;
        height: 11px;
        background: url(${HeartIcon}) no-repeat;
      }
    }
  }
`;

const FilterMBX = styled(FlexDiv)`
  width: 100%;
  justify-content: space-between;
  max-width: 1080px;
  margin: 30px auto 0 auto;
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


const CEmpty = styled.div`
  text-align:center; margin-bottom:120px;
  h2{ 
    font-size:22px;
    letter-spacing:-0.55px;
    color:#000;
    margin:0px 0px 10px;
    font-weight:600;
  }
  p{ 
    font-size:16px;
    letter-spacing:-0.8px;
    color:#000;
    margin:0px 0px 22px;
  }
  button{
    font-size:14px;
    letter-spacing:-0.5px;
    color:#000;
    padding:13px 44px;
    border-radius:15px;
    border:1px solid #000;
    :hover{background-color:#000; color:#fff;}
  }
`;

const mapDipatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(actions.fetchCategories()),
    getCollections: (id) => dispatch(actions.getCollectionNFT(id)),
    clearCollections: () => dispatch({ type: 'FETCHED_COLLECTION_NFT', data: null }),
  };
};
const mapStateToProps = (state) => {
  return {
    categories: state.fetchCategory,
    collections: state.fetchCollectionNFT,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Collection);