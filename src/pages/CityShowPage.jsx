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
        image:'',
        articles:[]
    }

    componentDidMount() {
        const cityId = this.props.match.params.id
        console.log(cityId)
        CityModel.show(cityId).then((data)=>{
            console.log(data)

            this.setState({
                city: data.city,
                image: data.image,
                articles: data.articles
            })
        })
        
    }
    renderArticles = () =>{
        let articlesJSX = this.state.articles.map((article)=>{
            return(
                <div>
                    <ul>
                        <li>
                            <a href={`/cities/${this.props.match.params.id}/${article._id}`}>{article.content}</a>
                            {/* render as links to article */}
                        </li>
                    </ul>
                </div>
            )
        }) 
        return articlesJSX
    }
    render(){

        return(
            <div className='city-show-page'>
                
                <h1>{this.state.city}</h1>
                <img src={this.state.image} alt="" />
                {this.renderArticles()}
                <div>
        <h2><Link to={`/cities/${this.props.match.params.id}/create`}>Create an article</Link></h2>
          
      </div>
    </div>     
        )
    }
}
export default CityShowPage

