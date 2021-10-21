import React,{Component} from 'react'
import Widecard from '../components/Widecard';

class Educatiion extends Component{

    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My education</h1>
                <Widecard title="University" where="Chulalongkorn University" from="2019" to="Present"/>
                <Widecard title="High school" where="Debsirinromklao High School" from="2012" to="2018"/>
            </div>
        );
    }

}

export default Educatiion;