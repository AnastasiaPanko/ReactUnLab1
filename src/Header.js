import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import logo from './logo.svg';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='sm' bg='light' variant='light'>
                    <Container>
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='40'
                                width='40'
                                className='d-inline-block align-top'
                                alt='Logo'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse>
                            <Nav className='me-auto'>
                                <LinkContainer to='/'>
                                    <Nav.Link> Home </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/about'>
                                    <Nav.Link> About us </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/contacts'>
                                    <Nav.Link> Contacts </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/blog'>
                                    <Nav.Link> Blog </Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='me-sm-3'
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
