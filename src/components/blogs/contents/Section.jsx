import React from "react";

const DisplaySection = () => {
  const blog = [
    {
      main: "Marketers' Guide: What is Enterprise SEO?",
      tags: "SEO Marketing",
      text: "Enterprise SEO has become significantly important in today's time. Explore this page to know the meaning of enterprise SEO, its benefits, and its four...",
      date: "Apr 13, 2023",
      length: "5 min read",
      imageURL:
        "https://media.istockphoto.com/id/1360521208/photo/businessman-using-a-computer-for-analysis-seo-search-engine-optimization-marketing-ranking.jpg?s=170667a&w=0&k=20&c=HwURMH_WsNCb5q0GV-YAcIq735kkb3d3gONpyzjVSJI=",
    },
    {
      main: "What Should Be Outsourced and What Should Be Done Inhouse",
      tags: "Search Engine Optimization",
      text: "Whether you're performing SEO in-house or outsourcing, you'll need to invest a lot of resources to drive traffic. Know more to ensure the right choice...",
      date: "Apr 13, 2023",
      length: "3 min read",
      imageURL:
        "https://www.shineondigital.co.uk/wp-content/uploads/2022/12/SEO-and-Local-SEO.jpg",
    },
  ];
  return (
        <>
          {blog.map((item) => (
            <article className="blogs__section-box">
              <a href="/" className="blogs__link">
                <img
                  src={item.imageURL}
                  alt="Blog"
                  className="blogs__img"
                />
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

export default DisplaySection;
