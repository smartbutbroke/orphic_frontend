import { AspectRatio, Box, Image, Flex, Text } from "@chakra-ui/react";

export default function BrandValue() {
  return (
    <Box>
        <Flex direction="row" justify="space-between" w="100%">
            <Flex align="center" justify="center" w="50%">
                <Text marginTop="20px" fontFamily="HelveticaNow-Black" p="2px" w="80%" fontSize="2xl" color="black">
                    ORPHIC® IS A BRAND FOUNDED BY TWO FRIENDS,
                    BUILT ON A VISION OF FOSTERING COMMUNITY AND
                    CELEBRATING INDIVIDUALITY. WITH EACH PIECE,
                    ORPHIC® INSPIRES AUTHENTIC CONNECTIONS,
                    CREATING A SPACE WHERE STYLE BECOMES A FORM
                    OF PERSONAL EXPRESSION AND BELONGING.
                </Text>
            </Flex>
            <Box p="15px"w="50%">
                <Image scale="0.8" w="90%" src="/src/assets/BrandValue.png" alt="Branding image" objectFit="cover" />
            </Box>
        </Flex>
    </Box>
  )
}
