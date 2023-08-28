import React, { Component } from 'react';
import { NewsItems } from './NewsItems';
import { Loadings } from './Loadings'

export class NewsComponent extends Component{
    
    static defualtProps = {
        country : 'in',
        category : 'general'
    }

    constructor(){
        super()
        this.state ={
            articles : [],
            totalResults : null,
            loading : false,
            page : 1
        }
    }

    componentDidMount = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2b0f7fabc33246168a52ebe4cd16ec3c&page=${this.state.page}`
        this.setState({loading: true});
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData.articles)
        this.setState({
            articles : parseData.articles,
            totalResults : parseData.totalResults,
            loading : false,
        })
        console.log(this.state.totalResults)
    }

    
    
    handleNextClick = async() =>{
        if (!(this.state.page >= Math.ceil(this.state.totalResults/20))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2b0f7fabc33246168a52ebe4cd16ec3c&page=${this.state.page + 1}`
            this.setState({loading: true});
            let data = await fetch(url)
            let parseData = await data.json()
            this.setState({
                articles : parseData.articles,
                totalResults : parseData.totalResults,
                page : this.state.page + 1,
                loading: false
            })
            
        }
    }

    
    handlePrevClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2b0f7fabc33246168a52ebe4cd16ec3c&page=${this.state.page - 1}`
        this.setState({loading: true});
        let data = await fetch(url)
        let parseData = await data.json() 
        this.setState({
            articles : parseData.articles,
            page : this.state.page - 1,
            loading: false
        })
   
        
    }


    render(){
        return(
            <>
            <div className='container border'>
            <h2 className='text-center text-white m-4'>NEWS WEB</h2>
            <div className="d-flex justify-content-center">
                {this.state.loading && <Loadings />}
            </div>  
                <div className='row'>
                    
                    {this.state.articles.map((element, index) =>{
                        return  (<div className="d-flex justify-content-center col-md-4 mt-2" key={index}>
                                    <NewsItems title={element.title} 
                                    description = {element.description} 
                                    imgUrl = {element.urlToImage} 
                                    newUrl ={element.url}/>
                                </div>) 
                    })}
                </div>
                <div className="container d-flex justify-content-between mt-2 mb-4">
                <button disabled={this.state.page <=1} className="btn btn-dark mb-2" onClick ={this.handlePrevClick} type="submit"> &larr; Previous</button>
                <button disabled={this.state.page >= Math.ceil(this.state.totalResults/20)} className="btn btn-dark mb-2" onClick={this.handleNextClick} type="submit">Next &rarr;</button>
                </div>
            </div>
            </>
        )
    }
}