import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { sliderData, sliderSettings } from "../utils/data";
import { Slide, SliderButtons } from "../components";
import { BsArrowRight } from "react-icons/bs";

const Collections = () => {
  return (
    <section id="explore">
      <div className="relative w-full flex flex-col md:px-12 sm:px-8 xs:px-4 py-6 z-10">
        <div className="flex sm:flex-row xs:flex-col justify-between items-center">
          <h1 className="text-white text-3xl font-medium">Top Collections</h1>
          <div className="absolute sm:right-[3%] sm:top-[5%] xs:bottom-[-10%] xs:right-[30%] flex duration-300 cursor-pointer text-white hover:text-violetBlue">
            <h2 className="text-lg font-medium mr-4 ">See more </h2>
            <span>
              <BsArrowRight size={27} />
            </span>
          </div>
        </div>
        <div className="mt-12">
          <Swiper {...sliderSettings}>
            <SliderButtons useSwiper={useSwiper} />
            {sliderData.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <Slide id={slide.id} {...slide} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Collections;
