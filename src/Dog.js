import React, { Component } from 'react';

class Dog extends Component {
    render() {
        return(
            <>
                <h1>{this.props.name}</h1>
                <img src={this.props.src}/>
                <h2 className="Dogage">{this.props.age}</h2>
                {this.props.facts.map( fact => {return <h3 className="Dogfacts">{fact}</h3>} )}
            </>
        );
    }
}

export default Dog;