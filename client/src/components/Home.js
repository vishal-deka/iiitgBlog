import React from "react"
import {Link} from "react-router-dom"
import Profile from "./Star"
function Home(){
    return (
        <div style={{textAlign:"center"}}>

            <Link className="btn btn-outline-dark" to={`/create`}>Write a blog</Link>            

            <br></br><br></br>
            
            <p>Dive into the creative side of IIITG</p><br></br>

             <Profile />
        </div>
    )
}
export default Home;