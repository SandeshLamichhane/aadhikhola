 import Mybutton  from './button';
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

 
import { AiOutlineBars } from "react-icons/ai";

export default function Header() {
 let Links=[
   {name:"Home", link:'/'},
   {name:"Services", link:'/'},
   {name:"About", link:'/'},
   {name:"Blog ", link:'/'}

 ];
let [open, setOpen]= useState(false);


  return (

    <div className='shadow-md  text-black w-full fixed top-0 left-0'>
      
     <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          <img src="
          https://drive.google.com/uc?export=view&id=1T2gqTcJL86LdZLFtN7TGl_FMgo8Pn961 "  width="80" height="80" alt="" />
        </span>
        <span className='ml-4 text-xs md:text-3xl text-purple-900 font-semibold'> 
         आधिखोला क्लव
        </span>
      </div>
      
      <div className='text-3xl md:hidden absolute right-8 top-6 mr-10 cursor-pointer'>
        <button onClick={()=>setOpen(!open)}>
           {open ?  <IoCloseSharp size="50px" color="red" /> :   <AiOutlineBars size="50px" color="red"/>
}
        </button>
      </div>

      <ul className={"md:flex md:items-center md:pb-0  pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  duration-500 ease-in md:opacity-100 opacity-100 "+ (open? 'top-25 opacity-100' : 'top-[-300px]')}>
          {
            Links.map((_link)=>(
              <li key={_link.name} className='md:ml-8 text-xl md:my-0 my-7  font-semibold'> 
                <a href={_link.link} className='text-gray-800 hover:text-red  duration-500'>{_link.name} </a>
              </li>
            ))
          }
          <Mybutton>Join</Mybutton>
      </ul>

     </div>
     
     <div>
     
    
     </div>

    </div>

  )
}
