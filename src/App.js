import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/login/loginScreen";
import formationScreen from "./screens/formationScreen/formationScreen";
import OrderScreen from "./screens/orderScreen/orderScreen";
import BlocScreen from "./screens/blocScreen/blocScreen";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={formationScreen} />
            <Route path="/order" exact component={OrderScreen} />
            <Route path="/bloc/:id" exact component={BlocScreen} />
            <Route path="/login/" exact component={LoginScreen} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
