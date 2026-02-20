import { useState, useEffect } from "react";
import News_Items from "./News_Items";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const cat = category ? category.toLowerCase() : "general";
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => {
        console.error("Failed to fetch articles:", err);
        setArticles([]);
      });
  }, [category])
  return (
    <div className="pb-5">
      <h2 className="page-title">
        Latest <span>News</span>
      </h2>
      <div className="container py-4">
        <div className="row g-4 justify-content-center">
          {articles.length > 0 ? articles.map((news, index) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch" key={index}>
              <News_Items
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          )) : (
            <div className="col-12 text-center text-muted py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading top stories...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

}

export default Newsboard;
