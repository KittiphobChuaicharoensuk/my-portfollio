import React, { Component } from 'react'

class Skills extends Component{
    constructor(props){
        super(props);

        this.state = {
            "myskills":["Python","Machine Learning","ReactJS","JS","CSS","HTML","PHP","SQL"]
        }
    }

    render(){
        return(
            <div className="condiv skills">
                <h1 className="subtopics">My skills</h1>
                <ul>
                    {this.state.myskills.map((value)=> {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Skills