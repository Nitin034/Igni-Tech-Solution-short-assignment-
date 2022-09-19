
import React from "react";
import Home from "./Home";
import Page from "./Page"
import { Switch, Route } from 'react-router-dom';
 
 

function App() {
  return (
    <>
     <Home/>
      <Switch>
      <Route path="/" component = {Home} />
      <Route path="/" component = {Page} />
      </Switch>
    </>
  );

}

export default App;