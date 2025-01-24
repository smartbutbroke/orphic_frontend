import Navbar from '../mycomponents/navbar'
import Carousel from '../mycomponents/Carousel'
import NewArrivals from '../mycomponents/NewArrivals'
import BrandValue from '../mycomponents/BrandValue'
import Gallery from '../mycomponents/Gallery'
import ProductView from '../mycomponents/ProductView'
import Footer from '../mycomponents/Footer'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box bgColor="white">
    <Navbar />
    {/* <Carousel/>
    <NewArrivals />
    <BrandValue />
    <Gallery /> */}
    <ProductView />
    <Footer />
    </Box>
  )
}
