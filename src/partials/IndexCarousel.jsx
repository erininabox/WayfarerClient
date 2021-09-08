import Carousel from 'react-multi-carousel';
import React from 'react'
import 'react-multi-carousel/lib/styles.css'

const responsive= {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  class IndexCarousel extends React.Component {

    renderCities(){
        const citiesJSX =  this.state.cityData.map((cityObj, idx)=>{
           return(
             <Link key={idx} to={`/cities/${cityObj._id}`}>
                 <h3>{cityObj.city}</h3>
               {/* <CityShowPage cityObj={cityObj}/> */}
             </Link>
           )
         })
         return citiesJSX
       }
       
      render(){

          return(

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
            {/* NEXT STEPS: MOVE CITY DATA INTO INDEXCAROUSEL, CREATE A FORM FOR NEW CITY NAME
                AND IMAGE, DYNAMICALLY ADD FORM DATA TO CAROUSEL */}
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
          )
        }
  }

export default IndexCarousel