import React from "react"
import ReactQuill, {Quill} from 'react-quill';
import "react-quill/dist/quill.snow.css";
import axios from 'axios';
import { Redirect } from "react-router-dom";


class Editor extends React.Component{
    constructor(props) {
        super(props)
        this.state = { editorHtml : '', theme: 'snow', submitted:0} // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.onPreview = this.onPreview.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      handleChange(value) {
        this.setState({ editorHtml: value })
      }

      onPreview(){
          document.getElementById("container").innerHTML = this.state.editorHtml
          console.log(this.state.editorHtml)
      }
      
      onSubmit(){
          const data = {
              user:this.props.name,
              content: this.state.editorHtml
          }
          axios.post(`http://localhost:5000/create`, data)
            .then(res => {
                if (res.status === 200) alert("Blog successfully saved")
                this.setState({submitted:1})
            })

      }
    
      render() {
          if (this.state.submitted === 1) return (<Redirect to='/' />)
        return (
            <div>
                <link 
                    rel="stylesheet"
                    href="../quill.snow.css"
                />

                <div className="editor" style={{maxWidth: '70%'} }>
                    <h4>Welcome {this.props.name}</h4 >
                    <p>Happy Writing!</p>
                    
                    <div style={{textAlign: "center"}}>
                        <ReactQuill className="editor" value={this.state.editorHtml}
                            onChange={this.handleChange} 
                            modules={Editor.modules}
                            bounds={'.root'}
                            formats = {Editor.formats}
                        />

                        <br></br>
                        <button type="button" className="btn btn-primary" onClick={this.onPreview}>Preview</button>
                        {"\t"}<button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                    <br></br>

                    <p>Preview will appear below</p>
                    <div className="ql-snow">
                        <div className= "ql-editor">
                            <div className="display" id="container"></div>
                        </div>
                    </div>

                </div>
            </div>
        )
      }
}

const options = [['bold', 'italic', 'underline'],

    ['image', 'link'],
    [{ 'header': [1, 2, 3, 4, false] }],
    [{'font': []}],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, {'indent': '-1'}, {'indent': '+1'}],
    ['blockquote', 'code-block'],
    [{'align':''}, {'align':'center'},{'align':'right'},{'align':'justify'}]
    ];

Editor.modules = {
    toolbar: options,

}

var AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle,true);

const bq = Quill.import('formats/blockquote')
Quill.register(bq, true);

Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'align', 'code-block'
  ]
export default Editor;