import React, { Component } from 'react';
import DogMainButton from './DogMainButton';

class Dogs extends Component {
    render() {
        return(
            <div>
                <h1>Click a Dog</h1>
                {this.props.dogs.map(dog => {return <DogMainButton { ...dog }/>})}
            </div>
        );
    }
}

export default Dogs;