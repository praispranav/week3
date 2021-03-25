import React from "react"
import { Card, CardImg, CardImgOverlay,Breadcrumb,BreadcrumbItem,CardTitle} from "reactstrap"
import {Link} from 'react-router-dom'

function RenderMenuItem({dish, onClick }){
  return(
    <Card>
      <Link to={`/menu/${dish.id}`}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
    </Card>
  )
}
const Menu = (props) =>{
  const menu = props.disheS.map((dish)=>{
    return(
      <div key={dish.id} className="col-12 col-md-5">
        <RenderMenuItem dish={dish} />
      </div>
    )
  })
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        </div>
        <div className="row">
        <div className="col-12">
          <h3>Menu</h3>
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  )
}


// class Menu extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//     };
//   }
//   render(){
//       const menu = this.props.disheS.map((dish)=>{
//           return(
//               <div key={dish.id} className="col-12 col-md-5 m-1">
//                   <Card onClick={() => this.props.onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
                            
//                         </CardImgOverlay>
                        
//                   </Card>
//               </div>
//           )
//       })
//     return (
//       <div>
//         <div className="container">
//             <div className="row">
//                     {menu}
//             </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Menu;