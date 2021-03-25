import React from "react"
import { Card, CardImg, CardImgOverlay,Breadcrumb,BreadcrumbItem, CardText, CardBody, CardTitle} from "reactstrap"
import { Link } from 'react-router-dom'

function RenderDish({dish}){
    return(
        <div class="row">
        <div classname="col-12 col-sm-5 m-1" style={{maxWidth:"500px",width:"100%",margin:"2em;"}}>
            <Card>
                <img src={'localhost:3000/',dish.id} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        </div>
        <div className="col-12 col-sm-5">
            <Card>
                <CardBody>
                    <CardTitle>Comment</CardTitle>
                    <CardText>{dish.comments}</CardText>
                </CardBody>
            </Card>
        </div>
        </div>
        
    )
}


function Detail(props){
        if(props.dish != null){
            return(
                <div className="conatainer">
                    <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <br />
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                            </div>
                            <hr />
                    </div>
                    <div classname="row">
                        <RenderDish dish={props.dish} />
                    </div>
                </div>
            )
        }
    }

export default Detail;

// return(
//     <div className="container">
//         <div className="row">
//             <Breadcrumb>
//                 <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
//                 <BreadcrumbItem active>Menu</BreadcrumbItem>
//             </Breadcrumb>
// </div>
//     <div className="row">

//         <Card className="col-12 col-md-5 m-1 ml-3">
//                 <CardImg src={props.dish.image} alt={props.dish.name} />    
//             <CardBody>
//                     <CardTitle>{props.dish.name}</CardTitle>
//                     <CardText>{props.dish.description}</CardText>
//             </CardBody>
//             {console.log("hello")}
//         </Card>
//         <Card className="col-12 col-md-5 m-1">
//         <CardBody>
//             <CardText>{props.dish.comments}</CardText>
//             <CardText>{props.dish.comments}</CardText>
//             <CardText>{props.dish.comments}</CardText>
//         </CardBody>
//         </Card>
// </div>

// </div>
// )