import '../cityShowPage.css'
import React from 'react'
import CityModel from '../models/CityModel'
import { Link } from 'react-router-dom'
// fetch data for the game in particular by it's id
/*  
*/
class CityShowPage extends React.Component{
    state = {
        city:'',
        image:''
    }

    componentDidMount() {
        const cityId = this.props.match.params.id
        console.log(cityId)
        CityModel.show(cityId).then((data)=>{
            console.log(data)

            this.setState({
                city: data.city,
                image: data.image
                
            })
        })
        
    }
    render(){
        console.log(this.props)
        return(
            <div className='city-show-page'>
                
                <h1>{this.state.city}</h1>
                <img src={this.state.image} alt="" />
                {/* Need to create articles here */}
                <div>
        <h2><Link to="/cities/:id/create">Create an article</Link></h2>
          
      </div>
    </div>     
        )
    }
}
export default CityShowPage

