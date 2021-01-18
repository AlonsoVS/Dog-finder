import React, { Component } from 'react';
import './styles/Dog.css';

class Dog extends Component {

    render() {
        return(
                <div className='Dog row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='Dog-card card'>
                            <img className='Dog-img card-img-top' src={this.props.src}/>
                            <div className='card-body'>
                                <h2 className='Dog-name card-title' >{this.props.name}</h2>
                                <h4 className="Dog-age card-subtitle text-muted">{this.props.age} years old</h4>
                                <ul className='list-group list-group-flush'>
                                    {this.props.facts.map( fact => {return <li className="Dog-facts list-group-item">{fact}</li>} )}
                                </ul>
                                <button className="Dog-goback btn btn-info" 
                                        onClick={this.props.history.goBack}>Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Dog;