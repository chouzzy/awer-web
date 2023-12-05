import { Box, Button, Flex, Grid, GridItem, HStack, Image, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay ])

export function PartnersLg() {
   
   const slides = useBreakpointValue({
      base: 1, 
      sm: 1, 
      md: 3,
      lg: 4,
      xl: 4
   })

   return (
      <>
      <Box maxW={['90vw','90vw','98vw','92vw']} mx='auto' boxSizing='border-box'>
         <Swiper
            spaceBetween={2}
            slidesPerView={slides}
            navigation
            autoplay
            loop
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
         >
            
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/daterra2.png"} alt='Logo Daterra' />
               </Flex>
            </SwiperSlide>
            
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto'maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms' }} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image maxW='200px' mx='auto'  objectFit='contain' src={"static/img/clientes/lindacor.png"} alt='Banner inicial' />
               </Flex>
            </SwiperSlide>
            
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/passaporte.png"} alt='Logo Daterra' />
               </Flex>
            </SwiperSlide>
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/cursinhoFEAUSP.jpg"} alt='Logo Dr. Fenólio' />
               </Flex>
            </SwiperSlide>
            
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw'  ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px' borderRadius='10px'>
                  <Image maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/cannova.png"} alt='Logo da Cannova' />
               </Flex>
            </SwiperSlide>
            
            {/* <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/monique.png"} alt='Logo Daterra' />
               </Flex>
            </SwiperSlide> */}
            
            <SwiperSlide>
               <Flex  bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/blendquimica.png"} alt='Logo da Blendquimica' />
               </Flex>
            </SwiperSlide>
            
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/jma.svg"} alt='Logo JMA' />
               </Flex>
            </SwiperSlide>
            
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/doralice.png"} alt='Logo Doralice' />
               </Flex>
            </SwiperSlide>
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/cel_advogados.png"} alt='Logo Cecchi e Lemos' />
               </Flex>
            </SwiperSlide>
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image  bg='gray.400' maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/engepress.png"} alt='Logo Engepress' />
               </Flex>
            </SwiperSlide>
            <SwiperSlide>
               <Flex bg='#F0EFF4ea' mx='auto' maxW={['60vw','50vw','28vw','22vw' ]}
               _hover={{bg:'white', transition:'300ms'}} 
               boxShadow='xl' h='180px'  borderRadius='10px'>
                  <Image   maxW='200px' mx='auto' objectFit='contain' src={"static/img/clientes/larissa.png"} alt='Logo Dra Larissa' />
               </Flex>
            </SwiperSlide>

            

         </Swiper>
         </Box>
         
      </>
   )
}

