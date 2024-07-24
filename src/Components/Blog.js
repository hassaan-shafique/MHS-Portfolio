import React from 'react'
import BlogData from "./BlogData";
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <>
      <section id="blogs">
        <h1 className="blog-head"> Blogs</h1>

        <div className="blog-main">
          {BlogData.map((blog) => {
            return (
              <Link to="https://medium.com/@hassaanshafique398" target="_blank">
                <div className="blog-data" key={blog.id}>
                  <img
                    width={330}
                    height={280}
                    src={blog.imageUrl}
                    alt={blog.title}
                  />
                  <div className="blog-title">
                    <h4> {blog.title} </h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="div-certificate-more-btn">
          <button className="blog-more-btn">Explore More Blogs</button>
        </div>
      </section>
    </>
  );
}

export default Blog
