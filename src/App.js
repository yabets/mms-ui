import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Info" component={Info} />
        <Route path="/login" name="Login" component={Login} />
        <Route path="/home" name="Home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
