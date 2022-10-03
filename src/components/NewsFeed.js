import {useEffect,useState} from 'react'
import axios from 'axios'
const NewsFeed = () => {
  const [articles,setArticles] = useState(null);
  useEffect(() => {
    
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': 'c0912a15d9msh22cda8aac17bffap17ca2fjsnf71c9aa96887',
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setArticles(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[])
  console.log(articles)

  const first7Articles = articles?.slice(0,7);

  return (
    <div className="news-feed">
            <h2>News Feed</h2>
            {first7Articles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}><p>{article.title}</p></a>
                </div>
                ))}
        </div>
  )
}

export default NewsFeed
