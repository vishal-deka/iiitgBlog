import React from "react"
import Card from "./Card"

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            finishedLoad: 0,
            loading: 1,
            rdata: []
        }
        this.onLoadComplete = this.onLoadComplete.bind(this)
    }

    onLoadComplete(arr)
    {

        this.setState({finishedLoad: 1})
        this.setState({rdata: this.state.rdata.concat(arr)});
        //console.log(this.state.rdata)
        this.setState({loading:0})
    }

    render(){
        var i=0;
        const display = this.state.rdata.map(blog =>
                    <Card key={blog._id}
                    author={blog.author}
                    loading={this.state.loading}
                    id = {blog._id}
                    date= {blog.date}
                
            />)
            
        if(this.state.loading === 1)
            return (<h3>Loading blogs...</h3>)
        else if(this.state.loading ===2) return (<h4>Connection to server failed. Please refresh</h4>)
        else{
            return(
                <div>
        			{display}
                </div>
            )
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/blogs")
            .then(response => response.json())
            .then(data => {
                this.onLoadComplete(data)

            },
            (error) => {
                this.setState({loading:2})
            }
        );

    }
}
export default Profile
