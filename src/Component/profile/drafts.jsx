import Gs from "../../Theme/globalStyles";
import styled from "styled-components";
import HeartIcon from "../../Assets/images/heart-icon.svg";
import StarIcon from "../../Assets/images/star-icon.svg";
import RoundIcon from "../../Assets/images/round-icon.svg";
import LoaderGif from "../../Assets/images/loading.gif";
import { useEffect } from "react";
import { connect } from "react-redux";
import { actions } from "../../actions";
import NFTCard from "../Cards/nftCard";

function Drafts(props) {
  const { userDraftNFT } = props;
  useEffect(() => {
    if (!userDraftNFT) props.getUserDraftNFT();
  }, [userDraftNFT]);
  return (
    <HomeNFTs>
      <Gs.Container>
        <NFTfourbox>
          {userDraftNFT ? (
            userDraftNFT.map((nft) => (
              <NFTCard
                nftSold={nft.nftSold}
                nftId={nft.id}
                name={ nft.ownerId.name }
                collectionId={nft.collectionId?._id}
                auctionEndDate={nft.auctionEndDate}
                nftImg={nft.image.compressed}
                title={nft.title}
                edition={nft.edition}
                price={nft.price}
                auctionTime={nft.auctionTime}
                userImg={nft.ownerId.profile}
                username={nft.ownerId.username}
              />
            ))
          ) : (
            // this.renderTabPanel(NFTs)
            <LoaderBX>
              <img src={LoaderGif} alt="" />
            </LoaderBX>
          )}
        </NFTfourbox>
      </Gs.Container>
    </HomeNFTs>
  );
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const NFTfourbox = styled(FlexDiv)`  
    flex-wrap:wrap; margin:0px -10px 50px; 
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

const mapDipatchToProps = (dispatch) => {
  return {
    getUserDraftNFT: () => dispatch(actions.getUserDraftNFT()),
  };
};
const mapStateToProps = (state) => {
  return {
    userDraftNFT: state.fetchUserDraftNFT,
  };
};

export default connect(mapStateToProps, mapDipatchToProps)(Drafts);
