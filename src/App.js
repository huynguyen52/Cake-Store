import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

import Footer from "./components/Footer";

import "./App.scss";

import Model from "./components/Model";
import HeaderMiddle from "./components/HeaderMiddle";
import ScrollToTop, { ToTopButton } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <div className="container">
          <HeaderMiddle />
        </div>

        <Model></Model>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" component={ProductPage} />
        </Switch>

        <Footer />
        <ToTopButton />
      </Router>
    </>
  );
}

export default App;
