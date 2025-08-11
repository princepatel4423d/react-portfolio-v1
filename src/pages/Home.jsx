import React from "react";
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-20 mb-28">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
            Hi, I’m <span className="text-blue-600">John Doe</span>
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
            Full-Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I create beautiful and performant web applications with a focus on
            clean code, usability, and scalable architecture. Let’s build
            something amazing together.
          </p>
          <div className="flex flex-wrap gap-6 mt-6">
            <a
              href="/path-to-your-cv.pdf"
              download
              className="px-3 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-3 py-2 rounded-md border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <img
            src={assets.aboutImage}
            alt="John Doe"
            className="rounded-xl shadow-lg object-cover w-full max-h-[500px]"
          />
        </div>
      </section>

      {/* Big Intro Section */}
      <section className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
          With over 5 years of experience in web development, I specialize in
          crafting full-stack solutions that are both user-friendly and
          scalable. I enjoy working with the latest technologies like React,
          Node.js, and Tailwind CSS, and I am passionate about continuously
          learning and improving my skills.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Beyond coding, I love collaborating with teams, solving challenging
          problems, and contributing to open-source projects. Whether it's a
          startup idea or a complex enterprise system, I am ready to help turn
          your vision into reality.
        </p>
      </section>
    </div>
  );
};

export default Home;