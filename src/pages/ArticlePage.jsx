import React from 'react'
import ArticleModel from '../models/ArticleModel'
class ArticlePage extends React.Component{
    state = {
        content:''
    }

    componentDidMount(){
        const articleId = this.props.match.params.articleId
        const cityId = this.props.match.params.cityId

        console.log(articleId)
        ArticleModel.show(articleId, cityId).then((data)=>{
            console.log(data)

            this.setState({
                content:data.content
            })
        })

    }
    setHTML = ()=>{
        return{
            __html:this.state.content
        }

    }
    render(){
        console.log(this.props)
        return(

        <div className='article-show-page'>

            <div dangerouslySetInnerHTML={this.setHTML()}>
                
            </div>
        </div>
        )
    }
}
   
  

export default ArticlePage