import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import BasketContextProvider from "./context/BasketContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasketContainer from "./components/BasketContainer";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="app">
      <UserContextProvider>
        <BasketContextProvider>
          <Router>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
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
      </UserContextProvider>
    </div>
  );
}

export default App;
