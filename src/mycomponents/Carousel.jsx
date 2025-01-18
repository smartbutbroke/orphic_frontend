import {AspectRatio, Box, Image} from "@chakra-ui/react"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Time in milliseconds for each slide (3 seconds)
        arrows: false,
        pauseOnHover: false
    };

    const images = [
        { src: "/src/assets/orphic-banner-final_1.png", alt: "Banner 1" },
        { src: "/src/assets/orphic-banner_Final_2.png", alt: "Banner 2" }
    ];

  return (
    <Box w="100vw" h="100vh-90px" position="relative">
        <Slider {...settings} >
            {images.map((image, index) => (
                <AspectRatio key={index} ratio={2 / 1}>
                <Image src={image.src} alt={image.alt} objectFit="cover" />
                </AspectRatio>
            ))}
        </Slider>
    </Box>
  )
}
