export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-2xl font-bold">Jhordan Suzuki</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Hello, I&apos;m Jhordan Suzuki</h2>
        <p className="text-lg md:text-2xl mb-6">I&apos;m a Full-Stack Developer building modern web applications.</p>
        <a 
          href="#projects" 
          className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="max-w-2xl mx-auto">
          I&apos;m a passionate developer with experience in JavaScript, React, Node.js, and modern web technologies. 
          I love creating performant and scalable web applications with clean code.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-8">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Firebase'].map(skill => (
            <div 
              key={skill} 
              className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-purple-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example project card */}
          <div className="p-6 bg-gray-700 rounded-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Portfolio Website</h4>
            <p>A personal portfolio website built with Next.js and Tailwind CSS.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-lg hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Todo App</h4>
            <p>A full-stack Todo app using React, Node.js, and MongoDB.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
        <p className="mb-6">Feel free to reach out for collaborations or freelance work.</p>
        <a href="mailto:jhordan@example.com" className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
          Say Hello
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-center">
        <p>© 2025 Jhordan Suzuki. All rights reserved.</p>
      </footer>
    </div>
  );
}
