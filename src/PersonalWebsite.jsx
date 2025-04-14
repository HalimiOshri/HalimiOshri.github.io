import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A novel approach to X using Y."
  },
  {
    title: "Beta Research",
    description: "Exploring Z through qualitative methods."
  },
  {
    title: "Gamma Tool",
    description: "An open-source platform for A/B/C analysis."
  }
];

export default function PersonalWebsite() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-10">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Independent Researcher</h1>
        <p className="text-lg text-gray-600">
          Passionate about science, data, and building tools that explore the unknown.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="mailto:you@example.com" className="flex items-center gap-1 text-blue-600 hover:underline"><Mail className="w-5 h-5" /> Email</a>
          <a href="https://github.com/yourusername" className="flex items-center gap-1 text-blue-600 hover:underline"><Github className="w-5 h-5" /> GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" className="flex items-center gap-1 text-blue-600 hover:underline"><Linkedin className="w-5 h-5" /> LinkedIn</a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
