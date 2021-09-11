import React, { Component } from 'react';
 
export class Navbar extends Component {
    static defaultProps = {
        title: "Survey App",
        icon: 'fab fa-github'
    };
    render() {
        return (
            <nav className="navbar bg-primary">
               <h1>
                    <i className="fab fa-github"></i> {this.props.title}
               </h1> 
            </nav>
        );
    }
}
export default Navbar;
