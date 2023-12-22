import React from 'react';

const Extrasection = () => {
    return (
        <section className='bg-gray-100 py-16'>
            <div className='container mx-auto text-center'>
                <h2 className='text-4xl font-bold mb-8'>Supercharge Your Productivity with 
ProTasker
</h2>
                <p className='text-lg text-gray-700 mb-8'>
                    Managing tasks efficiently is key to staying organized and achieving your goals. Our powerful task
                    management system helps you streamline your workflow, prioritize tasks, and collaborate seamlessly.
                </p>
                <div className='flex justify-center mb-12'>
                    <img
                        className='w-64 h-64 object-cover rounded-full border-4 border-white'
                        src='https://i.ibb.co/xMkhj1R/Creative-thinking-Customizable-Cartoon-Illustrations-Bro-Style.jpg'
                        alt='Task Management'
                    />
                </div>
                <p className='text-lg text-gray-700 mb-8'>
                    Whether you're an individual looking to stay on top of your daily tasks or a team collaborating on
                    complex projects, our task management solution provides the tools you need for success.
                </p>
                <div className='flex justify-center'>
                    <a
                        href='#explore'
                        className='bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300'
                    >
                        Explore Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Extrasection;
