import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Abouts 
            <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span>
        </h1>
        <p className='text-grey-500 max-w-800 text-center mb-8 '>Passionate About Properties, Dedicated to Your Vision</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
           <img src={assets.brand_img} alt="brandImage" className='w-full sm:w-1/2 max-w-lg' /> 
           <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years Of experince</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Years Of experince</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>15+</p>
                        <p>Years Of experince</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>100+</p>
                        <p>Years Of experince</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className='bg-blue-600 text-white px-8 py-2'>Learn More</button>
           </div>
        </div>
    </div>
  )
}

export default About