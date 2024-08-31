import React from 'react';
import Ecom1 from "../assets/home-store.png";
import Ecom2 from "../assets/detail.png";
import Ecom3 from "../assets/card-pay.png";
import Ecom4 from "../assets/admin.png";
import Ecom5 from "../assets/order-ad.png";
import Ecom6 from "../assets/product-ad.png";
import customer from '../assets/videos/customer.mp4';
import admin from '../assets/videos/admin.mp4';

export default function Portfolio() {
  return (
    <>
      <div name="portfolio" className="bg-black w-full py-20">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className='text-4xl font-bold font-signature text-purple-500 inline border-b-4 border-purple-600'>
              Portfolio
            </p>
            <p className='text-gray-400 my-5'>Here is my work portfolio</p>
          </div>

          {/* Images Section */}
          <div className="text-white">
                <p>User: user@gmail.com</p>
                <p>Password: user123!@#</p>
            </div>
          <div className="grid grid-cols-1 gap-5">
            <div className='relative group hover:opacity-70'>
              <img src={Ecom1} alt="Ecommerce Image 1" />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-lg p-5 bg-purple-600 border-purple-900 border-4'>
                  Home page products
                </span>
              </div>
            </div>
          
            <div className='relative group hover:opacity-70'>
              <img src={Ecom2} alt="Ecommerce Image 2" />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-lg p-5 bg-purple-600 border-purple-900 border-4'>
                  Product detail
                </span>
              </div>
            </div>

            <div className='relative group hover:opacity-70'>
              <img src={Ecom3} alt="Ecommerce Image 2" />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-lg p-5 bg-purple-600 border-purple-900 border-4'>
                  Stripe payment
                </span>
              </div>
            </div>
          </div>
            <div className="text-white">
                <p>Admin: admin@gmail.com</p>
                <p>Password: admin123</p>
            </div>
            <div className="grid grid-cols-1 gap-5">
            <div className='relative group hover:opacity-70'>
              <img src={Ecom4} alt="Ecommerce Image 1" />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-lg p-5 bg-purple-600 border-purple-900 border-4'>
                  Admin Home page
                </span>
              </div>
            </div>
          
            <div className='relative group hover:opacity-70'>
              <img src={Ecom5} alt="Ecommerce Image 2" />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-lg p-5 bg-purple-600 border-purple-900 border-4'>
                  Admin Product
                </span>
              </div>
            </div>

            <div className='relative group hover:opacity-70'>
              <img src={Ecom6} alt="Ecommerce Image 2" />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <span className='text-white text-lg p-5 bg-purple-600 border-purple-900 border-4'>
                 Admin Order
                </span>
              </div>
            </div>
          </div>
          {/* Videos Section */}
          {/* <div className="grid grid-cols-1 gap-5">
            <div className='relative group hover:opacity-70'>
            <video
                src={customer}
                controls
                autoPlay
                loop
                width="100%"
                height="100%"
              />
            </div>
            <div className='relative group hover:opacity-70'>
            <video
                src={admin}
                controls
                autoPlay
                loop
                width="100%"
                height="100%"
              />
            </div>
          </div> */}
          
        </div>
      </div>
    </>
  );
}
