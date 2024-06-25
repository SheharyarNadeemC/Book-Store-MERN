import React from 'react';
import banner from '../../public/banner(freepik).jpg';
function Banner() {
    return (
        <>
            <div className='max-w-scrren-2xl pt-10 container mx-auto  md:px-20 px-4  flex flex-col md:flex-row'>
                <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-25'>
                    <div className='space-y-6'>
                        <h1 className='text-4xl font-bold'>Welcome to Sheharyar's Book Store. Here you can learn new thing <span className='text-pink-500'>Every Day!</span></h1>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.</p>
                        <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input type="text" className="grow" placeholder="Enter your email to login" />
                    </label>
                    </div>
                    <button className="btn hover:bg-pink-500 hover:text-white mt-3">Login</button>
                </div>
                <div className='w-full order-1 md:order-2 md:w-1/2 mt-12 md:mt-25'>
                    <img src= {banner} alt='Image not lodding!'>

                    </img>
                </div>
            </div>
        </>
    )
}

export default Banner
