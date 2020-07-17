import React from "react"
import axios from 'axios';
import Editor from "./Editor"
var cryptojs = require("crypto-js")

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            isVerified : 0,
            name: ''
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this)
    }

    onButtonSubmit(){
        
        const form = document.forms.myform;
        const email = form.email.value;
        const pass = form.pass.value;
        const hash = cryptojs.MD5(pass).toString()

        const data = {
            email: email,
            password: hash
        }

        axios.post(`http://localhost:5000/login`, data)
            .then(res => {
                console.log(res.data.valid)
                if (res.data.valid ==="1")
                {
                    this.setState({isVerified:1, name: res.data.name})
                }
                else {
                    this.setState({isVerified:2})
                    alert("Username or password invalid. Please try again")
                }
            },
            (error) =>{
                this.setState({isVerified:2})
            }
            )        


    }

    render(){
        if (this.state.isVerified === 0 || this.state.isVerified ===2)
        return(
            
            <div style={{maxWidth:"50%", margin:"auto", textAlign:"center"}}>
                <form name="myform">
                    <h5 style={{textAlign:"center"}}>Please login with your institute email and password</h5>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" name="email" className="form-control"></input>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="pass" className="form-control"></input>
                    </div>
                </form>
                <button type="submit" class="btn btn-outline-primary" onClick={this.onButtonSubmit}>Proceed</button>

            </div>
        )
        else if(this.state.isVerified ===1)
            return (<Editor name={this.state.name}/>)

    }
}

export default Login;
