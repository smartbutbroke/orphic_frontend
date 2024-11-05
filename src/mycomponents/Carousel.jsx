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
        { src: "/src/assets/orphic-web-banner-.png", alt: "banner" },
        { src: "/src/assets/download.jpg", alt: "Image 1" },
        { src: "/src/assets/download1.jpg", alt: "Image 2" }, // Replace with your image paths
        { src: "/src/assets/download2.jpg", alt: "Image 3" }, // Replace with your image paths
    ];

  return (
    <Box w="100vw" position="relative">
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
