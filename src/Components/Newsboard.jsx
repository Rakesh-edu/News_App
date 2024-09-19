import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const Newsboard = () => {
    const [articles,setArticles]=useState([]);
    const API_KEY="a94a368bc77b492d93ca98a85382334b";
    useEffect(()=>{
            let response=fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}
                            `).then(response=>response.json()).then(data=>setArticles(data.articles));      
    },[])
  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        <div className="container">
          <div className="row">
        {
            articles.map((news,index)=>{
                    return <div className="col-md-3 my-4">
                      <NewsItem key={index} title={news.title} desc={news.description} src={news.urlToImage} url={news.url}/>
                    </div>
            })
        }
        </div>
        </div>
    </div>
  )
}

export default Newsboard