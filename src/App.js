import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderMiddle from "./components/HeaderMiddle";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

import './App.scss';

import Model from "./components/Model";


function App() {


  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <div className="header-middle__wrapper">
            <HeaderMiddle />
            <Slider />
          </div>
        </div>

        <Model></Model>

       

        
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>

        <Footer/>

        
      </Router>
    </>
  );
}

export default App;
