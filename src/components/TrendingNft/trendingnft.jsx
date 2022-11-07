import React from 'react'
import Slider from "react-slick/lib/slider"
import { TRENDING_NFTS } from '../../data/trendingNfts'
import Trendingcard from './TrendinCards/trendingcard'
import "./trendingnft.css"

const settings = {
    slideToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    speed: 500,
    arrow: true,
};

const TrandingNft = () => {
    return (
        <div className='trending-nfts absolute-center'>
            <div className="tn-title">
                <span className='heading-gradient'>TRENDING NFTs</span>
            </div>
            <div className="tn-bg-block"></div>
            {/* <Slider {...settings}>
                {TRENDING_NFTS.map((_nft) => <Trendingcard />)}
            </Slider> */}
        </div>
    )
}

export default TrandingNft  