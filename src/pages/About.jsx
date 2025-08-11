import React from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDatabase, 
  FaGuitar, 
  FaRunning, 
  FaBook 
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="py-16 md:py-24">
      {/* Hero / Profile Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        <img
          src={assets.aboutImage} // Replace with your own image URL
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover shadow-lg dark:shadow-gray-800"
        />
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Hello, I’m John Doe
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a passionate web developer with over 5 years of experience in creating dynamic and user-friendly websites and applications. I specialize in React, Node.js, and modern JavaScript frameworks.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            I love crafting beautiful, performant, and accessible interfaces while ensuring smooth backend integration.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "React", icon: <FaReact className="text-blue-500 dark:text-blue-400 text-4xl" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 dark:text-yellow-300 text-4xl" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600 dark:text-green-500 text-4xl" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 dark:text-teal-300 text-4xl" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-700 dark:text-green-600 text-4xl" /> },
            { name: "Express", icon: <SiExpress className="text-gray-700 dark:text-gray-400 text-4xl" /> },
            { name: "Git", icon: <FaGitAlt className="text-red-600 dark:text-red-500 text-4xl" /> },
            { name: "Databases", icon: <FaDatabase className="text-indigo-600 dark:text-indigo-500 text-4xl" /> },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-sm dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {skill.icon}
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience / Timeline Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Experience
        </h2>
        <ol className="border-l-2 border-gray-300 dark:border-gray-600 relative">
          {[
            {
              role: "Senior Frontend Developer",
              company: "Tech Corp",
              duration: "2022 - Present",
              details:
                "Leading the frontend team building scalable React applications and improving UI/UX.",
            },
            {
              role: "Full Stack Developer",
              company: "Web Solutions",
              duration: "2019 - 2022",
              details:
                "Developed end-to-end solutions with React, Node.js, and MongoDB for multiple client projects.",
            },
            {
              role: "Junior Developer",
              company: "Startup Hub",
              duration: "2017 - 2019",
              details: "Assisted in building web apps and APIs while learning full stack development.",
            },
          ].map((job, idx) => (
            <li key={idx} className="mb-10 ml-6 relative">
              <span className="absolute -left-4 top-3 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {job.role}
              </h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">{job.company}</span>
              <span className="block text-sm text-gray-500 dark:text-gray-500">
                {job.duration}
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{job.details}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Fun Facts / Hobbies */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Fun Facts & Hobbies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-gray-900 text-center">
            <FaGuitar className="mx-auto text-6xl mb-4 text-purple-600 dark:text-purple-400" />
            <h4 className="text-xl font-semibold mb-2">Guitarist</h4>
            <p>I enjoy playing acoustic guitar to relax and get creative.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-gray-900 text-center">
            <FaBook className="mx-auto text-6xl mb-4 text-blue-600 dark:text-blue-400" />
            <h4 className="text-xl font-semibold mb-2">Avid Reader</h4>
            <p>I love reading tech blogs, fiction, and history books in my free time.</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-sm dark:shadow-gray-900 text-center">
            <FaRunning className="mx-auto text-6xl mb-4 text-green-600 dark:text-green-400" />
            <h4 className="text-xl font-semibold mb-2">Runner</h4>
            <p>Running helps me stay focused and energized throughout the day.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;