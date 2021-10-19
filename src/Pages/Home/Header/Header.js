import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
  const { handleLogout, user } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <Navbar className="bg-dark py-3" expand="lg" >
          <Container>
            <Navbar.Brand as={NavLink} className="text-white" to="/home">
              Healthcare
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link as={NavLink} to="/home" className="text-white">
                  Home
                </Nav.Link>

                <Nav.Link as={NavLink} to="/about" className="text-white">
                  About
                </Nav.Link>

                <Nav.Link as={NavLink} to="/services" className="text-white">
                  Services
                </Nav.Link>
                <Nav.Link as={NavLink} to="/doctor" className="text-white">
                  Doctor
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" className="text-white">
                  Contact
                </Nav.Link>


                {/* ----------- */}

                {user.email ? (
                   <Button onClick={handleLogout} className="btn btn-danger">
                   LogOut
                 </Button>
                    ) : (
                  <Nav.Link as={NavLink} to="/login" className="text-white">
                    Login
                  </Nav.Link>
                 )}
                   <p className="mb-5">{user.email}</p>
                {/* ---------- */}
                {/* {user.email ? (
                  <button onClick={handleLogout} className="btn btn-danger">
                    LogOut
                  </button>
                ) : (
                  <Link to="/login">
                    <li>Login</li>
                  </Link>
                )}
 */}



                <NavDropdown >

                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;