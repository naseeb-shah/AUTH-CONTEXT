import { Link,Outlet } from "react-router-dom"
import styled from "styled-components"
const Nav=styled.div` display: flex;
flex-wrap: nowrap;
justify-content: space-around;
color:green;
font-size:50px;
`
export default  function Layout(){
return(
    <>
    <Nav>
    <li>
            <Link to="/">Home</Link>
          </li>
          


    </Nav>
<Outlet />
    </>
)
}