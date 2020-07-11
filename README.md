# IIITG Blog - A React App
This is a blogging application built for the IIITG Online Students Activity Center as part of the Software Engineering Lab. The project has two main modules:
### The Client module 
The client module is built with React. It uses Quill editor to give users a convenient writing experience and format it as one wishes. The content is converted into HTML+CSS and displayed as a normal web page. The React app runs on port 3000. To start the client run:
```node client/index.js```
### The server module 
A node.js server  handle requests. It connects the front-end of the blog to the backend data store. The server runs on port 5000. The data store used is MongoDB which is a No-SQL database. To start the server run:
```node server/server.js```
### Installation
To run the project the user requires node, npm, React and mongoDB which can be installed using any OS package manager.
To install the server and client simply ```cd``` into the respective directory and run ```npm install```. The packages will be installed. Then run the commands in the above section to start the application.
