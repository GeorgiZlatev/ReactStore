import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import Index from "./Views/Index";
import About from "./Views/About";
import Product from "./Views/Product";
import Category from "./Views/Category";
import NoPage from "./Views/NoPage";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
