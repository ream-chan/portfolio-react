import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll";
export default function NavBar() {
    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact me",
        }
    ]
    const [nav,setNav] = useState(false);    
  
  return (
    <>
    <div className="flex justify-between items-center text-white bg-black w-full h-20 px-4 fixed z-20">
        <div className="text-5xl font-bold font-signature ml-3 text-purple-700 ">
            <p>Ream</p>
        </div>
        
            <ul className="hidden md:flex">
                {links.map(({id, link})=>(
                    <li
                     key={id}
                     className='px-4 cursor-pointer hover:scale-110 duration-300 hover:text-purple-600 capitalize'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}   
            </ul>
            <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
                   {nav ? <FaTimes size={30}/> : <FaBars size={30}/>} 
            </div>
            {nav &&(
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800'>
                {links.map(({id, link})=>(
                        <li
                        key={id}
                        className='px-4 py-6 cursor-pointer hover:scale-110 duration-300 hover:text-purple-600 capitalize'>
                            <Link 
                            onClick={()=> setNav(!nav)}
                                to={link} 
                                smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}  
                </ul>
            )}
            
    </div>
        {/* <h1 className="text-5xl font-bold text-red-600 font-signature">Ream</h1> */}
    </>
  )
}
