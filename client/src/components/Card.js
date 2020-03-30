import React from "react"
import {Link} from "react-router-dom"
class Card extends React.Component{

    render(){
        
        return(
            <div>
                {
                    this.props.loading===1 ? <div>
                    <h3>Loading...</h3></div>:
                    <div>
                        <Link to={`/view/${this.props.id}`}><h5>Name: {this.props.author}</h5></Link>
                        <p>Date: {this.props.date}</p>
                        <p>Id: {this.props.id}</p>
                    </div>
                }
            </div>
        )
    }
}
export default Card
