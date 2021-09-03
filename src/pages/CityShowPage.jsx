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
            <main>
                <h1>City Show Page</h1>
                <h3>{this.state.city}</h3>
                <img src={this.state.image} alt="" />
            </main>     
        )
    }

}
export default CityShowPage