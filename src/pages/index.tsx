import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center">
        <Image
          src="/hero_img.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          
          <h1 className="text-6xl font-bold mb-4">MD TANVIR MAHMUD</h1>
          <p className="text-2xl mb-8">Full Stack Developer</p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-600 transition-all"
            >
              My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/about-image.jpg"
                alt="About Me"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Hello, I am Md Tanvir Mahmud</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in React, Next.js, and TypeScript.
                I specialize in building beautiful, functional websites and applications.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="font-bold">Name:</p>
                  <p>Md Tanvir Mahmud</p>
                </div>
                <div>
                  <p className="font-bold">Email:</p>
                  <p>tanvir.mahmud.opu@gmail.com</p>
                </div>
                <div>
                  <p className="font-bold">Phone:</p>
                  <p>01749335508</p>
                </div>
                <div>
                  <p className="font-bold">Location:</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <a
                href="#contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-all inline-block"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Creating responsive and dynamic web applications using modern technologies.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "UI/UX Design",
                description: "Designing intuitive and beautiful user interfaces for optimal user experience.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
              },
              {
                title: "Mobile Development",
                description: "Building cross-platform mobile applications using React Native.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "API Development",
                description: "Creating robust and scalable backend APIs using modern frameworks.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Database Design",
                description: "Designing and implementing efficient database structures.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
              },
              {
                title: "Cloud Services",
                description: "Deploying and managing applications on cloud platforms.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 text-center rounded-lg shadow-lg hover:shadow-xl transition-all bg-white"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">My Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div
                key={project}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={`/project-${project}.jpg`}
                  alt={`Project ${project}`}
                  width={400}
                  height={300}
                  className="w-full transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                    <a href="#" className="text-purple-400 hover:text-purple-300">
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={4}
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* Footer Top */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {/* About Column */}
            <div>
              <h3 className="text-2xl font-bold mb-4">MD TANVIR MAHMUD</h3>
              <p className="text-gray-400 mb-4">
                A passionate Full Stack Developer focused on creating beautiful and user-friendly applications.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-purple-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">About</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-purple-500 transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Mirpur 10, Dhaka, Bangladesh
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                 tanvir.mahmud.opu@gmail.com
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                 01749335508
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to my newsletter for updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="bg-purple-600 px-4 py-2 rounded-r hover:bg-purple-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Md Tanvir Mahmud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}