import React from 'react'
import { FaGithub, FaLinkedin, FaUser } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

export default function Social() {
    const links = [
        {
            id: 1,
            child: (
                <>
                   Linkdln <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/ream-chan-523693286/",
           

        },
        {
            id: 2,
            child: (
                <>
                   Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/ream-chan",
           
        },
        {
            id: 3,
            child: (
                <>
                  CV <FaUser size={30} />
                </>
            ),
            href: "/mycover-letter.pdf",
            download: true,
           
        },
        {
            id: 4,
            child: (
                <>
                   Email <IoMail size={30} />
                </>
            ),
            href: "mailto:chantitdaream@gmail.com",
           
        },
    ]
  return (
    <>
      <div className="flex flex-col top-[56%] md:top-[35%] left-0 absolute md:fixed">
            <ul > 
            {links.map(({id, child , href , style})=>(
                    <li key={id} className={
                    "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-purple-500"
                    }>
                    <a 
                     href={href}
                     className="flex justify-between items-center w-full text-white">
                          {child}
                    </a>
                </li>
                ))} 
                
            </ul>
        </div>
    </>
  )
}
