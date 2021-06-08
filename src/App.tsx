import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
