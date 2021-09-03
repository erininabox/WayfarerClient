import { Component } from 'react';
import CityModel from '../models/CityModel';
import City from '../components/City'
import {Link} from 'react-router-dom'


// Steps to render the list of cities
// - Create a component for each city
// - Need to access the database to get the game data
// - add state to maintain list of all data

class CitiesIndexPage extends Component {

  state = {
    cityData: []
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
            {/* <h3>{cityObj.city}</h3> */}
          <City cityObj={cityObj}/>
        </Link>
      )
    })
    return citiesJSX

  }
  render() {
    console.log(this.state)
    return (
      <main>
        <h1>All Cities</h1>
        <div>{this.renderCities()}</div>
      </main>
    );
  }
}

export default CitiesIndexPage;