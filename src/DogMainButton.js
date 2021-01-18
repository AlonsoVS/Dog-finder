import React, { Component } from 'react';

class DogMainButton extends Component {
    handleClick = () => {
        this.props.history.push(`/dogs/${this.props.name}`);
    }
    render() {
        return(
            <div className='Dog-main col-md-6 col-lg-3 text-center'>
                <img className='Dogmainbutton-img' src={this.props.src} alt={this.props.name}/>
                <h1 className='Dogmainbutton-name underline mt-3' onClick={this.handleClick}>{this.props.name}</h1>
            </div>
        );
    }
}

export default DogMainButton;