import { Component } from 'react';
import CityModel from '../models/CityModel';
import CityShowPage from '../pages/CityShowPage'
import {Link} from 'react-router-dom'



// Steps to render the list of cities
// - Create a component for each city
// - Need to access the database to get the game data
// - add state to maintain list of all data
class CitiesIndexPage extends Component {
  state = {
    cityData: [],
    inputVal: ''
  }
  componentDidMount = () =>{
    //make fetch called here, or at least reference the game model which has it
    CityModel.all().then((data)=>{
      console.log(data)
      this.setState({cityData:data})
    })
  }
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
  handleChange =(event) => {
    this.setState({inputVal:event.target.value})
  }
  handleFormSubmit = (event) => {
    event.preventDefault() 
    console.log('form was submitted')
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>All Cities</h1>
        <div>{this.renderCities()}</div>
        <h2>Add a City</h2>
        <form onSumbit={this.handleFormSubmit}>
          <input 
          type='text'
          value={this.state.inputVal}
          onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default CitiesIndexPage;