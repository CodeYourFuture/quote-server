import Quotes from "./Quotes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'>
            <Quotes />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
