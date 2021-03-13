import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
import Slide from './Slide';
SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFade]);

export default function Slider() {
  const data = [
    {
      human: '/assets/avatar-1.jpg',
      animal: '/assets/animal-avatar-1.jpg',
      name: 'Jack & Meowy',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicingsit amet consectetur adipisicingsit amet consectetur adipisicing elit. Nesciunt, fugiat?',
    },
    {
      human: '/assets/avatar-2.jpg',
      animal: '/assets/animal-avatar-2.jpg',
      name: 'Martin & Bold',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicingsit amet consectetur adipisicingsit amet consectetur adipisicingsit amet consectetur adipisicing elit. Nesciunt, fugiat?',
    },
    {
      human: '/assets/avatar-3.jpg',
      animal: '/assets/animal-avatar-3.jpg',
      name: 'Helen & Dotted',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fugiat?',
    },
    {
      human: '/assets/avatar-4.jpg',
      animal: '/assets/animal-avatar-4.jpg',
      name: 'Emily & Commander',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fugiat?',
    },
  ];
  return (
    <Swiper
      spaceBetween={1}
      effect="fade"
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {data.map((i) => (
        <SwiperSlide>
          <Slide data={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
