import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import Slide from './Slide';
SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFade]);

export default function Slider() {
  const data = [
    {
      image: '/assets/cat.jpg',
      service: 'Vaccination',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fugiat?',
    },
    {
      image: '/assets/dog-card.jpg',
      service: 'Shaving and Bath',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fugiat?',
    },
    {
      image: '/assets/hamster-card.jpg',
      service: 'Cleaning',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fugiat?',
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      effect="fade"
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {data.map((i) => (
        <SwiperSlide>
          <Slide key={i.image} data={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
