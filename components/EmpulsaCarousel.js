import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination, Navigation]);

export default function EmpulsaCarousel({
  navigation,
  pagination,
  slidesPerView = 1,
  slideNextClass = 'swiper-slide-next',
  slidePrevClass = 'swiper-slide-prev',
}) {
  return (
    <Swiper
      speed={600}
      slidesPerView={slidesPerView}
      slideNextClass={slideNextClass}
      slidePrevClass={slidePrevClass}
      style={{
        '--swiper-pagination-color': '#FC8C17',
        '--swiper-navigation-color': '#FFFFFF',
        '--swiper-navigation-size': '5',
      }}
      pagination={
        pagination
          ? {
            clickable: true,
            type: 'bullets',
          }
          : false
      }
      navigation={navigation}
      className="empulsaCarousel"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
