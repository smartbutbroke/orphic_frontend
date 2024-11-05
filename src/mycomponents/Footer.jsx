import { Box, Button, Flex, HStack, Image, Input, Link, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";


export default function Footer() {
    const [inputValue, setInputValue] = useState("");
  return (
    <Box bgColor="#f5f5f5" w="100%" h="350px">
        <Box w="100%" h="90px"></Box>
        <Flex>
            <Box marginLeft="70px">
                <Image scale="1.1" src="/src/assets/orphic-logo-for-web.png" alt="orphic logo" />
                <Text marginTop="30px" fontWeight="bold" fontSize="lg" color="black">munjalsindhav@orphic.com</Text>
                <Text fontWeight="bold" fontSize="lg" color="black">rhythmanjaria@orphic.com</Text>
            </Box>
            <Spacer />
            <Flex w="70%" justify="center" >
                <Box w="15%">
                    <Flex align="center" p="5px">
                        <Text fontSize="xl" fontWeight="bold" color="black">BRAND</Text>
                    </Flex>
                    <Link color="black" fontWeight="medium" p="5px">ABOUT US</Link>
                </Box>
                <Box w="20%">
                    <Flex align="center" p="5px">
                        <Text fontSize="xl" fontWeight="bold" color="black">BORING STUFF</Text>
                    </Flex>
                    <Link color="black" fontWeight="medium" p="5px">LEGAL NOTICE</Link>
                    <Link color="black" fontWeight="medium" p="5px">PRIVACY POLICY</Link>
                    <Link color="black" fontWeight="medium" p="5px">TERMS & CONDITIONS</Link>
                </Box>
                <Box w="15%">
                    <Flex align="center" p="5px">
                        <Text fontSize="xl" fontWeight="bold" color="black">SUPPORT</Text>
                    </Flex>
                    <Link color="black" fontWeight="medium" p="5px">RETURNS</Link>
                </Box>
                <Box w="30%">
                    <Flex align="center" justify="center">
                        <Text fontSize="xl" fontWeight="bold" color="black">JOIN THE CULT</Text>
                    </Flex>
                    <HStack gap="1" marginTop="15px">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Your Email"
                        color="black"
                        size="lg"
                        width="300px"
                        height="45px"
                        borderRadius="0px"
                        borderWidth="2px"
                        _placeholder={{ color: "gray.400" }}
                        _focus={{ borderColor: "black" }}
                    />
                    <Button borderRadius="0px" bgColor="black" color="white" height="45px">JOIN</Button>
                    </HStack>
                </Box>
            </Flex>
        </Flex>
    </Box>
  )
}
