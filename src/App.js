import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderMiddle from "./components/HeaderMiddle";
import Slider from "./components/Slider";
import data from "./data";
import Banner from "./components/Banner";
import HorizontalTab from "./components/HorizontalTab";

function App() {
  const { banners, tablist } = data;
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

        <section id="main">
          <div className="container">
            <ul className="top-banners">
              {banners.map((item, index) => {
                return <Banner img={item} key={index} />;
              })}
            </ul>
            <HorizontalTab tabList={tablist} />
          </div>
          <div className="container container--bigger"></div>
        </section>

        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <h1>as</h1>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
