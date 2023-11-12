import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const SliderButtons = ({ useSwiper }) => {
  const swiper = useSwiper();
  return (
    <div>
      <BsFillArrowLeftCircleFill
        size={45}
        className="absolute top-[50%] sm:left-[1%] xs:left-[3%] shadow-2xl bg-oxfordBlue2 text-violetBlue text-6xl rounded-full cursor-pointer"
        onClick={() => swiper.slidePrev()}
      />
      <BsFillArrowRightCircleFill
        size={45}
        className="absolute top-[50%] sm:right-[2%] xs:right-[3%] shadow-2xl bg-oxfordBlue2 text-violetBlue text-6xl rounded-full cursor-pointer z-10"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

export default SliderButtons;
