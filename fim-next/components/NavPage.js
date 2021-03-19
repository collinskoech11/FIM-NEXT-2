import React from 'react'
import {Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap'

const NavPage = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Faith International Ministries</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Live Service</Nav.Link>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Our Branches
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Nav.Link href="#features">Just Fm</Nav.Link>
                <Nav.Link href="#features">About Us </Nav.Link>
                <Nav.Link href="#features">Help</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default NavPage
