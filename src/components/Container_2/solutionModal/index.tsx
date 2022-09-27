import { Box, Button, Collapse, Container, Grid, GridItem, HStack, Image, ScaleFade, SlideFade, Text, useDisclosure } from "@chakra-ui/react";
import { MdComputer, MdMobileScreenShare } from "react-icons/md";
import { SiAtom } from "react-icons/si";
import { ServiceItem } from "../serviceItem";
import Lottie from 'react-lottie'

export function SolutionModal(solutionProps) { 
   return (
      <>
         <Grid templateRows='repeat(1, 1fr)'>

            <GridItem>

               <Lottie
                     options={solutionProps.animation}
                     height={solutionProps.animationSize}
                     width={solutionProps.animationSize}
               />
               <Button bg={solutionProps.buttonColor} w='50vw' _hover={{bg:solutionProps.buttonColor, transition:'300ms'}} color={solutionProps.buttonTextColor}  onClick={solutionProps.modal.onToggle}>
                  {solutionProps.name}
               </Button>

            </GridItem>

            <Collapse in={solutionProps.modal.isOpen}  >
               <Box
                  color='salt'
                  rounded='md'
                  shadow='md'
                  mt={8}
               >
               <GridItem mt={[12,12,12,0]}>
                  <ServiceItem IconColor={solutionProps.IconColor} icon={solutionProps.icon_1} description={solutionProps.description_1} title={solutionProps.title_1}/>

                  <ServiceItem IconColor={solutionProps.IconColor} icon={solutionProps.icon_2} description={solutionProps.description_2} title={solutionProps.title_2}/>

                  <ServiceItem IconColor={solutionProps.IconColor} icon={solutionProps.icon_3} description={solutionProps.description_3} title={solutionProps.title_3}/>
               </GridItem>
               </Box>
            </Collapse >
         </Grid>
      </>
   )
}