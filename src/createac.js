import { Box,HStack,Input,Text,FormLabel, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Createac(){

    var Nag=useNavigate()
    const Goto=()=>{

        Nag('../')
         
    }
     return( <>
  <HStack color="white" backgroundColor="lightblue"  p="5px"borderRadius="5px" m={10} border='1px' borderColor='grey'>
<FormLabel>Username</FormLabel>
<Input placeholder="Username"></Input>


        </HStack >
        <HStack  p='5px'm={10} border='1px' borderColor='grey'>
<FormLabel>Password</FormLabel>
<Input placeholder="Password"></Input>
</HStack>
 <Button ml='50px'onClick={Goto}>Create Account</Button>
 <Button m='10px'onClick={Goto}>   Go to Log In</Button>
        </>
     )
}