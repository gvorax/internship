import React from 'react';
import star from '../assets/stars.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const MotivationLetter = () => {
  return (
    <section className="section-5">
      <div className="main-container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <img className="stars" src={star} alt="img" />
              <p className="text">
                “Kate’s courses are a game changer. She’s thorough, organized,
                 and explains things in a no-nonsense way that makes it easy
                for anyone—beginners to experts—to learn something from her
                 courses and take their game to the next level.” {' '}
              </p>
              <span className="author"> James Brown, Influencer </span>{' '}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img className="stars" src={star} alt="img" />
              <p className="text">
                “Kate’s courses are a game changer. She’s thorough, organized,
                and explains things in a no-nonsense way that makes it easy for
                anyone—beginners to experts—to learn something from her courses
                and take their game to the next level.”
              </p>
              <span className="author"> James Brown, Influencer </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MotivationLetter;
