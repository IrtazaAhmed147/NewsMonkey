import React, { Component } from 'react'
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';



export default class News extends Component {


  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general'
  }

  // static propTypes = {
  //   country: propTypes.string,
  //   pageSize: propTypes.number,
  //   category: propTypes.string,
  // }

  

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page:1,

    }
  }

  async componentDidMount() {
    // console.log("cdn")
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57b510932495419f9c96cb27e56e45b8&pageSize=${this.props.pageSize}`;
    let data = await fetch(url) 
    let parsedData = await data.json()
    // console.log(parsedData)
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false})

   
    // console.log(data)
  }
  
  handleNextBtn = async () =>{

    
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

    } else {
      this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57b510932495419f9c96cb27e56e45b8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url) 
    let parsedData = await data.json()
    // console.log(parsedData)
   

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
       loading:false
    })
   
  }
  }
  handlePrevBtn = async () =>{
    this.setState({loading: true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57b510932495419f9c96cb27e56e45b8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url) 
    let parsedData = await data.json()
    // console.log(parsedData)
   

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
       loading:false
    })
    
  }

  
  render() {
    return (
      <div className='container my-3'>
       

        <h1 className='text-center mt-3 mb-3' style={{margin: "35px 0px"}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className='d-flex justify-content-center mt-3 flex-wrap'>
          {!this.state.loading && this.state.articles.map((element)=> {
        return  <div key={element.url}>
               <NewsItems  title ={element.title?element.title:""} description={element.description?element.description: ""} imageUrl ={element.urlToImage} newsUrl={element.url}/> 
          </div>

          })}
        </div>

        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevBtn}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextBtn}>Next &rarr;</button>
        </div>
      
        
      </div>
    )
  }
}
