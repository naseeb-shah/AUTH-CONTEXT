import Layout from './layout';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home';
import About from './about';
import Createac from './createac';
import { createContext, useState } from 'react';

const log=createContext()
function App() {
  const [login,stlog]=useState(false)
  const [user,stuser]=useState(false)
   const lhandler=()=>{
    var ses=login===true?false:true
    stlog(ses)
    console.log(login)
   }
const setusername=(e)=>{
stuser(e.target.value)
}

  return (
    <log.Provider  value={{login,lhandler,setusername,user}}>
    <BrowserRouter> 
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={login===false?<Home />:<About/>} />
          <Route path='create' element={login===false?<Createac/>:<Home />} />
          
          
        </Route>
      </Routes>
</BrowserRouter>
</log.Provider>
  );
}

export default App;
export{log}
