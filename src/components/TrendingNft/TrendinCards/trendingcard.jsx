import React from 'react'
import "./trendingcard.css"

const Trendingcard = (props) => {
const{nft}=props

  return (
    <div className='trensing-card absolute-center'>
      <div className="tc-inner-wrapper">
        <div className="tc-content">
        <img src="https://i.seadn.io/gae/Syzf5zkbxKA2rry2HaiQPEKEb108ldnzMScTcs3sE_mxqUayEbQskxnwa8b6KBvwi1jua2aSOl1oRJYu1kryOEUCTp9eGnvrJdkmFQ?auto=format&w=384" alt="" />
        {/* <img src="https://i.seadn.io/gae/nFoch_jl5wb63kyWHEfXwkkqQPl9FDoPzroSDM8Pbjysyvy2UeMCphlpERZumxKrSguQKtmcY9Vkt2WMtlk_Xn6Vkxsia8CWWm46_u0?auto=format&w=384" alt="" /> */}
        </div>
        <div className="tc-user-info">
        <div className="tc-userinfo-left">
          <img src="" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Trendingcard