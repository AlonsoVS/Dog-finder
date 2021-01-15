import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';

function App() {

  return (
    <div className="App">
      <nav>
        <h1>Dog Shelter</h1>
        <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
      </nav>
      <Switch>
        <Route exact path='/dogs/:dog' render={routeProps => <Dog {...routeProps}/>}/>
        <Route path='/' render={() => <Dogs/>}/>
      </Switch>
    </div>
  );
}

export default App;
