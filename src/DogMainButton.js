import React, { Component } from 'react';

class DogMainButton extends Component {
    render() {
        return(
            <>
                <h1>{this.props.dog}</h1>
            </>
        );
    }
}

export default DogMainButton;