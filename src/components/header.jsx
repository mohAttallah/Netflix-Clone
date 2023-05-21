import React from "react";
import { Navbar, Nav} from "react-bootstrap";


export default function Header() {
  
    
   return (
     <Navbar bg="dark" variant="dark">
       <Navbar.Brand href="/" className="mr-auto">Netflex Clone</Navbar.Brand>
       <Nav activeKey="/home">
         <Nav.Link href="/">Home</Nav.Link>
         <Nav.Link eventKey="link-1" disabled>Navbar</Nav.Link>
         <Nav.Link href="/movie">Movie</Nav.Link>
         <Nav.Link href="/modelMovie">ModalMovie</Nav.Link>
         <Nav.Link eventKey="disabled" disabled>FavList</Nav.Link>
       </Nav>
     </Navbar>
  );
}
