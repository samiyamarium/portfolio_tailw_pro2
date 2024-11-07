import React from "react";
import profile from './profile1.png'
import agent from './agent.jfif'
import edu from './edu.png';
import skills from './skills.jfif';
import matlab from './matlab.png';
import ads from './ADS.png';
import html5 from './html5.png';
import css3 from './css3.jfif';
import ts from './ts.jfif';
import tailwind from './tailwindcss.png';
import nextjs from './nextjs.jfif';
import react from './react.jfif';

import interest from './interest.jfif';
import history from './history.jfif';
import sports from './sports.jfif';
import music from './music.jfif'

const About=()=>{
    return(
        <div>
            <div className="text-red-500 font-extrabold text-4xl outline-8 bg-grey-200 border-4 hue-rotate-30 text-center"><b>ABOUT ME</b></div>
            <div className="text-red-500 outline-8 bg-grey-200 border-6 hue-rotate-30 flex"><img className="w-60 h-80" src={profile} alt="profile"/><p className=" bg-gradient-to-r from-gray-300 to-red-300 text-pink-950  outline-8   border-4 hue-rotate-30 text-12xl "><b>Hello, My name is <b >Samiya Marium</b>.....<br/><br/>I have done <b >MS in Electrical Engineering</b>  from NUST with specialization in <b >Telecommunication.</b><br/><br/> I have done my <b >thesis</b> on <b >Low Latency MAC protocol for Industrial Wireless Sensor Network</b>..<br/><br/>I have done small projects on <b >Compter Vision</b> and <b >Artificial Intelligence</b> during my academics..  </b><br/><br/><b>Currently, I am enrolled in</b> <i><b >Governer Sindh IT program titled "Certified Cloud Applied Generative AI Engineer (GenEng)" </b></i>
              <br/><br/><b>Lets discuss my qualifications in detail in forth coming sections...</b> </p>< img className="w-60 h-80" src={agent} alt="agentic"/> </div>

             <div ><div className="text-red-500 font-extrabold outline-8 bg-grey-200 border-4 hue-rotate-30 flex"><b className="bg-gradient-to-r from-gray-300 to-red-300 text-pink-950  outline-8 text-12xl  border-4 hue-rotate-30"><br/><br/>EDUCATION<img className="  bg-gradient-to-r from-gray-300 to-red-300 text-pink-950  outline-8 text-12xl  border-4 hue-rotate-30" src={edu} alt="education"/></b><br/><br/>********MS IN Electrical Engineering from NUST..<br/><br/> ********BS in Electronics Engineering from SSUET..<br/><br/> *********F.Sc in Pre-Engineering from Fazaia Degree College..<br/><br/>  </div><div className=" text-red-500 font-extrabold outline-8 bg-grey-200 border-4 hue-rotate-30 flex"><b className="pr-4 bg-gradient-to-r from-gray-300 to-red-300 text-pink-950  outline-8 text-12xl  border-4 hue-rotate-30  "><br/><br/>  SKILLS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className=" w-40 bg-gradient-to-r from-gray-300 to-red-300 text-pink-950  outline-8 text-12xl  border-4 hue-rotate-30  " src={skills} alt="skills"/></b><br/><br/><br/> &nbsp;&nbsp;<br/><br/><img className="w-20 " src={matlab}  alt="skills"/>&nbsp;&nbsp;<img className="w-40" src={ads} alt="ads"/> &nbsp;&nbsp;<img className="w-20 " src={html5} alt="skills"/>&nbsp;&nbsp;<img className="w-40 " src={css3} alt="skills"/>&nbsp;&nbsp;<img className="w-40 " src={ts} alt="skills"/>&nbsp;&nbsp;<img className="w-20" src={tailwind} alt="skills"/>&nbsp;&nbsp;<img className="w-40" src={nextjs} alt="skills"/> &nbsp;&nbsp;<img className="w-40" src={react} alt="skills"/></div>
             <div className="text-red-500 font-extrabold outline-8 bg-grey-700 border-4 hue-rotate-15 flex"><b className="pr-4 text-pink-950 font-extrabold outline-8 bg-gradient-to-r from-gray-300 to-red-300  border-4 hue-rotate-45 "><br/><br/>INTERESTS&nbsp;&nbsp;<img className="w-40 flex" src={interest} alt="interest"/></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="w-60 flex" src={history} alt="interest"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="w-40 flex" src={sports} alt="interest"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="w-60 flex" src={music} alt="interest"/></div></div>
              </div>
              
)
}

export default About;
//&nbsp;&nbsp<img className="imag2" src={} alt=""skills/>