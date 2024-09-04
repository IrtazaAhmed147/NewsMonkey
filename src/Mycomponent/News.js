import React, { Component } from 'react'
import NewsItems from "./NewsItems";

export default class News extends Component {

  articles =  [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "England vs Sri Lanka LIVE: Second Test, day one, Lord's – cricket score, radio commentary, video highlights and text updates",
      "description": "England host Sri Lanka in the second Test at Lord's – follow text updates, radio commentary and video highlights.",
      "url": "http://www.bbc.co.uk/sport/cricket/live/c0vv7nye1nwt",
      "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      "publishedAt": "2024-08-29T09:52:11.9261931Z",
      "content": "Alongside minimal preparation time, the other factor that had an effect on Sri Lanka was the weather. \r\nThe Old Trafford pitch may have suited them quite well but the temperatures certainly didn't. I… [+177 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false 

    }
  }

  async componentDidMount() {
    // console.log("cdn")
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=57b510932495419f9c96cb27e56e45b8";
    let data = await fetch(url) 
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
    // console.log(data)
  }
  

  
  render() {
    return (
      <div>
        <h1 className='text-center mt-3'>News</h1>
        <div className='d-flex justify-content-center mt-3 flex-wrap'>
          {this.state.articles.map((element)=> {
        return  <div key={element.url}>
               <NewsItems  title ={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88): ""} imageUrl ={element.urlToImage} newsUrl={element.url}/> 
          </div>

          })}

       
       
        </div>
      
        
      </div>
    )
  }
}
