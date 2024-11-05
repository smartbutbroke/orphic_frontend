import { Text,Box,Flex } from "@chakra-ui/react";


export default function NewArrivals() {
  return (
    // <h1 color="black">hello</h1>
    <Box align="center">
        <Flex align="center" justify="center" h="250px">
            <Text fontFamily="HelveticaNow-Bold" fontSize="3xl" color="black">NEW ARRIVALS</Text>
        </Flex>
        <Flex p="20px" h="500px" w="100%" justifyContent="space-between">
            <Box h="450px" w="500px">
                <Box h="100px" bgColor="#f5f5f5" borderRadius="10px">
                    <Text color="black">tshirt</Text>
                </Box>
                <Text p="5px" fontSize="xl" fontFamily="HelveticaNow-Black" color="black">THEWEEKND TRILOGY T-SHIRT</Text>
                <Text p="5px" fontSize="xl" fontFamily="HelveticaNow-Black" color="black">₹ 1099</Text>
            </Box>
            <Box h="450px" w="500px">
                <Box h="100px" bgColor="#f5f5f5" borderRadius="10px">
                    <Text color="black">tshirt</Text>
                </Box>
                <Text p="5px" fontSize="xl" fontFamily="HelveticaNow-Black" color="black">TYLER THE CREATOR T-SHIRT</Text>
                <Text p="5px" fontSize="xl" fontFamily="HelveticaNow-Black" color="black">₹ 1099</Text>
            </Box>
            <Box h="450px" w="500px">
                <Box h="100px" bgColor="#f5f5f5" borderRadius="10px">
                    <Text color="black">tshirt</Text>
                </Box>
                <Text p="5px" fontSize="xl" fontFamily="HelveticaNow-Black" color="black">JEEN-YUHS KANYE T-SHIRT</Text>
                <Text p="5px" fontSize="xl" fontFamily="HelveticaNow-Black" color="black">₹ 1099</Text>
            </Box>
        </Flex>
    </Box>
  )
}
