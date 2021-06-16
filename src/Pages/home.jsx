import React from 'react';

import Banner from '../Component/home/banner';
import TopNFT from '../Component/home/topNFT';
import HallOfFrame from '../Component/home/hall.frame';
import Collections from '../Component/home/collections';


class Home extends React.Component {

    render() {

        return(
            <>
                <Banner />
                <TopNFT />
                <HallOfFrame />
                <Collections />
            </>
        )
    }
}

export default Home;