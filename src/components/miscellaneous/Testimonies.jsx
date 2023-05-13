import React, { useRef, useEffect } from "react";
import Separator from "./Separator";
import testimony from "../../data/testimony";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { register } from "swiper/element/bundle";
register();

const DisplayTestimonies = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="section testimony">
      <div className="container">
        <div className="thmtitle">
          <h3>Hear From Our Happy Customers</h3>
        </div>
        <Separator />
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {testimony.map((item) => (
            <SwiperSlide>
              <div className="row testimony__row">
                <div className="col-md-8">
                  <div className="testimony__owner">
                    <img src={item.imageURL} alt="user" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="testimony__top">
                    <div className="testimony__top-img">
                      <img
                        src={item.company}
                        alt="User"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                      />
                    </div>
                    <div className="testimony__top-content">
                      <h3>{item.username}</h3>
                      <span>{item.position}</span>
                    </div>
                  </div>
                  <div className="testimony__text">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default DisplayTestimonies;
