import React from "react"
import "react-quill/dist/quill.snow.css";

class Post extends React.Component{
    constructor(){
        super();
        this.state={
            loading:0,
            details: {}
        }
        this.onLoadComplete = this.onLoadComplete.bind(this)
    }

    onLoadComplete(data) {
        this.setState({
            details: data,
            loading:1
        });

        document.getElementById("blog-container").innerHTML = this.state.details.content
    }
    componentDidMount(){
        
        fetch("http://localhost:5000/blogs/"+ this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.onLoadComplete(data)
                
            });
    }


    render(){

        //console.log()
        if (this.state.loading===0)
            {
                return (
                    <h3>Loading blog...</h3>
                )
            }
        return(
            <div style={{maxWidth: '80%', margin:'auto', fontFamily:'Times New Roman'} }>
                
                <div className="ql-snow">
                        <div className= "ql-editor">
                            <div className="full-blog" id="blog-container"></div>
                        </div>
                </div>
            </div>
        )
    }
}
export default Post
