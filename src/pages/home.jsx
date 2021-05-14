import React from "react";
import { connect } from "react-redux";
import { defiActions } from "../actions";
import { web3Actions } from "../actions";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    // this.wrapperRef = React.createRef();
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      web3Data: null,
    };
  }

  static async getDerivedStateFromProps(nextProps, prevState) {
    let { web3Data } = nextProps;
    if (web3Data !== prevState.web3Data) return { web3Data: web3Data };
    else return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    let { web3Data } = this.props;

    if (web3Data !== prevProps.web3Data) this.setState({ web3Data: web3Data });
  }

  componentDidMount() {
    const { web3Data } = this.props;

    if (!web3Data) this.props.getWeb3();
    else this.setState({ web3Data: web3Data });
  }

  render() {
    console.log("add", this.state);
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
  };
};
const mapStateToProps = (state) => {
  return {
    web3Data: state.fetchWeb3Data,
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(Dashboard);
