import React from 'react';
import email from './email.jfif';
import kin from './link.png';

const Contact=()=>{
    return(
<div >
<div  className=' text-red-500 font-extrabold text-4xl outline-8 bg-grey-200 border-4 hue-rotate-30 place-items-center'>************************************<img className='w-20 text-red-500 font-extrabold outline-8 bg-grey-200 border-4 ' src={email} alt='email'/>&nbsp;&nbsp;&nbsp;&nbsp;< a className='text-red-500 font-extrabold text-4xl outline-8 bg-grey-200 border-4 hue-rotate-30 text-center hover:bg-rose-200' href="mailto:samiyamarium8@gmail.com">email</a><b>&nbsp;&nbsp;&nbsp;&nbsp;CONTACT&nbsp;&nbsp;&nbsp;&nbsp;</b><a className='hover:bg-red-200 text-red-500 font-extrabold text-4xl outline-8 bg-grey-200 border-4 hue-rotate-30 text-center' href="https://www.linkedin.com/in/samiya-marium-893192a8/">Linked-in</a> <img className='text-red-500 font-extrabold text-4xl outline-8 bg-grey-200 border-4 hue-rotate-30 text-center w-20' src={kin} alt='linkedin'/>**************************************</div>

          
          </div>)}
          export default Contact;