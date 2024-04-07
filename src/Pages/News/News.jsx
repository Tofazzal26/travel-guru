import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import place1 from "../../assets/images/Sajek.png";
import place2 from "../../assets/images/Sreemongol.png";
import place3 from "../../assets/images/sundorbon.png";
const News = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="mt-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1">
            <div className="space-y-8">
              <h2 className="text-8xl text-white font-semibold">Cox's bazar</h2>
              <p className="text-white text-lg">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it ...
              </p>
              <button className="btn text-black text-lg border-none bg-[#F9A51A]">
                Booking
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={place1} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={place2} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={place3} alt="" />{" "}
              </SwiperSlide>
              <SwiperSlide>
                <img src={place2} alt="" />{" "}
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
