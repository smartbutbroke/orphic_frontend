import { Box, Button, Flex, HStack, Image, Input, Link, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";


export default function Footer() {
    const [inputValue, setInputValue] = useState("");
  return (
    <Box bgColor="#f5f5f5" w="100%" h="285px">
        <Box w="100%" h="90px"></Box>
        <Flex>
            <Box marginLeft="70px">
                <Image scale="0.9" marginLeft="-2" src="/orphic-logo-for-web.png" alt="orphic logo" />
                <Text fontFamily="Helvetica" marginTop="30px" fontWeight="bold" fontSize="sm" color="black">munjalsindhav@orphic.com</Text>
                <Text fontFamily="Helvetica" fontWeight="bold" fontSize="sm" color="black">rhythmanjaria@orphic.com</Text>
            </Box>
            <Spacer />
            <Flex w="65%" justify="center" >
                <Box w="15%">
                    <Flex align="center" p="5px">
                        <Text fontFamily="Helvetica" fontSize="18px" fontWeight="bold" color="black">BRAND</Text>
                    </Flex>
                    <Link fontFamily="Helvetica" fontSize="sm" color="black" fontWeight="medium" p="5px">ABOUT US</Link>
                </Box>
                <Box w="20%">
                    <Flex align="center" p="5px">
                        <Text fontFamily="Helvetica" fontSize="18px" fontWeight="bold" color="black">BORING STUFF</Text>
                    </Flex>
                    <Link fontFamily="Helvetica" fontSize="sm" color="black" fontWeight="medium" p="5px">LEGAL NOTICE</Link>
                    <Link fontFamily="Helvetica" fontSize="sm" color="black" fontWeight="medium" p="5px">PRIVACY POLICY</Link>
                    <Link fontFamily="Helvetica" fontSize="sm" color="black" fontWeight="medium" p="5px">TERMS & CONDITIONS</Link>
                </Box>
                <Box w="15%">
                    <Flex align="center" p="5px">
                        <Text fontFamily="Helvetica" fontSize="18px" fontWeight="bold" color="black">SUPPORT</Text>
                    </Flex>
                    <Link fontFamily="Helvetica" fontSize="sm" color="black" fontWeight="medium" p="5px">RETURNS</Link>
                </Box>
                <Box w="30%">
                    <Flex align="center" justify="center">
                        <Text fontFamily="Helvetica" fontSize="18px" fontWeight="bold" color="black">JOIN THE CULT</Text>
                    </Flex>
                    <HStack gap="1" marginTop="15px">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Your Email"
                        color="black"
                        size="lg"
                        width="200px"
                        height="30px"
                        borderRadius="0px"
                        borderWidth="2px"
                        _placeholder={{ color: "gray.400" }}
                        _focus={{ borderColor: "black" }}
                    />
                    <Button borderRadius="0px" bgColor="black" color="white" height="30px">JOIN</Button>
                    </HStack>
                </Box>
            </Flex>
        </Flex>
        <Box marginTop="20px" bgColor="black" h="35px">
        <Flex align="center" justify="center" h="100%">
            <Text fontFamily="Helvetica" fontWeight="bold" fontSize="15px">ORPHIC.CO.IN ON INSTAGRAM</Text>
        </Flex>
    </Box>
    </Box>
  )
}
