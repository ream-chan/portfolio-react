import React from 'react'
import AboutImage from "../assets/about.jpg"
export default function About() {
  return (
    <>
    <div name="about" 
    className="w-full h-screen bg-black pb-20 py-10">
        <div className="text-white max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-full h-full gap-5 md:flex-row md:py-20 ">
            <div className="w-60 m-auto my-3 md:w-96">
              <img className='rounded-lg' src={AboutImage} alt=""  />
            </div>
            <div className="pb-2 md:w-2/4">
            <p className='text-7xl font-bold font-signature text-purple-500 inline border-b-4 border-purple-600'>About</p>
            <p className='text-xl mt-20 my-5'>
                Breif personal info 
            </p>
              <div className=" w-4/4 text-xl ">
                <div className="flex justify-between my-2">
                  <p className='font-signature text-purple-600'>Name:</p>
                  <p className='text-gray-400'>An ChantitDaream</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className='font-signature text-purple-600'>Date of Birth:</p>
                  <p className='text-gray-400'>08 / Aug / 2004</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className='font-signature text-purple-600'>Address:</p>
                  <p className='text-gray-400'>Phnom Penh</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className='font-signature text-purple-600'>Education:</p>
                  <p className='text-gray-400'>Year 3 of CS</p>
                </div>
                <div className="flex justify-between my-2">
                  <p className='font-signature text-purple-600'>Email:</p>
                  <p className='text-gray-400'>chantitdaream@gmail.com</p>
                </div>
                <div className="flex justify-between">
                  <p className='font-signature text-purple-600'>Telegram:</p>
                  <p className='text-gray-400'>077778113</p>
                </div>
                <div className="flex">
                   <button className='my-5 p-3 bg-gradient-to-r from-purple-950 to-purple-600 rounded-md'>Download CV</button>
                </div>
              </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
