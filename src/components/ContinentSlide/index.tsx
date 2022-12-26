import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Box } from '@chakra-ui/react';
import { SliderItem } from './SliderItem';

SwiperCore.use([Navigation, Pagination])

interface Continent {
    id: string;
    name: string;
    shortDescription: string;
    continentImage: string;
  }
  interface ContinentsSlideProps {
    continents: Continent[];
  }

export function ContinentSlide({ continents }: ContinentsSlideProps) {
    return (
        <Box mt="3.25rem" mb="2.5rem" maxHeight="450px">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                grabCursor
                modules={[Navigation, Pagination]}
                >
                    { continents.map(continent => (
                        <SwiperSlide key={continent.id}>
                            <SliderItem 
                                continentSlug={continent.id}
                                continentName={continent.name}
                                continentImage={continent.continentImage}
                                continentShortDescription={continent.shortDescription} />
                        </SwiperSlide>
                    )) }
                

            </Swiper>
        </Box>
    )
}