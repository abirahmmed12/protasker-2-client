import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-8">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Welcome to <span className="text-yellow-500">
ProTasker
</span></h1>
        <p className="text-gray-600">Your Ultimate Task Management Solution</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>

        <div className="flex items-center mb-4">
          <img src="https://th.bing.com/th/id/OIP.Tv3oG-Is7dcMNcysxIVwLAAAAA?rs=1&pid=ImgDetMain" alt="John Doe" className="rounded-full w-16 h-16 mr-4" />
          <div>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p>Founder & CEO</p>
            <p className="text-gray-600">Passionate about simplifying your tasks and boosting productivity.</p>
          </div>
        </div>

        <div className="flex items-center">
          <img src="https://iv1.lisimg.com/image/9121512/640full-sean-keenan.jpg" alt="Jane Smith" className="rounded-full w-16 h-16 mr-4" />
          <div>
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p>Head of Development</p>
            <p className="text-gray-600">Turning innovative ideas into seamless and user-friendly features.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600">
          TaskMaster was born out of a desire to create a tool that makes task management
          not just efficient, but also enjoyable. We believe that every task, no matter
          how big or small, deserves the right attention and tools for success.
        </p>
        <p className="text-gray-600">
          Our journey started with a simple idea: to empower individuals and teams to
          achieve more by simplifying the way they manage tasks. Today, TaskMaster stands
          as a testament to innovation, collaboration, and a commitment to excellence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission & Vision</h2>
        <p className="text-gray-600">
          <strong>Mission:</strong> To provide a user-centric task management solution
          that enhances productivity, fosters collaboration, and brings joy to getting things done.
        </p>
        <p className="text-gray-600">
          <strong>Vision:</strong> To be the go-to platform for individuals and teams
          seeking a seamless and delightful task management experience.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
