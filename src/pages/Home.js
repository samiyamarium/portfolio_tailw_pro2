import React from "react";

import pf from './pf.jfif'
import greet from './greet.png';


const Home = () => {
    return (
    <div >

        <div className="text-red-500 font-extrabold outline-8 bg-grey-200 border-4 hue-rotate-30 flex"><img className="text-red-500 font-extrabold outline-8 bg-grey-200  hue-rotate-30 flex" src={greet} alt="portfolio"/> &nbsp; &nbsp; &nbsp; &nbsp;
       
            <h2 ><b className="font-extrabold text-7xl">WELCOME TO MY</b> &nbsp;</h2> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img  className="text-red-500 font-extrabold outline-8 bg-grey-200  hue-rotate-30 flex" src={pf} alt="portfolio"/></div>
            
        <div className="text-red-500 font-extrabold outline-8 text-4xl bg-grey-200 border-4 hue-rotate-30 "><h3><b> WHY I CHOSE TO BECOME AN ARTFICIAL INTELLIGENCE ENGINEER !!??</b></h3></div>
        <br/><div className= "  bg-gradient-to-r from-gray-300 to-red-300 text-pink-950  outline-8 text-12xl  border-4 hue-rotate-30 " ><b>Emerging technology demands collaboration of two or more technologies to devise a merger that could benefit mankind. <br/><br/>Industrial revolutions brought smart solutions of collaborative nature. <br/><br/>That leads to inventions and the innovation taking over all the aspects now is Artificial Intelligence.<br/><br/>From satellites to ground stations, from agriculture to medical, from engineering to corporate sector, Each one demands introduction of AI to their fields.<br/><br/>Auto response is more close to human behaviour!! <br/><br/> Training AI based automatic response bots like chatGPT brought 180 degrees twist in interaction based communication.<br/><br/> It can generate any piece of desired text, art, visual and some bots also has the ability to reject any inappropriate query.<br/><br/>But that is not all!! There came Agentic AI, taking it one step ahead!!<br/><br/><b>Agentic AI</b> is a combination of AI and autonomous technology..<br/><br/>These Agents require minimum human supervision as they have the ability to analyze data and decision making capabilities of their own.. <br/><br/>These near human cognitions are achieved by using LLMs,ML,Deep learning and other brain usnpied sciences/engineering..<br/><br/>They are action-oriented!! <br/><br/>Looking at these developments ..Being an Electrical Engineer and an entusiast AI student..  I am working on developing skills on <b><i>Agentic AI</i></b> now !!</b></div> 
      
        </div>
    
);
};

export default Home;