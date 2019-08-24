import React from 'react';
import PageWrapper from "./components/PageWrapper";
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Router>
      <PageWrapper>
    
          <Route 
            path="/"
            component={Home}
          />

      </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
