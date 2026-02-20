import image from '../assets/news.jpg'

const News_Items = ({ title, description, src, url }) => {
  return (
    <div className="card premium-card mb-4 w-100 border-0">
      <div className="card-img-wrapper">
        <img
          src={src ? src : image}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = image;
          }}
          loading="lazy"
          className="card-img-top"
          alt="news"
        />
        <div className="image-overlay"></div>
      </div>

      <div className="card-body premium-card-body">
        <h5 className="card-title premium-card-title">{title ? title : "No Title Available"}</h5>
        <p className="card-text premium-card-text">{description ? description : "The latest news coverage from our reliable global sources."}</p>
        <div className="mt-auto pt-3">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary premium-btn">Read Article</a>
        </div>
      </div>
    </div>
  )
}

export default News_Items;