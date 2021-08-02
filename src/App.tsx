import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./features/components/Header";
import Footer from "./features/components/Footer";
import Home from "./features/components/buildingComponens/Home";
import User from "./features/components/buildingComponens/User";
import History from "./features/components/buildingComponens/History";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:name" component={User} />
          <Route exact path="/history" component={History} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
