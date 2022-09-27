import { Box, Button, Collapse, Container, Grid, GridItem, HStack, Image, Input, Link, Text, Textarea, useDisclosure } from "@chakra-ui/react";

import Lottie from 'react-lottie'
import animationData from '../../../public/animations/mail.json';
import { C6_Header } from "./header";
import { useForm } from 'react-hook-form'
import { useState } from "react";

export function Container_6() { 
   const [disable, setDisable] = useState(false)
   const [color, setColor] = useState('salmon')
   const [buttonTextColor, setButtonTextColor] = useState('salt')
   const [sentText, setSentText] = useState('Enviar')
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
   
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm()
  
    function onSubmit(values) {
      setDisable(true)
      setColor('cyan')
      setButtonTextColor('gun')
      setSentText('Enviado ✔')
      console.log(values)
      return new Promise(() => {
        setTimeout(() => {
         fetch('/api/mail', {
            method:'post',
            body:JSON.stringify(values)
         })
       }, 2000)
      })
    }

   return (
      <>
         
         <Container id='#contatos' maxW='100vw' minH='80vh' bg='gun' p={5} m='0' color='salt' centerContent>
            <C6_Header/>
            <Grid maxW='80vw' my={8} alignItems='center' templateColumns={'repeat(8, 1fr)'} >

               <GridItem colSpan={[3,4,2,2]} colStart={[1,1,1,1]}>
               <Lottie 
                  options={defaultOptions}
                  cursor='none'
               />
               </GridItem>

               <GridItem colSpan={[5,4,2,2]} colStart={[4,6,3,3]}>

                  <Text color='salmon' fontSize='1.2rem'  cursor='pointer' mb={2}>
                     Nossos contatos:
                  </Text>

                  <Link _hover={{color:'salmon', textDecoration:'none'}} href="tel:+5516992679694">
                     <Text textDecoration='none'  cursor='pointer' mb={2}>
                        +55 (16) 99267-9694
                     </Text>   
                  </Link>

                  <Link _hover={{color:'salmon', textDecoration:'none'}}
                   href="mailto: contato@awer.co">
                     <Text cursor='pointer' display='inline'>contato@awer.co</Text>
                  </Link>

               </GridItem>

               <GridItem mt={[8,8,0,0]} colSpan={[8,8,4,4]} colStart={[1,1,5,5]}>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <Text>Empresa/ Pessoa:</Text>
                  <Input
                  type='name'
                  my='10px'
                  placeholder='Digite o nome de sua empresa'
                  isRequired={true}
                  size='sm'
                  borderRadius={4}
                  {...register("Empresa")}
                  />
                  <Text >Assunto:</Text>
                  <Input
                  type='text'
                  my='10px'
                  placeholder='Assunto'
                  isRequired={true}
                  size='sm'
                  borderRadius={4}
                  {...register("Assunto")}
                  />

                  <Text >Mensagem:</Text>
                  <Textarea
                  my='10px'
                  placeholder='Mensagem'
                  isRequired={true}
                  borderRadius={4}
                  {...register("Mensagem")}
                  />

                  <Button
                    size='md'
                    cursor='pointer'
                    bg={color}
                    color={buttonTextColor}
                    disabled={disable}
                    type='submit'>
                    {sentText}
                  </Button>
                  </form>
               </GridItem>
            </Grid>
            
         </Container> 
         
      </>
   )}
