import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => 
                <li>
                    <NavLink exact to={`/dogs/${dog.name}`} className="nav-link" key={dog.name}>
                        {dog.name}
                    </NavLink>
                </li>
                );
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/dogs" className="navbar-brand" >Dog Finder</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active" key="home">
                                <NavLink exact to="/dogs" className="nav-link">Home<span className="sr-only">(current)</span></NavLink>
                            </li>
                            {dogLinks}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;