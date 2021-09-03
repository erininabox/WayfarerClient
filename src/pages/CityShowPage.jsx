import React from 'react'
import CityModel from '../models/CityModel'

// fetch data for the game in particular by it's id

/*  

*/

class CityShowPage extends React.Component{
    state = {
        city:'',
        image:''
    }

    componentDidMount() {
        const cityId = this.cityObj
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
            <div>
                <h1>City Show Page</h1>
                <h3>{this.state.city}</h3>
                {/* <img src={this.state.image} alt="" /> */}
            </div>     
        )
    }

}
export default CityShowPage