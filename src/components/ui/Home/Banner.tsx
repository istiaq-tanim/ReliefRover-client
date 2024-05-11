import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import img2 from "../../../assets/banner/chris-gallagher-4zxp5vlmvnI-unsplash.jpg";
import img1 from "../../../assets/banner/john-middelkoop-97NjFpxA5DA-unsplash.jpg";
import img3 from "../../../assets/banner/mick-haupt-tUMyurI6ojw-unsplash.jpg";

const Banner = () => {
  return (
    <div className="mt-10 w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full object-fill h-[600px]" src={img1} />
          <div className="absolute rounded-xl flex items-center justify-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 lg:pl-12 w-full text-center">
              <h2 className="text-5xl font-bold font-primary text-center">
                Cyclone
              </h2>
              <h2 className="text-3xl font-bold font-primary text-cyan-500">
                Cyclone Destroy our House
              </h2>
              <div>
                <button className="btn btn-outline border-t-0 border-x-0 border-b-4 btn-info">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover h-[600px]" src={img2} />
          <div className="absolute rounded-xl flex items-center justify-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 lg:pl-12 w-full text-center">
              <h2 className="text-5xl font-bold font-primary text-center">
                Flood Disaster
              </h2>
              <h2 className="text-3xl font-bold font-primary text-cyan-500">
                Help us from the flood disaster
              </h2>
              <div>
                <button className="btn btn-outline border-t-0 border-x-0 border-b-4 btn-info">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover h-[600px]" src={img3} />
          <div className="absolute rounded-xl flex items-center justify-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 lg:pl-12 w-full text-center">
              <h2 className="text-5xl font-bold font-primary text-center">
                Wind Storm
              </h2>
              <h2 className="text-3xl font-bold font-primary text-cyan-500">
                Wind Storm Destroys Everything
              </h2>
              <div>
                <button className="btn btn-outline border-t-0 border-x-0 border-b-4 btn-info">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
