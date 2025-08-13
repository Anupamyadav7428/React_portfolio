export default function Aboutme() {
  return (
    <div className="max-w-5xl mx-auto text-center py-12 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-6 text-white">
        About Me
      </h2>

      {/* Professional Summary */}
      <p className="text-gray-300 leading-relaxed text-lg mb-8">
        Hi, I'm <span className="font-semibold text-blue-400">Anupam Yadav</span>, 
        a passionate <span className="text-blue-300">Computer Science student</span> with 
        hands-on experience in <span className="font-medium">machine learning</span> and 
        <span className="font-medium"> web development</span>.  
        I’ve built real-world projects like an AI-based proctoring system 
        (<span className="italic">Virtual HR</span>) and an e-commerce platform, 
        and I’m skilled in Django, Python, REST APIs, SQL, and frontend technologies.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">Languages</h3>
          <p className="text-gray-200">Python, Java, SQL, HTML, CSS, JavaScript</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">Frameworks</h3>
          <p className="text-gray-200">Django, Tailwind CSS</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 hover:scale-105 transition">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">Core Subjects</h3>
          <p className="text-gray-200">Data Structures & Algorithms, OOPs, Operating System</p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="text-left bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-bold text-blue-300 mb-4">Experience</h3>
        <p className="text-gray-200 font-medium">
          Machine Learning & Backend Developer Intern — Kickr Technology (Dec 2024 – Apr 2025)
        </p>
        <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-2">
          <li>Built “Virtual HR” — a face recognition-based proctoring system with 90% impersonation detection.</li>
          <li>Developed REST APIs using Django to deploy ML models, reducing latency by 30%.</li>
          <li>Integrated real-time video processing, spoof detection, and dynamic login slot controls.</li>
        </ul>
      </div>

      {/* Contact Links */}
      <div className="mt-10 flex justify-center gap-4 flex-wrap">
        <a
          href="mailto:annuyadav742886@gmail.com"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          📧 Email Me
        </a>
        <a
          href="https://linkedin.com/in/anupam-yadav-680851280"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/Anupamyadav7428"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
}
