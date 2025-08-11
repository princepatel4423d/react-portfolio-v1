import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            About Me
          </h3>
          <p className="leading-relaxed text-sm md:text-base">
            I’m John Doe, a passionate full-stack developer focused on building
            scalable and performant web applications. I love turning ideas into
            reality using modern technologies and clean code.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl text-center font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-4 text-center text-sm md:text-base">
            <li>
              <a
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Connect With Me
          </h3>
          <div className="flex gap-6 text-3xl text-gray-700 dark:text-gray-300">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-800 dark:hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-4 text-center text-sm text-gray-800 dark:text-gray-200">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;