import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css"; 

// // layouts

import Admin from "./layouts/Admin.js";
// import Auth from "layouts/Auth.js";

// import Landing from "views/Landing.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      {/* <Route path="/auth" component={Auth} /> */}
      {/* add routes without layouts */}
      {/* <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} /> */}
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
