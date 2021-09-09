import { Component } from 'react';
import CityModel from '../models/CityModel';
import CityShowPage from '../pages/CityShowPage'
import {Link} from 'react-router-dom'
import IndexCarousel from '../partials/IndexCarousel'
// const axios = require('axios').default;
import axios from 'axios'



// Steps to render the list of cities
// - Create a component for each city
// - Need to access the database to get the game data
// - add state to maintain list of all data
class CitiesIndexPage extends Component {
  state = {
    cityData: [],
    inputVal: '',
    inputImage:''
  }

  fetchData = () =>{
    CityModel.all().then((data)=>{
      console.log(data)
      this.setState({cityData:data})
    })
  }
  
  deleteCity = (id) => {
    console.log('delete city activated')
    const cityDataArray = this.state.cityData.filter((cityObj)=>{
      console.log(cityObj._id, id)
        if( cityObj._id == id ){
          return false
        } else {
          return true
        }
    })
    this.setState({cityData:cityDataArray})
  }

  componentDidMount = () =>{
    console.log('mounted')
    //make fetch called here, or at least reference the game model which has it
    this.fetchData()
  }
  
  handleChange =(event) => {
    this.setState({inputVal:event.target.value})
  }
  handleImageChange =(event) => {
    this.setState({inputImage:event.target.value})
  }
  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
    // start out by making the axios api call to ur db in the backend, need to hit the POST route and create a new city, need the underlying route to match what is set up in the express server
    axios.post('http://localhost:4000/api/cities', {
      //pass in the object of the new city, containing the actual data that is to be added, for now it is only the name of the city
      city: this.state.inputVal,
      image: this.state.inputImage
      // the .then() returns our response from the server, the response is the data containing the new city
    }).then((response)=>{
      // because it's buried in some data we have to dig a bit to find it, look in the components tab in the google tools
      // Spread operator (...) allows us to take all the properties of an existing array and place them in a new array, low key allows you to avoid the PUSH method, which is problematic in react
      //store new array in new variable
      let updatedCityData = [...this.state.cityData, response.data]
      // set state array of cityData to new data in new variable
      this.setState({cityData:updatedCityData})
    }).catch(function(error){
      console.log(error)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='cities-index' style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/airport.jpeg')`,
        backgroundPosition: "bottom"
      }}>
        <div className='carousel-container'>
        <IndexCarousel  
        cityData={this.state.cityData}
        deleteCity={this.deleteCity}
        />
        </div>
        <h2>Add a City</h2>
        <form onSubmit={this.handleFormSubmit}>
          <input 
          type='text'
          value={this.state.inputVal}
          onChange={this.handleChange}
          />
          <h2>Add a Pic</h2>
          <input 
          type='text'
          value={this.state.inputImage}
          onChange={this.handleImageChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default CitiesIndexPage;