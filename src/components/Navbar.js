import React, { Component } from 'react';
 
export class Navbar extends Component {
    static defaultProps = {
        title: "Hand Gesture Glove",
        icon: 'fab fa-github'
    };
    render() {
        return (
            <nav className="navbar bg-primary">
               <h1>
                    <i className="fab fa-github"></i> {this.props.title}
               </h1> 
               <button>APP 1</button>
               <button>APP 2</button>
               <button>APP 3</button>
            </nav>
        );
    }
}
export default Navbar;
