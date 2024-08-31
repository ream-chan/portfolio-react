import React from 'react'
// image
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Javascript from "../assets/javascript.png"
import Tailwind from "../assets/tailwind.png"
import Jquery from "../assets/jquery.png"
import Reactjs from "../assets/reactjs.png"
import Codeigniter from "../assets/codeigniter.png"
import Laravel from "../assets/laravel.png"
import Mysql from "../assets/mysql.png"
import Grad from "../assets/graduation.jpg"
import Wzutcamp from "../assets/wzutcamp.jpg"
import Wzut from "../assets/wzut.jpg"
import Present from "../assets/presentation.jpg"
export default function Experience() {
    const techs = [
        {
            id: 1,
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: Css,
            title: "CSS",
            style: "shadow-cyan-500"
        },
        {
            id: 3,
            src: Tailwind,
            title: "TAILWIND",
            style: "shadow-cyan-500"
        },
        {
            id: 4,
            src: Javascript,
            title: "JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id: 5,
            src: Jquery,
            title: "JQUERY",
            style: "shadow-blue-900"
        },
        {
            id: 6,
            src: Reactjs,
            title: "REACT",
            style: "shadow-cyan-400"
        },
        {
            id: 7,
            src: Codeigniter,
            title: "CODEIGNITER",
            style: "shadow-red-500"
        },
        {
            id: 8,
            src: Laravel,
            title: "LARAVEL",
            style: "shadow-red-700"
        },
        {
            id: 9,
            src: Mysql,
            title: "MYSQL",
            style: "shadow-purple-700"
        },
    ]
    const studyTour = [
        {
            id:1,
            src: Wzutcamp,
        },
        {
            id:2,
            src: Grad,
        },
        {
            id:3,
            src: Present,
        },
        {
            id:4,
            src: Wzut,
        },
    ];
  return (
    <>
    <div name="experience" className="bg-black w-full md:py-20">
        <div  className="max-w-screen-lg w-full mx-auto flex flex-col justify-center items-baseline ">
          <div className="p-5">
            <p className='text-4xl text-purple-600 inline border-b-4 border-purple-800'>Expereince</p>
            <p className='text-xl text-gray-500 my-4'>These are technologies I used to work & learn with</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {
                techs.map(({ id, src, title, style }) => (
                    <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                    <img src={src} alt={title} className='w-20 mx-auto' />
                    <p className='text-xl text-white'>{title}</p>
                    </div>
                ))
            }   
          </div>
          <div className="p-5 ">
            <p className='text-4xl text-purple-600 inline border-b-4 border-purple-800'>Study Tour</p>
            <p className='text-xl text-gray-500 my-4'>Mekong lanchang Enterprise Education program which held in China, Wenzhou University of Technology</p>
          </div>
          <div className="w-full grid sm:grid-cols-2 text-center py-10 px-12 gap-10 ">
            {
                studyTour.map(({id,src})=> (
            <div key={id}
            className='rounded-md shadow-2xl shadow-purple-700 hover:scale-105 duration-700'>
                <img src={src} alt="" className=' mx-auto' />
            </div> 
                ))
            }
          </div>
        </div>
    </div>
    </>
  )
}
