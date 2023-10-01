import React from 'react';
import {
  git,
  github,
  css,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwindcss,
  python,
  mysql,
  csharp
} from "../assets/Tech";

const techImages = [
  html, css, git, javascript, mongodb, nodejs,
  reactjs, tailwindcss, python, mysql, csharp, github
];

const Tech = () => {
  return (
    <section className="mb-52 bg-gradient-to-b from-tertiary to-primary">
      <h1 className="text-[white] text-center font-raleway text-[30px] mb-16">Languages and Technologies</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center bg-custom2 py-5 gap-4">
        {techImages.map((tech, index) => (
          <img
            key={index}
            src={tech}
            className="w-14 transform transition-transform hover:scale-125 mx-auto"
            alt={`Tech ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Tech;
