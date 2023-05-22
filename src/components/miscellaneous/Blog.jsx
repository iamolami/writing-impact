import React from "react";
import blog from "../../data/blog";

const DisplayBlog = () => {
  return (
    <section className="section blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>All Resources For Your Content Journey</h3>
          </div>
          <div className="col-md-12">
            <a href="/blogs">
              <button className="thm-btn">View All</button>
            </a>
          </div>
        </div>
        <div className="blog__grid">
          {blog.map((item) => (
            <div className="blog__grid-box">
              <a href="/">
                <img src={item.imageURL} alt="Blog" className="blog__img" />
              </a>
              <a href="/">
                <div className="blog__content">
                  <div className="blog__content-tags">
                    <span>{item.tags}</span>
                  </div>
                  <h2 className="blog__content-main">{item.main}</h2>
                  <p className="blog__content-text">{item.text}</p>
                  <footer className="blog__content-footer">
                    <time class="blog__content-time" datetime="2023-04-13">
                      {item.date}
                    </time>
                    <span className="blog__content-length">{item.length}</span>
                  </footer>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisplayBlog;
