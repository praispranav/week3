import React,{ Component } from "react"
import Menu from "./MenuComponents"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import {Switch,Route,Redirect, withRouter} from "react-router-dom"
import Home from "./HomeComponent"
import About from "./AboutComponent";
import Contact from "./ContactUs"
import { connect } from "react-redux";
import Detail from './dishdetails'

const mapStateToProps = state =>{
  return {
    dishes:state.dishes
  }
}

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
       
    }}
    
  render(){
    const MenuM = () =>{
      return(
        <Menu disheS={this.props.dishes}/>
        )
      }
    const DishWIthId = ({match}) =>{
        return(
          <Detail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} />
        )
      }
      return (
      <div>
        <Header />   
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/menu" component={MenuM} />
            <Route path="/menu/:dishId" component={DishWIthId} />
            <Route exact path="/aboutus" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/home" />
          </Switch>
          
        <Footer />
        
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
