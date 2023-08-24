import React, { Component, useState } from 'react';
import { NewsItems } from './NewsItems';
import './newscomponent.css';

export class NewsComponent extends Component{
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
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b0f7fabc33246168a52ebe4cd16ec3c&page=1`
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData)
        this.setState({
            articles : parseData.articles,
            totalResults : parseData.totalResults
        })
    }

    
    
    handleNextClick = async() =>{
        if (this.state.page > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b0f7fabc33246168a52ebe4cd16ec3c&page=${this.state.page + 1}`
            let data = await fetch(url)
            let parseData = await data.json()
    
            this.setState({
                articles : parseData.articles,
                page : this.state.page + 1
            })
        
    }
    }

    
    handlePrevClick = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2b0f7fabc33246168a52ebe4cd16ec3c&page=${this.state.page - 1}`
        let data = await fetch(url)
        let parseData = await data.json()
        
        this.setState({
            articles : parseData.articles,
            page : this.state.page - 1
        })
   
        
    }


    render(){
        return(
            <>
            <div className='container border'>
            <div class="spinner-box">
  <div class="blue-orbit leo">
  </div>

  <div class="green-orbit leo">
  </div>
  
  <div class="red-orbit leo">
  </div>
  
  <div class="white-orbit w1 leo">
  </div><div class="white-orbit w2 leo">
  </div><div class="white-orbit w3 leo">
  </div>
</div>
                <h2 className='text-center'>NEWS FAX</h2>
                <div className='row'>
                    
                    {this.state.articles.map((element, index) =>{
                        return  (<div className="col-md-4 mt-2" key={index}>
                                    <NewsItems title={element.title} 
                                    description = {element.description} 
                                    imgUrl = {element.urlToImage} 
                                    newUrl ={element.url}/>
                                </div>) 
                    })}
                </div>
                <div className="container d-flex justify-content-between mt-2 mb-4">
                <button disabled={this.state.page <=1} className="btn btn-dark mb-2" onClick ={this.handlePrevClick} type="submit"> &larr; Previous</button>
                <button disabled={this.state.page > Math.ceil(this.state.totalResults/20)} className="btn btn-dark mb-2" onClick={this.handleNextClick} type="submit">Next &rarr;</button>
                </div>
            </div>
            </>
        )
    }
}