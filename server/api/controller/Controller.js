
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
    const blog = {
        title: "title",
        content: req.body.content,
        author: req.body.user
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
//if user exists in clubs database
res.json({valid: "1", name: "vishal deka"})
//else
//res.json({valid: "0"});
}



