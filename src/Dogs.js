import React, { Component } from 'react';
import DogMainButton from './DogMainButton';
import './styles/Dogs.css';

class Dogs extends Component {
    render() {
        return(
            <div className='Dogs'>
                <h1 className='display-1 text-center my-5'>Click a Dog!</h1>
                <div className='container'>
                    <div className='row'>
                        {this.props.dogs.map(dog => {return <DogMainButton key={dog.name} { ...dog } history={ this.props.history }/>})}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dogs;