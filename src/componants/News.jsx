import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    

  constructor(){
    super();
    this.state = {
      articles: [],    
      loading: false,
      page: 1
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bc8974cba0624550883964c960ff025e&page=1pageSize-20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles})
  }
  handalePreviousClick = async()=>{

    
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bc8974cba0624550883964c960ff025e&page=${this.state.page - 1}pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
      

  }
  handaleNextClick = async()=>{


    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bc8974cba0624550883964c960ff025e&page=${this.state.page + 1}pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
      
    
  }

  render() {
    return (
      <div>
        <h1 className='mt-5 text-center py-5'> Top business headlines in the India right now </h1>
        <div className='container mt-3 py-4'>
          
          <div className="row mb-1">
          {this.state.articles.map((element)=>{
                return <div className="col-md-4 mb-2">
                <NewsItem  title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 80):""} urlToImage={element.urlToImage?element.urlToImage:""} newsUrl={element.url}/>
            </div>
          })}   
          </div>  
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handalePreviousClick}> Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handaleNextClick}>Next</button>

        

        </div>
      </div>
    )
  }
}

export default News
