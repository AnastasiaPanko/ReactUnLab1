import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './assets/logo1.svg';

export default class Header extends Component {
    render() {
        return (
            <Navbar
                fixed='top'
                collapseOnSelect
                expand='lg'
                bg='light'
                variant='light'
            >
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse>
                        <Nav className='me-auto'>
                            <Nav.Link href='/'> Home </Nav.Link>
                            <Nav.Link href='/about'> About us </Nav.Link>
                            <Nav.Link href='/contacts'> Contacts </Nav.Link>
                            <Nav.Link href='/blog'> Blog </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
