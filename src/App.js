import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Home" component={Home} />
        <Route path="/login" name="Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
