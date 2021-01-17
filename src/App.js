import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
