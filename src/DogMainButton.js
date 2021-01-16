import React, { Component } from 'react';

class DogMainButton extends Component {
    render() {
        return(
            <>
                <h1>{this.props.name}</h1>
                <img src={this.props.src}/>
            </>
        );
    }
}

export default DogMainButton;