import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BasketContextProvider from "./context/BasketContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasketContainer from "./components/BasketContainer";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="app">
      <BasketContextProvider>
        <Router>
          <Switch>
            <Route exact path="/checkout">
              <Navbar />
              <Checkout />
            </Route>
            <Route exact path="/basketcontainer">
              <Navbar />
              <BasketContainer />
            </Route>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
          </Switch>
        </Router>
      </BasketContextProvider>
    </div>
  );
}

export default App;
