import { Text,Box,Flex,Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function NewArrivals() {

    const navigate = useNavigate()

  return (
    // <h1 color="black">hello</h1>
    <Box align="center" h="900px">
        <Flex align="center" justify="center" h="250px">
            <Text fontFamily="HelveticaNow-Bold" fontSize="3xl" color="black">NEW ARRIVALS</Text>
        </Flex>
        <Flex p="20px" h="500px" w="100%" justifyContent="space-between">
            <Box h="450px" w="500px">
                <Box h="500px" bgColor="#f5f5f5" borderRadius="10px" cursor="pointer" onClick={() => navigate("/product/THEWEEKND-TRILOGY")}>
                    <Flex h="500px" align="center" justify="center">
                        <Image src="/Trilogy-for-web.png" />
                    </Flex>
                </Box>
                <Text p="5px" fontSize="lg" fontFamily="Objective-medium" marginTop="15px" color="black">THEWEEKND TRILOGY T-SHIRT</Text>
                <Text p="5px" fontSize="lg" fontFamily="Objective-medium" marginTop="3px" color="black">₹ 1099</Text>
            </Box>
            <Box h="450px" w="500px">
                <Box h="500px" bgColor="#f5f5f5" borderRadius="10px" cursor="pointer" onClick={() => navigate("/product/TYLER-THE-CREATOR")}>
                    <Flex h="500px" align="center" justify="center">
                        <Image src="/Tyler-for-web.png" />
                    </Flex>
                </Box>
                <Text p="5px" fontSize="lg" fontFamily="Objective-medium" marginTop="15px" color="black">TYLER THE CREATOR T-SHIRT</Text>
                <Text p="5px" fontSize="lg" fontFamily="Objective-medium" marginTop="3px" color="black">₹ 1099</Text>
            </Box>
            <Box h="450px" w="500px">
                <Box h="500px" bgColor="#f5f5f5" borderRadius="10px" cursor="pointer" onClick={() => navigate("/product/JEEN-YUHS-KANYE")}>
                    <Flex h="500px" align="center" justify="center">
                        <Image src="/kanye-for-web.png" />
                    </Flex>
                </Box>
                <Text p="5px" fontSize="lg" fontFamily="Objective-medium" marginTop="15px" color="black">JEEN-YUHS KANYE T-SHIRT</Text>
                <Text p="5px" fontSize="lg" fontFamily="Objective-medium" marginTop="3px" color="black">₹ 1099</Text>
            </Box>
        </Flex>
    </Box>
  )
}
