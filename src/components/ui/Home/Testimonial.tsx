import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// import required modules
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Container from "../Container";

const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    text: "I was extremely pleased with the quality of the product. It exceeded my expectations and provided great value for the price.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    text: "The customer service was excellent. They were responsive and helpful throughout the entire process, making it a smooth experience for me.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alex Johnson",
    text: "The attention to detail in their work is impressive. Every aspect of the project was handled with precision and care. I highly recommend their services.",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1671823917954-dc943c1bd9df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Davis",
    text: "The team demonstrated a deep understanding of my requirements. They were able to capture the essence of my vision and deliver a product that exceeded my expectations.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David Miller",
    text: "The product not only met but exceeded my expectations. It's clear that the team is dedicated to delivering high-quality work. I'm a satisfied customer.",
  },
];
const Testimonial = () => {
  return (
    <Container>
      <div className="my-10">
        <h3 className="text-center font-semibold text-3xl my-10">
          Testimonial
        </h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".btn-next-slide",
            prevEl: ".btn-prev-slide",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <img
                className="w-40 h-40 border rounded-full object-cover mb-4 mx-auto"
                src={review.image}
                alt=""
              />
              <div>
                <p className="text-[#484646] mb-4 text-center">{review.text}</p>
                <div>
                  <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user">{review.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center gap-5 mt-5">
          <div className="btn-next-slide">
            <FaArrowLeft size={20} className="text-red-300" />
          </div>
          <div className="btn-prev-slide">
            <FaArrowRight size={20} className="text-red-300" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
