import React from "react";
import { connect } from "react-redux";
import { defiActions } from "../actions";
import { web3Actions } from "../actions";
import { hidden } from "ansi-colors";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3Data: null,
      nftContractInstance: null,
      isApproved: false,
      creatorTokenIds: null,
      ethEnabled: false,
      nfts: [],
    };
  }

  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
    else return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    let { web3Data, nftContractInstance } = this.props;

    if (web3Data !== prevProps.web3Data)
      this.setState({ web3Data: web3Data }, () => {
        if (nftContractInstance)
          this.setUserNFTData(nftContractInstance, web3Data);
      });
    if (nftContractInstance !== this.state.nftContractInstance) {
      this.setState({ nftContractInstance }, () => {
        this.setGeneralNFTData(nftContractInstance);
        if (web3Data) this.setUserNFTData(nftContractInstance, web3Data);
      });
    }
  }

  componentDidMount() {
    const { web3Data, nftContractInstance } = this.props;

    if (!web3Data) this.props.getWeb3();
    else this.setState({ web3Data: web3Data });
    this.props.getNFTContractInstance();
  }

  async setUserNFTData(nftContractInstance, web3Data) {
    const creatorTokenIds = await nftContractInstance.methods
      .viewCreatorTokenIds(web3Data.accounts[0])
      .call();

    const balanceOfEdition = await nftContractInstance.methods
      .balanceOf(web3Data.accounts[0], 0)
      .call();

    const isApproved = await nftContractInstance.methods
      .isApproved(web3Data.accounts[0])
      .call();

    this.setState({ creatorTokenIds: creatorTokenIds,
        balanceOfEdition: balanceOfEdition,
        isApproved: isApproved
      })
    
    const viewCreatorTokenIds = await nftContractInstance.methods
      .viewCreatorTokenIds(web3Data.accounts[0])
      .call();

    viewCreatorTokenIds.map(async (id)=>{
      const balanceOf = await nftContractInstance.methods
        .balanceOf(web3Data.accounts[0], id)
        .call();
      const tokenURI = await nftContractInstance.methods
        .tokenURI(id)
        .call();
      const owner = await nftContractInstance.methods
        .owner(id)
        .call();
      this.setState({ nfts: [...this.state.nfts, { id: id, balanceOf: balanceOf, tokenURI: tokenURI, owner: owner}] })
    })

  }
  async setGeneralNFTData(nftContractInstance) {
    const adminAddress = await nftContractInstance.methods.admin().call();
    console.log(adminAddress);
  }


  render() {
    const { web3Data, isApproved, nfts } = this.state;
    return (
      <div>
        <h2>Your wallet address is : {web3Data?web3Data.accounts[0]:'fetching..'}</h2>
        {isApproved?
          <h2>Your profile is approved by admin</h2>
          :<h2>Your profile is not approved by admin.</h2>}
          <h2>Total listed NFT's are : </h2>
            <p>
              {nfts.map((nft)=> <li key={nft.id}>id: {nft.id}, 
                Balance : {nft.balanceOf} ,
                Owner : {nft.owner}<br/> 
                {/* TokenURI : {nft.tokenURI}<br/> */}
                <img style={{width: "100px", height: "100px"}}src={nft.tokenURI} /></li>)}
            </p>
      </div>
    );
  }
}

const mapDipatchToProps = (dispatch) => {
  return {
    getWeb3: () => dispatch(web3Actions.getWeb3()),
    getNFTContractInstance: () =>
      dispatch(web3Actions.getNFTContractInstance()),
  };
};
const mapStateToProps = (state) => {
  return {
    web3Data: state.fetchWeb3Data,
    nftContractInstance: state.fetchNFTContractInstance,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(Dashboard);
