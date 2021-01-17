import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js';
import './App.css';
import Student from './Pages/Student.js';
import ONG from './Pages/ONG.js';
import Company from './Pages/Company.js';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register-student" component={Student} />
      <Route exact path="/register-ong" component={ONG}/>
      <Route exact path="/register-company" component={Company}/>
    </Switch>
  );
}

export default App;
