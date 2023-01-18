import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css'
import 'react-owl-carousel2/src/owl.theme.default.css'

import About from './cards/About.jsx'
import InfoData from './data/aboutData.js'
import './App.css'
// import img1 from './assets/download.jpeg';
// import img2 from './assets/download (1).jpeg';
// import img3 from './assets/download (2).jpeg';


import React from 'react'

const App = () => {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true, 
    navText: ["<i class='fa fa-angle-left fa-2x prev' aria-hidden='true'></i>" , "<i class='fa fa-angle-right fa-2x'></i>"]
};

  return (
    <div className='app'>
     
     {/* <OwlCarousel options={options} >
     {item.items}
     </OwlCarousel> */}

    
     <OwlCarousel options={options} >
     {InfoData.info.map((segment) => (
          <About 
            key={segment.title}
            title={segment.title}
            desc = {segment.desc}
            picture = {segment.picture}
            />
        ))}
     </OwlCarousel>
  </div>
  )
}

export default App