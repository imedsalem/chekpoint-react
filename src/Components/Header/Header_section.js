import React from 'react'
import './Header_section.css';
import { Container,Nav,Navbar } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const Header_section = () => {
return (
<>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                <i class="bi bi-camera2 px-2 icon"></i>
                <p className="d-inline ms-2 icon">personal photographer</p>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="px-2 icon"><i class="bi bi-telephone"></i></Nav.Link>
                    <Nav.Link className="px-2 icon"><i class="bi bi-instagram"></i></Nav.Link>
                    <Nav.Link className="px-2 icon"><i class="bi bi-behance"></i></Nav.Link>
                    <Nav.Link className="px-2 icon"><i class="bi bi-facebook"></i></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
</>
)
}

export default Header_section