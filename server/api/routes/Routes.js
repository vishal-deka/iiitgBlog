module.exports = function(app) {
  var control = require('../controller/Controller');

  //defining routes

  app.route('/blogs')
    .get(control.listBlogs);


  app.route('/blogs/:blogId')
    .get(control.fullBlog)



	app.route('/create')
		.post(control.createBlog);

  app.route('/login')
    .post(control.validateUser);
};
