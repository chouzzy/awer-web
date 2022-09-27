import { Box, chakra, Container, Grid, GridItem, Heading, Image, Text, useBreakpoint, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { motion, isValidMotionProp } from 'framer-motion';
import {link as Slink} from "react-scroll"
import { RiComputerFill, RiComputerLine, RiPercentLine } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";
import { MdMobileScreenShare, MdAttachMoney, MdComputer, MdPointOfSale } from "react-icons/md";
import { GiRobotGolem, GiMoneyStack, GiGears, GiRocketThruster, GiRocketFlight } from "react-icons/gi";
import { SiAtom } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { GoLaw } from "react-icons/go";

import { C2_Header } from "./header";
import { ServiceItem } from "./serviceItem";
import { BsGear } from "react-icons/bs";
import { SolutionModal } from "./solutionModal";
import AnimationWeb from '../../../public/animations/web.json';
import AnimationManager from '../../../public/animations/manager.json';
import AnimationRobot from '../../../public/animations/robot.json';

export function Container_2() { 
   const modalWeb = useDisclosure()
   const modalManager= useDisclosure()
   const modalData = useDisclosure()

   const webAnimation = {
      loop: true,
      autoplay: true,
      animationData: AnimationWeb,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
   const managerAnimation = {
      loop: true,
      autoplay: true,
      animationData: AnimationManager,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
   const robotAnimation = {
      loop: true,
      autoplay: true,
      animationData: AnimationRobot,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

   const isDesktopVersion = useBreakpointValue( { 
      base: false,
      sm: false,
      md:false,
      lg:true,
      xl:true,
    } )

   const texto = {
      websites: {
         title:'Criação de Websites',
         description:'Nós utilizamos o famoso Framework Next JS juntamente com a linguagem de programação Javascript. Garantindo assim mais qualidade e flexibilidade para inovações e as mais novas tecnologias para o seu site!'
      },
      system: {
         title:'Sistema de gestão',
         description:'Implantar um Sistema de Gestão na organização, significa favorecer o alcance de seus objetivos com eficácia e eficiência. Conseguimos personalizar e automatizar o acompanhamento de suas vendas com as respectivas divisões e metas!'
      },
      app: {
         title:'Aplicativo de pedidos',
         description:'‍Ferramenta fundamental para aumentar a eficiência operacional da área comercial. Pedidos centralizados e organizados por status para que sua equipe fique em sintonia e seus clientes sejam informados sobre todo o processo.'
      },
      bots: {
         title:'Criação de bots',
         description:'Com a metodologia RPA, criamos robôs de software, ou “bots”, que podem aprender, simular e executar processos de negócios baseados em regras. A automação RPA permite que os usuários criem bots observando as ações digitais humanas.'
      },
      bases: {
         title:'Criação de base de clientes',
         description:'Utilizamos a linguagem de programação Python para a criação de bases de clientes para os segmentos que a sua empresa precisa.'
      },
      murdock: {
         title:'Pesquisa de processos jurídicos',
         description:'Utilizamos a linguagem de programação Python para a criação de sistemas de filtragens para encontrar os melhores processos para a sua empresa de advocacia.'
      },
      sales: {
         title:'Expansão comercial',
         description:'Combinamos nossa experiência em diferentes canais de vendas, com os contatos e conhecimentos necessários para elevar as vendas do seu negócio.'
      },
      finances: {
         title:'Gestão Financeira',
         description:'Nossa experiência em Controladoria e Gestão Financeira permite colaborar com a evolução desse fundamental tema para garantir que seus planos estão indo de acordo com o esperado!'
      },
      adm: {
         title:'Evolução Administrativa e Operacional',
         description:'Otimizar e automatizar! Unir o conhecimento em gestão de processos com tecnologias que podem acabar com demoradas rotinas diárias importantes para sua operação.'
      },
   }

   return (
      <>
         
         <Container id='#Home' maxW='100vw' minH='100vh' bg='gun' p={5} m='0' color='salt' centerContent>
            <C2_Header/>

            {isDesktopVersion?
            <>
            <Grid 
            w={['96vw','90vw','90vw','90vw']}
            textAlign='center' 
            letterSpacing={2}
            mt={12}
            columnGap={[0,0,2,2,12]}
            templateColumns='repeat(3, 1fr)'>

               <GridItem mt={[12,12,12,0]}>
                  
                  <GridItem area={'header'}  fontSize='1.7rem' color='cyan'  fontWeight='400'>
                     Desevolvimento Web
                  </GridItem>
                  <ServiceItem IconColor='cyan' icon={<MdComputer/>} description={texto.websites.description} title={texto.websites.title}/>

                  <ServiceItem IconColor='cyan' icon={<SiAtom/>} description={texto.system.description} title={texto.system.title}/>

                  <ServiceItem IconColor='cyan' icon={<MdMobileScreenShare/>} description={texto.app.description} title={texto.app.title}/>
               </GridItem>

               <GridItem mt={[24,12,12,0]}>

                  <GridItem area={'header'}  fontSize='1.7rem' color='salmon'  fontWeight='400'>
                     Gestão
                  </GridItem>
                  
                  <ServiceItem IconColor='salmon' icon={<IoRocketOutline/>} description={texto.sales.description} title={texto.sales.title}/>

                  <ServiceItem IconColor='salmon' icon={<RiPercentLine/>} description={texto.finances.description} title={texto.finances.title}/>

                  <ServiceItem IconColor='salmon'icon={<BsGear/>} description={texto.adm.description} title={texto.adm.title}/>
               </GridItem>

               <GridItem mt={[24,12,12,0]}>

                  <GridItem area={'header'}  fontSize='1.7rem' fontWeight='400'>
                     Data Science
                  </GridItem>

                  <ServiceItem icon={<GiRobotGolem/>} description={texto.bots.description} title={texto.bots.title}/>

                  <ServiceItem icon={<GoLaw/>} description={texto.murdock.description} title={texto.murdock.title}/>

                  <ServiceItem icon={<GiMoneyStack/>} description={texto.bases.description} title={texto.bases.title}/>
               </GridItem>
            </Grid>
            </>
            :
            <Grid 
            w='96vw'
            textAlign='center' 
            letterSpacing={2}
            my={12}
            rowGap={16}
            templateColumns='repeat(1, 1fr)'>

               <SolutionModal 
               IconColor='cyan' 
               buttonColor='cyan'
               buttonTextColor='salt'
               name='Desenvolvimento Web'
               animationSize={350}
               modal={modalWeb}
               description_1={texto.websites.description} 
               description_2={texto.system.description}
               description_3={texto.app.description}
               title_1={texto.websites.title} 
               title_2={texto.system.title}
               title_3={texto.app.title}
               icon_1={<MdComputer/>}
               icon_2={<SiAtom/>}
               icon_3={<MdMobileScreenShare/>}
               animation={webAnimation}
               />

               <SolutionModal 
               IconColor='salmon' 
               buttonColor='salmon'
               buttonTextColor='salt'
               name='Consultoria'
               animationSize={264}
               modal={modalManager}
               description_1={texto.sales.description}
               description_2={texto.finances.description}
               description_3={texto.adm.description}
               title_1={texto.sales.title}
               title_2={texto.finances.title}
               title_3={texto.adm.title}
               icon_1={<IoRocketOutline/>}
               icon_2={<RiPercentLine/>}
               icon_3={<BsGear/>}
               animation={managerAnimation}
               />

               <SolutionModal 
               IconColor='salt' 
               buttonColor='salt'
               buttonTextColor='gun'
               name='Data Science'
               animationSize={264}
               modal={modalData}
               description_1={texto.bots.description}
               description_2={texto.murdock.description}
               description_3={texto.bases.description}
               title_1={texto.bots.title}
               title_2={texto.murdock.title}
               title_3={texto.bases.title}
               icon_1={<GiRobotGolem/>}
               icon_2={<GoLaw/>}
               icon_3={<GiMoneyStack/>}
               animation={robotAnimation}
               />
            </Grid>
            }
            

         </Container> 
         
      </>
   )
}