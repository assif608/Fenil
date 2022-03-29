import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuth } from "./../util/auth";

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <>
    <header>
        <div className="container">
            <div className="row no-gutters align-items-center">
                <div className="col-sm col-9">
                    <a href="/" className="logo-text-2">
                      
                      <img src={require('../img/fp.png').default} />
                    </a>
                    
                </div>
                <div className="col-sm col-3 text-lg-right">
                    <div className="social-icons d-none d-lg-inline-block">
                        <a href="https://www.facebook.com/fenilparekh123/"><i className="lni-facebook-filled"></i></a>
                        <a href="https://dribbble.com/fenilparekh"><i className="lni-basketball"></i></a>
                        <a href="https://instagram.com/thefenilparekh?utm_medium=copy_link"><i className="lni-instagram-original"></i></a>
                        <a href="https://www.linkedin.com/in/fenilparekh/"><i className="lni-linkedin-original"></i></a>
                    </div>
                    
                    <div className="header-nav-toggler d-lg-none">
                        <div className="menu-btn">
                            <div className="line-menu half start"></div>
                            <div className="line-menu"></div>
                            <div className="line-menu half end"></div>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    </header>

    <nav className="nav-menu">
        <div className="side-nav-info">
            <p>I am available for freelance work. Feel free to <a href="contact.html" className="slide-vertical colored" data-splitting>discuss</a> about your project.</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/fenilparekh123/"><i className="lni-facebook-filled"></i></a>
                <a href="https://dribbble.com/fenilparekh"><i className="lni-basketball"></i></a>
                <a href="https://instagram.com/thefenilparekh?utm_medium=copy_link"><i className="lni-instagram-original"></i></a>
                <a href="https://www.linkedin.com/in/fenilparekh/"><i className="lni-linkedin-original"></i></a>
            </div>

        </div>

        <ul>
            <li><a href="/about" className="slide-vertical" data-splitting>About</a></li>
            <li><a href="https://web.archive.org/web/20180817152005/https://fenilparekh.com/" className="slide-vertical" data-splitting>Resume</a></li>
            <li><a href="https://dribbble.com/fenilparekh" className="slide-vertical" data-splitting>Portfolio</a></li>
            <li><a href="https://medium.com/@hellofenilparekh" className="slide-vertical" data-splitting>Blog</a></li>
            <li><a href="/contact" className="slide-vertical" data-splitting>Contact</a></li>
        </ul>
    </nav>
    </>
    // <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
    //   <Container>
    //     <LinkContainer to="/">
    //       <Navbar.Brand>
    //         <img
    //           className="d-inline-block align-top"
    //           src={props.logo}
    //           alt="Logo"
    //           height="30"
    //         />
    //       </Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
    //     <Navbar.Collapse id="navbar-nav" className="justify-content-end">
    //       <Nav>
    //         {auth.user && (
    //           <NavDropdown id="dropdown" title="Account" alignRight={true}>
    //             <LinkContainer to="/dashboard">
    //               <NavDropdown.Item active={false}>Dashboard</NavDropdown.Item>
    //             </LinkContainer>
    //             <LinkContainer to="/settings/general">
    //               <NavDropdown.Item active={false}>Settings</NavDropdown.Item>
    //             </LinkContainer>
    //             <Dropdown.Divider />
    //             <LinkContainer to="/auth/signout">
    //               <NavDropdown.Item
    //                 active={false}
    //                 onClick={(e) => {
    //                   e.preventDefault();
    //                   auth.signout();
    //                 }}
    //               >
    //                 Sign out
    //               </NavDropdown.Item>
    //             </LinkContainer>
    //           </NavDropdown>
    //         )}

    //         {!auth.user && (
    //           <Nav.Item>
    //             <LinkContainer to="/auth/signin">
    //               <Nav.Link active={false}>Sign in</Nav.Link>
    //             </LinkContainer>
    //           </Nav.Item>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default NavbarCustom;
