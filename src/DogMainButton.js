import React, { Component } from 'react';

class DogMainButton extends Component {
    render() {
        return(
            <>
                <img src={this.props.src}/>
                <h1>{this.props.name}</h1>
            </>
        );
    }
}

export default DogMainButton;