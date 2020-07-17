
'use strict';
var mongoose = require('mongoose'),
    Blog = mongoose.model('blogs');

exports.listBlogs = function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err)
            res.send(err);
        res.json(blogs);
    });
    };
      
exports.createBlog = (req, res) =>{
    var start = req.body.content.indexOf("<h"); var end = req.body.content.indexOf("/h")
    var title = req.body.content.substring(start+4, end-1)
    
    const cdate = new Date().toDateString()
    const blog = {
        title: title,
        content: req.body.content,
        author: req.body.user,
        current_date: cdate

    }
    var newBlog = new Blog(blog);
    newBlog.save((err, blg) => {
        if (err)
            res.send(err);
        res.json("success")
    })
    console.log(req.body)
}

exports.fullBlog = function(req, res) {
    console.log(req.params)
    Blog.findById(req.params.blogId, function(err, blog) {
      console.log(blog)
      if (err)
        res.send(err);
      res.json(blog);
    });
  };

exports.validateUser = (req, res) =>{

console.log(req.body)
//console.log(req.params)
//if user exists in clubs database
const email= 'vishal@iiitg.ac.in'
const password= '8b64d2451b7a8f3fd17390f88ea35917' //hash of vishal

if(req.body.email==email && req.body.password==password)

res.json({valid: "1", name: "vishal deka"})
else
//else
res.json({valid: "0"});
}



