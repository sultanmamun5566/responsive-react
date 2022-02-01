import React from 'react';
import { Container, Navbar,Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../context/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
  // const { users, logout } = useAuth();
  const {users,logOut } = useFirebase();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
          <Container>
                    <Navbar.Brand href="#home">Genius Car Macaticks</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">   
                          <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                     <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
              
                       {users?.email ?
                                       <Button onClick={logOut} variant="light">LogOut</Button>  :    
                                      <Nav.Link as={HashLink} to="/login">login</Nav.Link>}

                        <Navbar.Text>                    
                Signed in as: <a href="#login">{users?.displayName}</a>                  
                        </Navbar.Text>                     
                        
                    </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </>
    );
};

export default Header;