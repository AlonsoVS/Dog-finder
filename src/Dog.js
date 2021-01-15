import React, { Component } from 'react';

class Dog extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.match.params.dog}</h1>
            </div>
        );
    }
}

export default Dog;