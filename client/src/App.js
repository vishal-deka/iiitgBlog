import React from 'react';
import Profile from "./components/Star"
import Navbar from "./components/Nav"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/Home"
import Post from "./components/Post"
import "./App.css"
import Login from  "./components/Login"

class App extends React.Component {
  render(){
      return (
        <Router>
          <div>
            <link
              rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />

            <link 
              rel="stylesheet"
              href="quill.snow.css"/>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/view" exact component={Profile} />
              <Route path="/view/:id" exact component={Post} />
              <Route path="/create" component={Login} />
            </Switch>
          </div>
        </Router>
      )
    }
}

export default App;
