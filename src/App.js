import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';
import whiskey from './images/whiskey.jpg';
import tubby from './images/tubby.jpg';
import hazel from './images/hazel.jpg';


function App() {
  App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
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
        <Route exact path='/dogs/:dog' render={routeProps => <Dog { ...routeProps } 
              /* dog={App.defaultProps.dogs.filter(dog => dog.name === routeProps.match.params.dog)[0]} */
              { ...App.defaultProps.dogs.filter(dog => dog.name === routeProps.match.params.dog)[0] } />}/>
        <Route path='/' render={routeProps => <Dogs { ...routeProps } { ...App.defaultProps } />}/>
      </Switch>
    </div>
  );
}

export default App;
