import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function EmpulsaCarousel({
  navigation = false,
  pagination = false,
  centeredSlides = false,
  autoplay = false,
  spaceBetween = 0,
  slidesPerView = 1,
  carouselClassName = '',
  loop = false,
  slidesPerGroup = 1,
  children,
}) {
  return (
    <Swiper
      speed={800}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      centeredSlides={centeredSlides}
      centerInsufficientSlides
      spaceBetween={spaceBetween}
      loop={loop}
      style={{
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
      autoplay={autoplay}
      className={carouselClassName}
    >
      {children.map((child, index) => (
        <SwiperSlide
          key={child.key ? child.key : `${carouselClassName}${index}`}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
