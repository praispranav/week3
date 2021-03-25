import React, {Component,useState} from "react"
import { Navbar, NavbarBrand, Jumbotron,Nav, NavbarToggler,Collapse,NavItem, Modal, ModalItem, Button,ModalHeader,ModalBody,Form,FormGroup,Label,Input } from "reactstrap"
import {NavLink} from "react-router-dom"

class Header extends Component{
    constructor(){
        super();
        this.state ={
            isOpen : false,
            isModalOpen:false,
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }
    toggleNav(){
        this.setState({isOpen : !this.state.isOpen})
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(){

    }
    render(){
       
        return(
            <>
            <Navbar dark color="primary" expand="sm">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand className="mr-1" href="/">
                        <img src="/assets/images/logo.png" height="30px" alt="R" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home"><span classname="fa fa-home fa-lg"></span>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus"><span classname="fa fa-info"></span>AboutUs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact"><span classname="fa fa-adress-card fa-lg"></span>Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu"><span classname="fa fa-adress-card fa-lg"></span>Menu</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={this.toggleModal}><span clasName="fa fa-signin fa-lg"></span>LogIn</Button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorent Con Fusion</h1>
                            <p>We take inspiration from lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum</p>
                        </div>
                    </div>
                </div>

            </Jumbotron>
            <div className="container">
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        LogIn
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">UserName</Label>
                                <Input type="text" id="username" name="username" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" />
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" name="remember" />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label /> 
                                <Button class="btn-primary" color="primary">LogIn</Button>
                            </FormGroup>

                            
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
            </>
        )
    }
}
export default Header