import React, { Component } from 'react'
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';



export default class News extends Component {


  // static defaultProps = {
  //   country: 'us',
  //   pageSize: 6,
  //   category: 'general'
  // }

  // static propTypes = {
  //   country: propTypes.string,
  //   pageSize: propTypes.number,
  //   category: propTypes.string,
  // }

  capatalize = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }
    document.title = `NewMonkey - ${this.capatalize(this.props.category)}`
  }

  async updateNews() {

    this.setState({ loading: true })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57b510932495419f9c96cb27e56e45b8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parsedData = await data.json()

    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

  }

  async componentDidMount() {

    this.updateNews()

  }

  handleNextBtn = async () => {

    this.setState({ page: this.state.page + 1 })
    this.updateNews()

  }
  handlePrevBtn = async () => {

    this.setState({ page: this.state.page - 1 })
    this.updateNews()

  }


  render() {
    return (
      <div className='container my-3'>

        {/* <div className='d-flex justify-content-between align-items-center container flex-wrap'> */}

          <h2 className='text-center' style={{ margin: "35px 0px" }}>NewsMonkey - Top {this.capatalize(this.props.category)} Headlines</h2>
          {/* <h3 style={{ margin: "35px 0px" }}>Category-{}</h3> */}
        {/* </div> */}

        {this.state.loading && <Spinner />}

        <div className='d-flex justify-content-center mt-3 flex-wrap'>

          {!this.state.loading && this.state.articles.map((element) => {
            return <div key={element.url}>

              <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />

            </div>

          })}
        </div>

        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevBtn}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextBtn}>Next &rarr;</button>
        </div>


      </div>
    )
  }
}
