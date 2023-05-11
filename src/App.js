import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import './App.css';


export class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <About />
            </div>
        );
    }
}

export default App;
