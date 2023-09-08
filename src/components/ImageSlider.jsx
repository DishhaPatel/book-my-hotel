import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function ImageSlider({ images, imgClassName, maxWidth = "unset" }) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation]}
      navigation
      style={{
        "--swiper-navigation-color": "#fff",
        maxWidth,
      }}
    >
      {images.map((url) => (
        <SwiperSlide key={url}>
          <img src={url} className={imgClassName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
