import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { Box } from "@chakra-ui/react";
import { Content } from "./Content";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import styles from "./carousel.module.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carousel() {
  return (
    <>
      <Box marginBottom="16" marginX="auto">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className={styles.swiper_container}
        >
          <SwiperSlide>
            <Content
              imageSrc="/img/Africa.jpg"
              imageAlt="África"
              title="África"
            >
              O continente mais antigo
            </Content>
          </SwiperSlide>
          <SwiperSlide>
            <Content
              imageSrc="/img/America.jpg"
              imageAlt="América"
              title="América"
            >
              Vivência experiências incriveis
            </Content>
          </SwiperSlide>
          <SwiperSlide>
            <Content imageSrc="/img/Asia.jpg" imageAlt="Ásia" title="Ásia">
              Conheça novas culturas
            </Content>
          </SwiperSlide>
          <SwiperSlide>
            <Content
              imageSrc="/img/Europe.jpg"
              imageAlt="Europa"
              title="Europa"
            >
              Viagens inesquecíveis
            </Content>
          </SwiperSlide>
          <SwiperSlide>
            <Content
              imageSrc="/img/Oceania.jpg"
              imageAlt="Oceânia"
              title="Oceânia"
            >
              Grandes ilhas
            </Content>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
