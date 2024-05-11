import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { HiMiniMinus } from "react-icons/hi2";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../../assets/Cameroon_2016_960x640.jpg";
import img5 from "../../../assets/istockphoto-1292877417-2048x2048.jpg";
import img4 from "../../../assets/istockphoto-1372606308-2048x2048.jpg";
import img3 from "../../../assets/istockphoto-1430371622-2048x2048.jpg";
import img2 from "../../../assets/istockphoto-1498170916-612x612.jpg";
import Container from "../Container";
const Gallery = () => {
  return (
    <Container>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold my-5">Gallery</h1>
        <p className="text-lg text-gray-700 px-2">
          Experience the journey of empathy and resilience as we extend a
          helping hand to communities in need. Our dynamic carousel showcases
          the heartwarming moments of relief distributions, where your support
          makes a tangible difference. With transparency at our core, explore
          the stories behind each photo and witness the impact of your
          generosity firsthand. Together, let's continue to spread hope, rebuild
          lives, and foster trust among all those we serve.
        </p>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          el: ".btn-pagination",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mt-5 mb-10"
      >
        <SwiperSlide>
          <img className="w-full h-full" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-fill" src={img1} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-fill" src={img3} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-fill" src={img4} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-fill" src={img5} />{" "}
        </SwiperSlide>
      </Swiper>
      <div className="btn-pagination flex justify-center gap-2 items-center">
        <HiMiniMinus></HiMiniMinus>
      </div>
    </Container>
  );
};

export default Gallery;
