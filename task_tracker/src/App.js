import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./components/Auth0/profile";
import ProtectedRoute from "./components/Auth0/ProtectedRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/tasks" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
  
    </Router>
  )
}

export default App;
