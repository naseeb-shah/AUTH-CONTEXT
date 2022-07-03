import {log} from './App'
import { Button, Center, Heading,Box, Divider } from '@chakra-ui/react'
import{useEffect, useState} from 'react'
export default function About(){
   const [page,setpa]=useState("Home")
   useEffect(() => {
      document.title = page;  
    }, [page]);
     return(
        <>
<log.Consumer>
   {(x)=>{
      return(
         <>
{setpa(x.user)}
<Center>         <Heading> Wel come{x.user}</Heading>
<Divider></Divider>
       <Box>  <Button onClick={x.lhandler}>Log out</Button></Box>
         </Center>

         </>
      )
   }}
        </log.Consumer>
        </>
     )
}