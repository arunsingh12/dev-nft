import React from 'react'
import "./App.css"
import BrandsIntegrations from './components/BrandsIntegrations/brandsintegratons'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import InfoSections from './components/InfoSection/infosection'
import TopFold from './components/TopFold/topfold'
import TrandingNft from './components/TrendingNft/trendingnft'

const App = () => {
  return (
    <div>
      <Header />
      <TopFold />
      <BrandsIntegrations />
      <TrandingNft />
      <InfoSections />
      <Footer />


    </div>
  )
}

export default App