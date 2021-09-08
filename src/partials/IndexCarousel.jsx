import Slider from 'react-slick';
import React from 'react'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class IndexCarousel extends React.Component {
  state = {redirect: null}

  handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/cities/${id}`)
    .then(() => {
     this.props.deleteCity(id)
    })
  }
  carouselItems = () => {
    const citiesJSX = this.props.cityData.map((cityObj, idx) => {
      return (
        <div className='carousel-index' key={idx}>
          <Link to={`/cities/${cityObj._id}`}>
            <img className='cityindeximage' src={cityObj.image}/>
            <p className='cityindexname'>{cityObj.city}</p>
            {/* <CityShowPage cityObj={cityObj}/> */}
          </Link>
          {/* <button className='btn-danger' 
          onClick={() => this.handleDelete(cityObj._id)}>Delete
          </button> */}
        </div>
      )
    })
    return citiesJSX
  }
  render() {
    // if (this.state.redirect===true){
    // return <Redirect to="/cities" />
    // } 
    if (this.state.redirect){
      return <Redirect to={this.state.redirect} />
    } 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    if (this.props.cityData.length < 3){
      settings.slidesToShow= this.props.cityData.length
    } else if  (this.props.cityData.length >= 3){
      settings.slidesToShow= 3
    }
    return (
      <div>
        <Slider {...settings}>
       {this.carouselItems()}
        </Slider>
      </div>
    );
    
  }
    
}


export default IndexCarousel