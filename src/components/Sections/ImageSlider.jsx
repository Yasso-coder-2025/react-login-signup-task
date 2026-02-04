import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , FreeMode } from "swiper/modules";
import "swiper/css";
import { PowerImg, RichDadImg, The7HabitsImg, TheAlchemistImg, TheCraftOfResearchImg, TheDesignOfEverydayThingsImg, ThinkingFastAndSlowImg } from "../../assets/images/books/BooksImages";

const ImageSlider = () => {
  const images = [
    PowerImg,
    RichDadImg,
    The7HabitsImg,
    TheAlchemistImg,
    TheCraftOfResearchImg,
    TheDesignOfEverydayThingsImg,
    ThinkingFastAndSlowImg,
  ];

  return (
     <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto"
      spaceBetween={20}
      loop={true}
      freeMode={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide
          key={index}
          style={{ width: "250px" }}
        >
          <img
            src={img}
            className="w-full h-40 object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
