import React from 'react'
import  {useState,useEffect}from 'react'
import NewsItems from './Newsitems'
import Spinner from './Spinner'
// import LoadingBar from 'react-top-loading-bar'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News1(props) {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    
    document.title="NewaMate-"+props.category;
    const newsUpdate= async ()=>{
      // props.setProgress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e968b745946049d8ba988db530977739&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data= await fetch(url)
      // props.setProgress(30);
      let parseData=await data.json()
      setLoading(false)
      // props.setProgress(70);
      console.log(parseData)
      setArticles(parseData.articles)
      setTotalResults(parseData.totalResults)
      
      // props.setProgress(100);
      
    }
    useEffect(() => {
      // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
      newsUpdate(); 
      // eslint-disable-next-line
  }, [])
  const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e968b745946049d8ba988db530977739&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };
  return (
    <>
    <div className="container ">
    <h1 className='text-center ' style={{marginTop:"80px"}}>NewsMate- Top Headlines</h1>
    {loading && <Spinner/>}
    <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} /> 
    <div className="row my-5">
    {articles.map((element) => {
     return <div className="col-md-3" key={element.url}><NewsItems image={element.urlToImage?element.urlToImage:"https://www.turbo.fr/sites/default/files/2023-06/Zapping-TURBO-25062023.jpg"} dec={element.description} title={element.title} url={element.url} source={element.source} author={element.author} date={element.publishedAt}/></div>
    })}
     
 </div>
 
 </div>
 {/* <InfiniteScroll/> */}
 </>
  )
}
