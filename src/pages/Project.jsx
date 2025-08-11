import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const bigProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and TailwindCSS showcasing projects and blogs.",
    tags: ["React", "TailwindCSS", "Portfolio"],
    techStack: ["React", "TailwindCSS", "JavaScript"],
    image: "https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-1024x800.jpg",
    github: "https://github.com/yourusername/portfolio-website",
    demo: "https://yourdomain.com",
  },
  {
    id: 2,
    title: "Blog Platform",
    description:
      "A full-stack blog platform using MERN stack with authentication and CRUD features.",
    tags: ["MERN", "Full-stack", "Blog"],
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-1024x800.jpg",
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog.yourdomain.com",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "A fully functional e-commerce store with product listings, cart, and payment integration.",
    tags: ["React", "Stripe", "E-Commerce"],
    techStack: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-1024x800.jpg",
    github: "https://github.com/yourusername/ecommerce-store",
    demo: "https://shop.yourdomain.com",
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "Real-time chat app with rooms, direct messaging, and user authentication.",
    tags: ["Socket.io", "Real-time", "Chat"],
    techStack: ["React", "Node.js", "Socket.io", "Express"],
    image: "https://www.ultimatesource.toys/wp-content/uploads/2013/11/dummy-image-landscape-1-1024x800.jpg",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat.yourdomain.com",
  },
];

const smallProjects = [
  {
    id: 1,
    title: "Weather App",
    description: "Check the current weather and forecast for any city.",
    tags: ["API", "React", "CSS"],
    github: "https://github.com/yourusername/weather-app",
    demo: "https://weather.yourdomain.com",
  },
  {
    id: 2,
    title: "Todo List",
    description: "Simple todo list with add, edit, and delete functionalities.",
    tags: ["React", "Hooks"],
    github: "https://github.com/yourusername/todo-list",
    demo: "https://todo.yourdomain.com",
  },
  {
    id: 3,
    title: "Calculator",
    description: "A clean calculator app with basic operations.",
    tags: ["JavaScript", "CSS"],
    github: "https://github.com/yourusername/calculator",
    demo: "https://calc.yourdomain.com",
  },
  {
    id: 4,
    title: "Markdown Previewer",
    description: "Write markdown and see a live preview.",
    tags: ["React", "Markdown"],
    github: "https://github.com/yourusername/markdown-previewer",
    demo: "https://mdpreview.yourdomain.com",
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "Search recipes by ingredients using a public API.",
    tags: ["API", "React"],
    github: "https://github.com/yourusername/recipe-finder",
    demo: "https://recipes.yourdomain.com",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description: "Track your expenses with charts and statistics.",
    tags: ["React", "Chart.js"],
    github: "https://github.com/yourusername/expense-tracker",
    demo: "https://expenses.yourdomain.com",
  },
];

const Project = () => {
  return (
    <div className="py-14 md:py-20">
      <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
        My Projects
      </h1>

      {/* Big Projects */}
      <section className="grid gap-12 mb-16 md:grid-cols-2">
        {bigProjects.map(
          ({ id, title, description, tags, techStack, image, github, demo }) => (
            <div
              key={id}
              className="flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-56 object-cover md:h-64"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                    aria-label={`${title} Live Demo`}
                  >
                    Demo <FaExternalLinkAlt />
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition"
                    aria-label={`${title} GitHub Repository`}
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </section>

      {/* Small Projects */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
          Other Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {smallProjects.map(({ id, title, description, tags, github, demo }) => (
            <div
              key={id}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition"
                  aria-label={`${title} Live Demo`}
                >
                  Demo <FaExternalLinkAlt />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded-md text-sm transition"
                  aria-label={`${title} GitHub Repository`}
                >
                  Code <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;