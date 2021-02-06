import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Info" component={Info} />
        <Route path="/login" name="Login" component={Login} />
        <Route path="/home" name="Home" component={Home} />
        <Route path="/settings" name="Settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
