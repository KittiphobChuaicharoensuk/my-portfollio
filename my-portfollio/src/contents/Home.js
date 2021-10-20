import React,{Component} from 'react'
import Social from '../components/Social'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component{

    render(){
         return(
            <div className="condiv home">
            <img src="https://media1.giphy.com/media/9C1nyePnovqlpEYFMD/giphy.gif" alt="profile" className="profilepic"/>
            <ReactTypingEffect text={["I'm Kittiphob", "I'm a web developer"]} speed={100} eraseDelay={4} className="typingeffect"/>
            <Social/>
        </div>
         );
    }
} 

export default Home;