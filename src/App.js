import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dogs from './Dogs';
import DogMainButton from './DogMainButton';


function App() {
  App.defaultProps = {
    dogs: [
      {name:'Spartacus'},
      {name: 'Terry'},
      {name: 'Jack'}
  ]
  };
  
  return (
    <div className="App">
      <nav>
        <h1>Dog Shelter</h1>
        <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
        {App.defaultProps.dogs.map(dog => 
                <NavLink exact activeClassName='active-link' to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
            )}
      </nav>
      <Switch>
        <Route exact path='/dogs/:dog' render={routeProps => <DogMainButton { ...routeProps } 
              dog={routeProps.match.params.dog} />}/>
        <Route path='/' render={routeProps => <Dogs { ...routeProps } {...App.defaultProps} />}/>
      </Switch>
    </div>
  );
}

export default App;
