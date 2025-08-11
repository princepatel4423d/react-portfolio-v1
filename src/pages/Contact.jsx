import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-600",
  },
  {
    id: 2,
    icon: <FaGithub />,
    label: "GitHub",
    url: "https://github.com/yourusername",
    color: "hover:text-gray-800 dark:hover:text-gray-300",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    label: "Twitter",
    url: "https://twitter.com/yourusername",
    color: "hover:text-blue-400",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    label: "Instagram",
    url: "https://instagram.com/yourusername",
    color: "hover:text-pink-500",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate your submission logic here (API call, email sending, etc.)
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20 md:py-28 animate-fadeIn">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
        Get In Touch
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Contact Form */}
        <div className="md:w-1/2 bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl shadow-lg">
          {submitted ? (
            <div className="p-6 bg-green-100 dark:bg-green-900 rounded-lg text-green-800 dark:text-green-200 text-center text-lg font-semibold animate-pulse">
              Thank you for reaching out! Your message has been received, and I
              will get back to you as soon as possible.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-3 pt-5 pb-2 text-gray-900 dark:text-gray-100 placeholder-transparent text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-2.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400 cursor-text"
                >
                  Your Full Name
                </label>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all peer-focus:w-full"
                  aria-hidden="true"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-3 pt-5 pb-2 text-gray-900 dark:text-gray-100 placeholder-transparent text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-2.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400 cursor-text"
                >
                  Your Email Address
                </label>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all peer-focus:w-full"
                  aria-hidden="true"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder=" "
                  className="peer block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-3 pt-5 pb-2 text-gray-900 dark:text-gray-100 placeholder-transparent resize-y text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 top-2.5 text-gray-600 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600 dark:peer-focus:text-blue-400 cursor-text"
                >
                  Your Message
                </label>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all peer-focus:w-full"
                  aria-hidden="true"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="py-2 px-3 bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform active:scale-95 animate-bounceOnce cursor-pointer"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right Side: Info + Social Media */}
        <div className="md:w-1/2 flex flex-col justify-center gap-10">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Contact Information
            </h2>
            <p className="text-sm md:text-base">
              Feel free to reach out via email or phone for inquiries,
              collaboration, or just to say hello.
            </p>
            <p className="text-sm md:text-base">
              I'm always excited to connect with like-minded developers and
              professionals to grow networks and create something meaningful.
            </p>
            <div className="space-y-4 mt-6 text-sm md:text-base">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 dark:text-blue-400 text-lg md:text-xl" />
                <a
                  href="mailto:youremail@example.com"
                  className="hover:underline break-all"
                >
                  youremail@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-600 dark:text-blue-400 text-lg md:text-xl" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Connect with me
            </h3>
            <div className="flex gap-6 text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
              {socialLinks.map(({ id, icon, label, url, color }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition-colors duration-300 ${color}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;