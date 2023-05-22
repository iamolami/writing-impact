import React from "react";
import blog from "../../../data/blog";

const DisplayBlog = () => {

  return (
        <>
          {blog.map((item) => (
            <article className="blogs__postCard">
              <a href="/">
                <img src={item.imageURL} alt="Blog" className="blog__img" />
              </a>
              <a href="/">
                <div className="blogs__content">
                  <div className="blogs__content-tags">
                    <span>{item.tags}</span>
                  </div>
                  <h2 className="blogs__content-main">{item.main}</h2>
                  <p className="blogs__content-text">{item.text}</p>
                  <footer className="blogs__content-footer">
                    <time class="blogs__content-time" datetime="2023-04-13">
                      {item.date}
                    </time>
                    <span className="blogs__content-length">{item.length}</span>
                  </footer>
                </div>
              </a>
            </article>
          ))}
        </>
  );
};

export default DisplayBlog;
