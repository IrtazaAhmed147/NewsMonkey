import React, { Component } from 'react'
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";





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

  capatalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,

    }
    document.title = `NewMonkey - ${this.capatalize(this.props.category)}`
  }

  async updateNews() {

    this.props.setProgress(10)

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setProgress(30)

    let parsedData = await data.json()
    this.props.setProgress(70)

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {

    this.updateNews()

  }

  // handleNextBtn = async () => {

  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews()

  // }
  // handlePrevBtn = async () => {

  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews()

  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })


    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parsedData = await data.json()

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      


    })

  };



  render() {
    return (

      <>



        <h2 className='text-center' style={{ margin: "35px 0px" }}>NewsMonkey - Top {this.capatalize(this.props.category)} Headlines</h2>


        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >

          <div className="container my-3">


            <div className='d-flex justify-content-center mt-3 flex-wrap'>

              {this.state.articles.map((element, index) => {
                return <div key={`${element.url}-${index}`}>

                  <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />

                </div>

              })}
            </div>
          </div>

        </InfiniteScroll>





      </>
    )
  }
}
