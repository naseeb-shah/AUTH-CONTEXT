 
 import { Button, Container, FormControl, FormLabel, HStack, Input, VStack } from "@chakra-ui/react"
import { log } from "./App"
 export default function Home(){
      return(
        <>
<log.Consumer>
  {(x)=>{
return(  
        <Container>
      <FormControl>
      
      <HStack color="white" backgroundColor="lightblue"  p="5px"borderRadius="5px" m={10} border='1px' borderColor='grey'>
<FormLabel>Username</FormLabel>
<Input placeholder="Username"

onChange={x.setusername}


></Input>


        </HStack >
        <HStack  p='5px'm={10} border='1px' borderColor='grey'>
<FormLabel>Password</FormLabel>
<Input placeholder="Password"></Input>


        </HStack>
      <HStack align="center">
      <Button onClick={x.lhandler} size="lg" colorScheme='teal' variant='ghost'>
{x.login==true?"log out":"log In"}
</Button>
<Button border="1px" colorScheme='teal' variant='ghost' size='lg'>
Create Ac
</Button>
      </HStack>
   </FormControl>
   </Container>
    )
  }}
</log.Consumer>

</>
      )
 }

  
  