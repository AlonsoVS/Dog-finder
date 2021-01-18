import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';

class Routes extends Component {
    
    desProps = (routeProps) => {
        const foundDog = this.props.dogs.filter(dog => dog.name === routeProps.match.params.dog)[0];
        if (foundDog) {
            return <Dog { ...routeProps } { ...foundDog } />
        }
        return <Redirect to='/'/>;
      }

    render() {
        return(
            <Switch>
            <Route exact path='/dogs/:dog' render={routeProps => this.desProps(routeProps)}/>
            <Route path='/' render={routeProps => <Dogs { ...routeProps } { ...this.props } />}/>
            <Route render={routeProps => <Dogs { ...routeProps } { ...this.props } />}/>
          </Switch>  
        );
    }
}

export default Routes;