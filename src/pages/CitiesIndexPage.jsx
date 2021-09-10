import { Component } from "react";
import CityModel from "../models/CityModel";
import CityShowPage from "../pages/CityShowPage";
import { Link } from "react-router-dom";
import IndexCarousel from "../partials/IndexCarousel";
// const axios = require('axios').default;
import axios from "axios";
import Header from "../components/Header";
import CreateCity from "../pages/CreateCity"

// Steps to render the list of cities
// - Create a component for each city
// - Need to access the database to get the game data
// - add state to maintain list of all data
class CitiesIndexPage extends Component {
  state = {
    cityData: []
  };

  fetchData = () => {
    CityModel.all().then((data) => {
      console.log(data);
      this.setState({ cityData: data });
    });
  };

  // deleteCity = (id) => {
  //   console.log("delete city activated");
  //   const cityDataArray = this.state.cityData.filter((cityObj) => {
  //     console.log(cityObj._id, id);
  //     if (cityObj._id == id) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   this.setState({ cityData: cityDataArray });
  // };

  componentDidMount = () => {
    console.log("mounted");
    //make fetch called here, or at least reference the game model which has it
    this.fetchData();
  };


  render() {
    console.log(this.state);
    return (
      <div
        className="cities-index"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/airport.jpeg')`,
          backgroundPosition: "bottom",
        }}
      >
        <div className="head">{/* <Header /> */}</div>

        <div className="main">
          <div className="carousel-container">
            <IndexCarousel
              cityData={this.state.cityData}
              // deleteCity={this.deleteCity}
            />
          </div>
          <p />
         
           <Link  to="/create"> 
           <img className='plus-sign' src={`${process.env.PUBLIC_URL}/images/plussign.png`} />
           </Link>
          
        </div>
      </div>
    );
  }
}

export default CitiesIndexPage;
