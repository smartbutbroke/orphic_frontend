import { AspectRatio, Box, Image, Flex, Text } from "@chakra-ui/react";

export default function BrandValue() {
  return (
    <Box>
        <Flex direction="row" justify="space-between" w="100%">
            <Text marginTop="20px" fontFamily="HelveticaNow-Black" p="10px" w="50%" fontSize="2xl" color="black">
            ORPHIC® IS A BRAND FOUNDED BY TWO FRIENDS,
BUILT ON A VISION OF FOSTERING COMMUNITY AND
CELEBRATING INDIVIDUALITY. WITH EACH PIECE,
ORPHIC® INSPIRES AUTHENTIC CONNECTIONS,
CREATING A SPACE WHERE STYLE BECOMES A FORM
OF PERSONAL EXPRESSION AND BELONGING.
            </Text>
            <Box p="15px"w="50%">
                <AspectRatio maxH="800px" ratio={3 / 5}>
                    <Image w="90%" src="/src/assets/download.jpg" alt="Branding image" objectFit="cover" />
                </AspectRatio>
            </Box>
        </Flex>
    </Box>
  )
}
