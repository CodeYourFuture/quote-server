import Quotes from "./Quotes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
        {/* switch looks for the 1st route match and renders that route */}
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
