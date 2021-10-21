import React, { Component } from 'react'
import Social from '../components/Social';

class Contact extends Component{
    render(){
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : Kittiphob.Chuaicharoensuk@gmail.com</h3>
                <h3>Instagram : @404unknown</h3>
                <Social />
            </div>
        );
    }
} 

export default Contact;