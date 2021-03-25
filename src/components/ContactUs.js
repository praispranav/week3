import React from "react"
import { Breadcrumb, BreadcrumbItem,Button,FormGroup,Input, Form, Label,Col,Row,FormFeedback } from "reactstrap"
import { Link } from "react-router-dom"

class Contact extends React.Component{
    constructor(){
        super();
        this.state ={
            firstname:"",
            lastname:"",
            tel:"",
            email:"",
            agree:false,
            contactTpe:"Tel",
            message:"",
            touched:{
                firstname:false,
                lastname:false,
                tel:false,
                email:false,
            }
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.validate = this.validate.bind(this)
    }
    handleSubmit(event){
        event.preventDefault()
        console.log("Form Submitted", JSON.stringify(this.state))
        alert("Form Submitted", JSON.stringify(this.state))
    }; 
    handleChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name= target.name;
        this.setState({
            [name] : value
        });
    };
    handleBlur = (field)=>(evt) => {
        this.setState({
            touched:{...this.state.touched,[field]: true}
        })
        // console.log('hello')
    }
    validate(firstname,lastname,tel,email){
        const error = {
            firstname:"",
            lastname:'',
            tel:'',
            email:''
        }
        // console.log('hello2')
        if (this.state.touched.firstname && firstname.length<5){
            error.firstname = 'First Name must be Greater than 5 Characters';
        }else if(this.state.touched.firstname && firstname.length>10 ){
            error.firstname = 'First Name Must Be Less than 10 Char';
        };
        
        if (this.state.touched.lastname && lastname.length<5){
            error.lastname = 'Last Name must be Greater than 5 Characters';
        }else if(this.state.touched.lastname && lastname.length>10 ){
            error.lastname = 'First Name Must Be Less than 10 Char';
        };

        const reg = /^\d+$/;
        if (this.state.touched.tel && !reg.test(tel)){
            error.tel = 'Tel. Number should contain only number';
        };
        if(this.state.touched.email && email.split('').filter(x=>x === '@').length !== 1){
            error.email = 'Email Should Contain only a @';
        };
        return error;
    }
    render(){
        const error = this.validate(this.state.firstname, this.state.lastname,this.state.tel,this.state.email);
        return(
            <div className="container">

                <div class="row ml-1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            
                
                <div class="btn-group" role="group">
                    <a role="button" class="btn btn-primary" href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
                    <a role="button" class="btn btn-info"><i class="fa fa-skype"></i> Skype</a>
                    <a role="button" class="btn btn-info"><i class="fa fa-facebook"></i> Facebook</a>
                    <a role="button" class="btn btn-success" href="mailto:confusion@food.net"><i class="fa fa-envelope-o"></i> Email</a>
                </div>
            
            {/* Added later */}
            <div className="row row-content mt-3">
                <div className="col-12">
                    <h4>Send Us Your feedback</h4>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" onChange={this.handleChange} onBlur={this.handleBlur('firstname')} valid={error.firstname === ''} invalid={error.firstname !== ''} value={this.state.firstname} name="firstname" placeholder="First Name" id="firstname"/>
                                <FormFeedback>{error.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" name="lastname" onChange={this.handleChange} onBlur={this.handleBlur('lastname')} value={this.state.lastname}  valid={error.lastname === ''} invalid={error.lastname !== ''} placeholder="Last Name" id="lastname"/>
                                <FormFeedback>{error.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="tel" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input type="tel" name="tel" onChange={this.handleChange} placeholder="Phone" onBlur={this.handleBlur('tel')}  valid={error.tel === ''} invalid={error.tel !== ''} id="tel" value={this.state.tel}/>
                                <FormFeedback>{error.tel}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" name="email" onChange={this.handleChange} placeholder="Email" id="email" onBlur={this.handleBlur('email')} value={this.state.email}  valid={error.email === ''} invalid={error.email !== ''}/>
                                <FormFeedback>{error.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6,offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" onChange={this.handleChange} name="agree" checked={this.state.agree} /><strong>May we Contact You?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3,offset:1}}>
                                <Input type="select" name="contactType" onChange={this.handleChange} >
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your FeedBack</Label>
                            <Col md={10}>
                                <Input type="textarea" name="message" onChange={this.handleChange} placeholder="Message" rows="12" id="message"value={this.state.message}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10,offset:2}}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}
export default Contact;