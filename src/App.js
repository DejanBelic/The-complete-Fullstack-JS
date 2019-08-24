import React from 'react';
import PageWrapper from "./components/PageWrapper";
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/Pages/About";
function App() {
  return (
    <div className="App">
          <Router>
      <PageWrapper>
    
          <Route 
            path="/"
            component={Home}
          />

        <Route 
          path="/a"
          render={() => {
            return (<h1> /a route</h1>)
          }}
          />

          <Route 
          path="/ab"
          render={() => {
            return (<h1> /ab route</h1>)
          }}
          />

          <Route 
          path="/about"
            component={About}
          />


      </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
