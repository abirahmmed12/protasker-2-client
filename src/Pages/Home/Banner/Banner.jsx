import React from 'react';

const Banner = () => {
    return (
        <div className='relative '>
            <img className='w-full' src="https://i.ibb.co/864y4NX/Anxious-Man-Handwriting-Preparing-For-Exam-Distressed-Study-Preparing-PNG-and-Vector-with-Transparen.jpg" alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                <h1 className='text-4xl font-bold mb-4 text-black'>Unlock Your Productivity</h1>
                <p className='text-lg mb-8 text-black'>Discover the power of effective task management.</p>
                <button className='bg-blue-500 text-white px-6 py-3 rounded-full'>Explore Now</button>
            </div>
        </div>
    );
};

export default Banner;
