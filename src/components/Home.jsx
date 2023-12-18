import React from 'react'
import HeroImage from "../assets/images/hero_image.jpg"
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full stack Developer</h2>
                <p className='text-gray-50 py-4 max-w-md'>
                    I have 8 years of exprience building and designing 
                    software.
                    Currently, I love to work on web applications using technologies like
                    React, Tailwind,Next JS and GraphQL.

                </p>
                <div>
                    <Link to='portfolio' duration={500} smooth>
                        <button className='flex items-center text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500  to-blue-500 cursor-pointer'>
                            Portfolio 
                            <span className='hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                            </span>
                        </button>
                    </Link>
                    
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-96 h-80 object-cover object-top  ' />
            </div>
        </div>
    </div>
  )
}

export default Home