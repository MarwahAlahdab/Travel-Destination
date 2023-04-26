// Header component:

// Create an <h1> tag as a header.

import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function Header(){

    
    return(
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Travel Destination</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
   
          </Nav>
        </Container>
      </Navbar>

  


    {/* <link to="../home/Home.js"></link> */}
    
    <h1>Travel-Destination</h1>



    </>


    )

}



export default Header;