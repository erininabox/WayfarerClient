import React from 'react'
import CityCarousel from '../partials/CityCarousel'
function HomePage(){
    return(
        <div className='homepage-css' style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/home.jpeg')`
          }}>
            <CityCarousel />
        </div>
    )
}

export default HomePage