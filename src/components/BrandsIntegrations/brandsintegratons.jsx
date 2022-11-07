import React from 'react'
import "./brandsintegrations.css"

const BrandsIntegrations = () => {
  return (
    <div className='brand-integrations absolute-center'>
      <img className='bi-logos' src={require('../../assets/images/images5.png')} alt="brand-logos" />
      <img className='bi-logos' src={require('../../assets/images/images8.png')} alt="brand-logos" />
      <img className='bi-logos' src={require('../../assets/images/images9.png')} alt="brand-logos" />
    </div>
  )
}

export default BrandsIntegrations