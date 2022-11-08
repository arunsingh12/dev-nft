import React from 'react'
import { INFO_ITEMS } from './infoitem'
// import Infoitem from './infoitem/infoitem'
import "./infosection.css"
const InfoSections = () => {
    return (
        <div className='info-section'>
            <div className='is-heading absolute-center'>
                <span className="heading-gradient">Creat and Sell Your Nfts</span>
            </div>
            <div className="id-items-container">
{/* {INFO_ITEMS.map{(_infoitem)=>(<Infoitem />)}} */}
           
           <div className="row absolute-center">
            <div className="col-12 absolute-center">
                <div className="col-3 ">
                    <img className='image' src="https://cdn-icons-png.flaticon.com/512/5973/5973568.png" alt="" />
                    <h1>Wallet</h1>
                    <p>Free for personal and commercial use with attribution. More info

Attribution is required.</p>
                </div>
                <div className="col-3 ">
                    <img className='image' src="https://cdn-icons-png.flaticon.com/512/3187/3187927.png" alt="" />
                    <h1 className='h1'>Uplode</h1>
                    <p className='p'>Free for personal and commercial use with attribution. More info

Attribution is required.</p>
                </div>
                <div className="col-3 ">
                    <img className='image' src="https://cdn-icons-png.flaticon.com/512/2527/2527926.png" alt="" />
                    <h1>List</h1>
                    <p>Free for personal and commercial use with attribution. More info

Attribution is required.</p>
                </div>
            </div>
            </div> 
            </div>
        </div>
    )
}

export default InfoSections