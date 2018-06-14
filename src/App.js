import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from "./components/presentational/Index";
import Info from "./components/presentational/Info";
import About from "./components/presentational/About";

class App extends Component {
  render() {
    return (
      <Router>
       <div>
        <Route exact path='/' component={Index}/>
        <Route exact path='/info' component={Info}/>
        <Route exact path='/about' component={About}/>
       </div>
      </Router>
    );
  }
}

export default App;