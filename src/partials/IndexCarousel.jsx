import Slider from 'react-slick';
import React from 'react'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';



class IndexCarousel extends React.Component {
  state = {redirect:false}

  handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/cities/${id}`)
    .then(() => {
     this.setState({redirect:true})
    })
  }
  carouselItems = () => {
    const citiesJSX = this.props.cityData.map((cityObj, idx) => {
      return (
        <div className='carousel-index' key={idx}>
          <Link to={`/cities/${cityObj._id}`}>
            <h3 className='cityindexname'>{cityObj.city}</h3>
            <img className='cityindeximage' src={cityObj.image}/>
            {/* <CityShowPage cityObj={cityObj}/> */}
          </Link>
          <button className='btn-danger' 
          onClick={() => this.handleDelete(cityObj._id)}>Delete
          </button>
        </div>
      )
    })
    return citiesJSX
  }

  render() {
    if (this.state.redirect===true){
    return <Redirect to="/cities" />
    } 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,

    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
       {this.carouselItems()}
        </Slider>
      </div>
    );
  }
}


export default IndexCarousel