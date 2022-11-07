import React from 'react'
import "./topfold.css"
const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
        <div className="tf-heading">
          Discover collect, & sell <span className='heading-gradient'>Extraordnary</span>Nfts
        </div>
        <div className='tf-descriptios'>
          This is the Nft Sites For Selling Our Nft.
          Her You can Discover Every types of Nfts.
        </div>
        <div className='btn'>
          <button className='explore'>Explore</button>
          <button className='create'>Create</button>
        </div>
        <div className="tf-left-infostates">
          <div className="tf-is-infoitem">
            <div className="tf-infoitem-count"> 200K+</div>
            <div className="tf-infoitem-label">Collections </div>
          </div>


          <div className="tf-is-infoitem">
            <div className="tf-infoitem-count"> 10k+</div>
            <div className="tf-infoitem-label">Artiest </div>
          </div>


          <div className="tf-is-infoitem">
            <div className="tf-infoitem-count">200k+ </div>
            <div className="tf-infoitem-label">Community</div>
          </div>
        </div>
      </div>
      <div className='tf-right'>
        <div className="tf-r-bg-block"></div>
        <div className="tf-right-diamond">
          <div className="tf-right-diamonditem absolute-center">
            <img className='tf-r-diamond-img' src="https://i.seadn.io/gae/F0UNOb3yO6_ee8kRC6zmgJcnDGE60SnWwdtmsqDq82SkM_VybImorQZ1sTwao9r9LoCxR23pyXzNwZ16x6NuluOrZ5fBXqO0AJzBrts?auto=format&w=384" alt="diamond banner" />
          </div>
          <div className="tf-right-diamonditem absolute-center">
            <img className='tf-r-diamond-img' src="https://i.seadn.io/gae/CgGzr7DgRmduN2c_jPLwVUSxQTHShHvsYEcxdxoVO_CXxTzWj2OQS-F-A4xMOpM6WJMDP3WkWvuQpQgmpao4GlFoj24EH5nCYIwWeQ?auto=format&w=1000" alt="diamond banner" />
          </div>
          <div className="tf-right-diamonditem absolute-center">
            <img className='tf-r-diamond-img' src="https://i.seadn.io/gae/CgGzr7DgRmduN2c_jPLwVUSxQTHShHvsYEcxdxoVO_CXxTzWj2OQS-F-A4xMOpM6WJMDP3WkWvuQpQgmpao4GlFoj24EH5nCYIwWeQ?auto=format&w=1000" alt="diamond banner" />
          </div>
          <div className="tf-right-diamonditem absolute-center">
            <img className='tf-r-diamond-img' src="https://i.seadn.io/gae/F0UNOb3yO6_ee8kRC6zmgJcnDGE60SnWwdtmsqDq82SkM_VybImorQZ1sTwao9r9LoCxR23pyXzNwZ16x6NuluOrZ5fBXqO0AJzBrts?auto=format&w=384" alt="diamond banner" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFold