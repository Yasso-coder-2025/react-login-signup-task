import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , FreeMode } from "swiper/modules";
import "swiper/css";
import { PowerImg, RichDadImg2, The7HabitsImg, TheAlchemistImg2, TheCraftOfResearchImg, TheDesignOFBooksImg, TheDesignOfEverydayThingsImg, ThinkingFastAndSlowImg } from "../../assets/images/books/BooksImages";

const ImageSlider = () => {
  const images = [
    RichDadImg2,
    TheDesignOfEverydayThingsImg,
    PowerImg,
    TheCraftOfResearchImg,
    TheDesignOFBooksImg,
    ThinkingFastAndSlowImg,
    The7HabitsImg,
    TheAlchemistImg2,
  ];

  return (
     <Swiper
      modules={[Autoplay , FreeMode]}
      slidesPerView="auto"
      spaceBetween={20}
      loop={true}
      freeMode={{
        enabled: true,
        momentum: false,
      }}
      speed={6000}
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
          style={{ width: "200px "}}
        >
          <div className="h-65">
            <img
              src={img}
              className="h-full object-fill rounded-xl cursor-pointer"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
