import React from "react"
import {Link} from "react-router-dom"


function Home(props){
    return(
        <div class="heading">
            <h1>Pranav Kumar<Link to="/menu">Hello</Link></h1>
        </div>
    )
}
export default Home;