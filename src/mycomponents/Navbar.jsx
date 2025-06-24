import {Box,Flex,HStack,IconButton,Image,Link,Text} from "@chakra-ui/react"
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

export default function Navbar() {
  return (
    <>
    <Box bgColor="white" h="90px">
        <Flex padding="10" alignItems="center" justifyContent="space-between" h="100%">
            <HStack fontFamily="Objective-medium" gap={12} alignItems="center" justify="center">
                <Link fontSize="13px" color="black">
                T-SHIRTS
                </Link >
                <Link fontSize="13px" color="black">
                SHOP
                </Link>
                <Link fontSize="13px" color="black">
                BRAND
                </Link>
                <Link fontSize="13px" color="black">
                ABOUT US
                </Link>
            </HStack>
            <Box >
                <Image src="/orphic-logo-for-web.png" alt="Orphic Logo" h="42px" mx="auto" />
            </Box>
            <HStack marginLeft="100px" p="10" gap={10} alignItems="center" justify="center">
                    <IoIosSearch size="35" color="black"/>
                    <IoCartOutline size="35" color="black"/>
                    <CiUser size="35" color="black"/>
            </HStack>
        </Flex>
    </Box>
    <Box bgColor="black" h="25px">
        <Flex align="center" justify="center" h="100%">
            <Text fontFamily="Objective-regular" fontSize="15px">B E Y O N D &nbsp;&nbsp;O R D I N A R Y &nbsp; .</Text>
        </Flex>
    </Box>
    </>
  );
}
