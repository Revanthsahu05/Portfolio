// SkillsSection.jsx
import api from "../assets/api.svg";
import node from "../assets/nodejs.svg";
import express from "../assets/expressjs.svg";
import c from "../assets/c.svg";
import tailwind from "../assets/tailwind.svg";
import mongodb from "../assets/mongodb.svg";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg"
export default function SkillsSection() {
  const skills = [
    { name: "JavaScript", img: javascript},
    { name: "React", img: react},
    { name: "Node.js", img: node },
    { name: "Express.js", img: express},
    { name: "MongoDB", img: mongodb },
    { name: "Tailwind CSS", img: tailwind },
    { name: "C++", img:c },
    { name: "REST APIs", img: api },
  ];
  return (
    <section
      id="skills"
      className="min-h-screen pt-24 bg-white p-8 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl w-full">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-white shadow p-4 rounded-xl hover:shadow-lg transition"
          >
            <img src={skill.img} alt={skill.name} className="h-16 w-16 mb-3" />
            <span className="text-sm font-medium text-gray-700">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
