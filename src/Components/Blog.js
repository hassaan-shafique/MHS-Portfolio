import React from "react";
import BlogData from "./BlogData";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section id="blogs">
      <h1 className="blog-head">Blogs</h1>

      <div className="blog-main">
        {BlogData.map(({ id, imageUrl, title, link }) => (
          <Link
            to={{ pathname: link || "https://medium.com/@hassaanshafique398" }}
            target="_blank"
            rel="noopener noreferrer"
            key={id}
          >
            <div className="blog-data">
              <img width={330} height={280} src={imageUrl} alt={title} />
              <div className="blog-title">
                <h4>{title}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="div-certificate-more-btn">
        <Link
          to="https://medium.com/@hassaanshafique398"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="blog-more-btn">More Blogs</button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
