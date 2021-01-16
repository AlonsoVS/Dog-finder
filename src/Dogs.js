import React, { Component } from 'react';
import DogMainButton from './DogMainButton';
import './styles/Dogs.css';

class Dogs extends Component {
    render() {
        return(
            <div className='Dogs'>
                <h1 className='Dogs-title'>Click a Dog!</h1>
                <div className='Dogs-dogmainbuttons'>
                    {this.props.dogs.map(dog => {return <DogMainButton { ...dog } history={ this.props.history }/>})}
                </div>
            </div>
        );
    }
}

export default Dogs;