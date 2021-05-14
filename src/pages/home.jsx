import React from "react";
import { connect } from "react-redux";
import { defiActions } from "../actions";
import { web3Actions } from "../actions";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      web3Data: null,
      nftContractInstance: null,
    };
  }

  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
    else return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
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
    console.log(nftContractInstance);
    if (!web3Data) this.props.getWeb3();
    else this.setState({ web3Data: web3Data });
    this.props.getNFTContractInstance();
  }
  async setUserNFTData(nftContractInstance, web3Data) {
    const creatorTokenIds = await nftContractInstance.methods
      .viewCreatorTokenIds(web3Data.accounts[0])
      .call();

    console.log(creatorTokenIds);

    const balanceOfEdition = await nftContractInstance.methods
      .balanceOf(web3Data.accounts[0], 0)
      .call();
    console.log(balanceOfEdition);
  }
  async setGeneralNFTData(nftContractInstance) {
    const adminAddress = await nftContractInstance.methods.admin().call();
    console.log(adminAddress);
  }

  render() {
    console.log("add", this.props);
    const { web3Data } = this.state;
    return (
      <div>
        <h1>address : {web3Data?.accounts[0]}</h1>
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
