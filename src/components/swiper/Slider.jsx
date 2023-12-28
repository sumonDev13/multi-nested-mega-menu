import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img
            src="/src/assets/icons/slide banner.svg"
            alt="Slide 1"
            className="w-full h-80 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/icons/slide banner.svg"
            alt="Slide 1"
            className="w-full h-80 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/icons/slide banner.svg"
            alt="Slide 1"
            className="w-full h-80 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
