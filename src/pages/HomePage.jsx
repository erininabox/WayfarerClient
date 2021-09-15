import React from 'react'
import CityCarousel from '../partials/CityCarousel'
function HomePage(){
    return(
        <div className='homepage-css' style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/homebw.jpeg')`
          }}>
              <p className='home-city-carousel'>
            <CityCarousel /> </p>
        </div>
    )
}

export default HomePage