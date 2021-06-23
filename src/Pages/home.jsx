import React from 'react';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Gs from '../Theme/globalStyles';
import Banner from '../Component/home/banner';
import TopNFT from '../Component/home/topNFT';
import HallOfFrame from '../Component/home/hall.frame';
import Collections from '../Component/home/collections';
import Info from '../Component/home/info';

import { actions } from '../actions';
import { expiryTime } from '../config';


class Home extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
          loading: false,
          dashboard: cookies.get('dashboard') || null,
        }
    }

    async componentDidMount() {
        const { dashboard, cookies } = this.props;
        if (!this.state.dashboard && !dashboard) {
            this.props.getDashboard() // fetch dashboard config
        } else {
            this.props.setDashboard(cookies.get('dashboard'))
        }
    }

    componentDidUpdate(){
        const { dashboard, cookies } = this.props
        if (dashboard && !cookies.get('dashboard')) {
            this.setCookie(dashboard) // set dashboard data in cookie
        }
    }

    setCookie = (dashboard) => {
        const { cookies } = this.props;
        const expire = new Date(Date.now()+(expiryTime*60*60*1000)) // cookie will expire after 12 hours
        cookies.set('dashboard', dashboard, { path: '/', expires: expire });
    }


    render() {
        return(
            <Gs.MainSection>
                {this.props.dashboard?
                    this.props.dashboard.map((data, index)=>{
                        if (data.name==='Banner' && data.isActive) {
                            return <Banner key={index}/>
                        } else if (data.name==='Top Nft' && data.isActive) {
                            return <TopNFT key={index}/>
                        } else if (data.name==='Hall Of Frame' && data.isActive) {
                            return <HallOfFrame key={index}/>
                        } else if (data.name==='Collections' && data.isActive) {
                            return <Collections key={index}/>
                        } else if (data.name==='Info' && data.isActive) {
                            return <Info key={index}/>
                        } else {
                            return ''
                        }
                    })
                :'loading'}
            </Gs.MainSection>
        )
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        getDashboard: () => dispatch(actions.fetchDashboardConfig()),
        setDashboard: (data) => dispatch({type: 'FETCHED_DASHBOARD', data: data})
    }
}

const mapStateToProps = (state) => {
    return {
        dashboard: state.fetchDashboard,
    }
}

export default withCookies(connect(mapStateToProps, mapDipatchToProps)(Home));