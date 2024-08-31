import React, { useEffect } from 'react'
import HeroImage from "../assets/hero.jpg"
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { Link } from 'react-scroll'
import Typed from 'typed.js';


export default function Home() {
    // typing effect
    useEffect(() => {
        const options = {
          strings: [
            `Building a successful product is a challenge, but it's a journey I'm passionate about. 
            As a junior web developer, I'm eager to learn and grow in user experience design, 
            interfaces, database, and functionality development.`
          ],
          loop: false,            // Disable looping
          typeSpeed: 20,          // Speed at which text is typed
          backSpeed: 0,           // Disable backspacing
          backDelay: 0,           // No delay before erasing
          startDelay: 500,        // Delay before typing starts
          showCursor: true        // Display blinking cursor
        };
    
        const typed = new Typed('.textType', options);
    
        return () => {
          typed.destroy();
        };
      }, []);

      
  return (
    <>
    <div name="home" 
         className="h-screen w-full bg-black">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
            <div>
                <h2 className='text-4xl sm:text-6xl font-bold'>
                    Greeting, I'm <span className='text-purple-600'>Ream</span>
                    <span > Web Developer </span>
                </h2>
                <p className='py-4 max-w-md text-2lg text-white textType'>
                    
                </p>
                <div >
                    <Link to='portfolio' smooth duration={500}
                    className='text-white w-fit px-6 py-3 my-3 rounded-lg bg-gradient-to-r from-purple-950 to-purple-600 flex items-center gap-2
                     hover:from-purple-700 hover:to-purple-600 cursor-pointer' >
                        Portfolio 
                        <span className='hover:rotate-90'>
                            <IoIosArrowDroprightCircle size={25} />
                        </span>
                    </Link>
                </div>
            </div>
            <div >
                  <img className="w-2/3 m-auto my-3 rounded-xl md:w-full " 
                  src={HeroImage} alt=""  />
            </div>
        </div>
    </div>
    
  
    </>
  )
}
