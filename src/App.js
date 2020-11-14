import './App.css'
import { Header } from 'components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import routes from "routes"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {routes.map(route => (
            <Route path={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
