import {Text,Box,Flex, Image} from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import productDetails from "../dummyData/products.json"
import { useEffect, useState } from "react";


export default function ProductView() {

    const navigate = useNavigate();
    const { productURL } = useParams();
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
    // Find the product from the JSON data
    const productDet = productDetails.find((item) => item.url === productURL);
    setProduct(productDet);
  }, [productURL]);

  return (
    <Box align="center" h="680px">
        {product!==null ? (
            <>
        {/* insert breadcrumb menu here and give p=30px */}
        <Flex height="700px" p="30px" gap="3">
        {/* Left Section - 60% */}
            <Box flex="6.7" color="white" display="flex" flexWrap="wrap" overflowY="auto" maxHeight="650px" p="10px" >
                    <Image p="5px" h="630px" w="490px" src="/tyler01.png" alt="no image" />
                    <Image p="5px" h="630px" w="490px" src="/tyler01.png" alt="no image" />
                    <Image p="5px" h="600px" w="490px" src="/tyler01.png" alt="no image" />
            </Box>

        {/* Right Section - 40% */}
            <Box flex="3.3" color="white" p="10px"> {/* bg="green.500" */}
                <Box p="10px" w="100%">
                    <Text fontFamily="Helvetica" fontWeight="bold" fontSize="26px" color="black">{product.productname} T-SHIRT</Text>
                </Box>
                <Box p="10px" w="100%">
                    <Text fontFamily="Objective-medium" fontSize="24px" color="black">RS. {product.price}</Text>
                </Box>
                <Box marginTop="35px">
                    <Text p="10px" fontFamily="Objective-medium" fontSize="24px" color="black">Size :</Text>
                </Box>
                <Box p="10px" w="100%">
                    <Box h="57px" w="100%" display="flex" bg="black" alignItems="center" justifyContent="center" color="white">
                        <Text fontFamily="Objective-medium" fontSize="20px" >ADD TO CART</Text>
                    </Box>
                </Box>
                <Box p="10px" w="100%">
                    <Text fontFamily="Objective-medium" fontSize="15px" whiteSpace="pre-wrap" color="black">{product.description}</Text>
                </Box>
            </Box>
        </Flex>
        </>
        ) : null}
    </Box>
  )
}
