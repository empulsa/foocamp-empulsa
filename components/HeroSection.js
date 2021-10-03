import { SwiperSlide } from 'swiper/react';
import HeroItem from './HeroItem';
import EmpulsaCarousel from './EmpulsaCarousel';

export default function HeroSection({ fields }) {
  const { heroItems } = fields;
  return (
    <>
      <EmpulsaCarousel pagination loop slidesPerView={1} spaceBetween={20}>
        {heroItems.map((heroItem) => (
          <SwiperSlide key={heroItem.sys.id}>
            <HeroItem fields={heroItem.fields} />
          </SwiperSlide>
        ))}
      </EmpulsaCarousel>
    </>
  );
}
