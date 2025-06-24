import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Text, Image, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Gallery() {
    

  return (
    <Box align="center" h="820px">
        <Flex align="center" justify="center" h="250px">
            <Text fontFamily="HelveticaNow-Bold" fontSize="3xl" color="black">GALLERY</Text>
        </Flex>
        <Box w="100%">
            <Flex gap="2px"align="center" justify="space-between">
            <Box w="25%">
            <Image
                src="/download.jpg" // Replace with your actual image path
                alt="Image 1"
                objectFit="cover"
                width="100%" // Make the image take up the full width of its container
                height="500px" // Set a fixed height (adjustable)
            />
            </Box>
            
            {/* Image 2 */}
            <Box w="25%" >
            <Image
                src="/download.jpg"
                alt="Image 2"
                objectFit="cover"
                width="100%"
                height="500px"
            />
            </Box>

            {/* Image 3 */}
            <Box w="25%" >
            <Image
                src="/download.jpg"
                alt="Image 3"
                objectFit="cover"
                width="100%"
                height="500px"
            />
            </Box>

            {/* Image 4 */}
            <Box w="25%">
            <Image
                src="/download.jpg"
                alt="Image 4"
                objectFit="cover"
                width="100%"
                height="500px"
            />
            </Box>
            </Flex>
        </Box>
    </Box>
  )
}
