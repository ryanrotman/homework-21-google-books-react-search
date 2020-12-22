import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
