import React from 'react';
import { connect } from 'react-redux';

import Banner from '../Component/home/banner';
import TopNFT from '../Component/home/topNFT';
import HallOfFrame from '../Component/home/hall.frame';
import Collections from '../Component/home/collections';
import { actions } from '../actions';


class Home extends React.Component {

    async componentDidMount() {
        const { dashboard } = this.props;
        if (!dashboard) {
          this.props.getDashboard() // fetch dashboard config
        }
    }


    render() {
        return(
            <>
                {this.props.dashboard?
                    this.props.dashboard.map((data, index)=>{
                        if (data.name==='Banner' && data.isActive) {
                            return <Banner />
                        } else if (data.name==='Top Nft' && data.isActive) {
                            return <TopNFT />
                        } else if (data.name==='Hall Of Frame' && data.isActive) {
                            return <HallOfFrame />
                        } else if (data.name==='Collections' && data.isActive) {
                            return <Collections />
                        } else {
                            return ''
                        }
                    })
                :'loading'}
            </>
        )
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        getDashboard: () => dispatch(actions.fetchDashboardConfig()),
    }
}

const mapStateToProps = (state) => {
    return {
        dashboard: state.fetchDashboard,
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Home);