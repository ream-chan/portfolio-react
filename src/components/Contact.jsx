import React from 'react'

export default function Contact() {
  return (
    <>
    <div name="contact me" className="bg-black w-full h-screen p-5 text-white">
        <div className="flex flex-col justify-center p-5 max-w-screen-lg mx-auto h-full   ">
            <div className="pb-8 pt-5">
                <p className='text-4xl text-purple-600 inline border-b-4 border-purple-800 '>Contact me</p>
                <p className='my-5'>Please submit form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="" className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name='name'
                    placeholder='Enter you name'
                    className='p-2 bg-transparent border-2 border-purple-600 focus:outline-none rounded-md text-white'
                    />
                    <input 
                    type="email" 
                    name='name'
                    placeholder='Enter you email'
                    className='p-2 my-5 bg-transparent border-2 border-purple-600 focus:outline-none rounded-md text-white'
                    />
                    <textarea name="message"
                    rows="10"
                    className='p-2 bg-transparent border-2 border-purple-600 rounded-md text-white focus:outline-none'
                    >
                    </textarea>
                    <div >
                    <button
                    className='text-white w-fit px-6 py-3 my-3 rounded-lg bg-gradient-to-r from-purple-950 to-purple-600 flex items-center gap-2
                     hover:from-purple-950 hover:to-purple-950' >
                       Let's Talk
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
