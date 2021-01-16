import React, { Component } from 'react';
import './styles/Dog.css';

class Dog extends Component {

    render() {
        return(
            <div className='Dog'>
                <img className='Dog-img' src={this.props.src}/>
                <h1 className='Dog-name' >{this.props.name}</h1>
                <p className="Dog-age">{this.props.age} years old</p>
                {this.props.facts.map( fact => {return <p className="Dog-facts">{fact}</p>} )}
                <button className="Dog-goback" onClick={this.props.history.goBack}>Go Back</button>
            </div>
        );
    }
}

export default Dog;