import React, { Component } from 'react';

class DogMainButton extends Component {
    handleClick = () => {
        this.props.history.push(`/dogs/${this.props.name}`);
    }
    render() {
        return(
            <div className='Dogmainbutton'>
                <img className='Dogmainbutton-img' src={this.props.src}/>
                <h1 className='Dogmainbutton-name' onClick={this.handleClick}>{this.props.name}</h1>
            </div>
        );
    }
}

export default DogMainButton;