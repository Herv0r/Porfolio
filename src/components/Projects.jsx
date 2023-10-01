import { projectsData } from "../constants";
import Tilt from "react-parallax-tilt";

const ProjectsSection = () => {
  return (
    <div className="w-5/6 mx-auto my-52 " id="proyects">
      <h1 className="text-center font-raleway text-white text-3xl my-4 text-[white] pb-10 ">
        My projects
      </h1>
      <div className="grid md:grd-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <Tilt key={index}>
            <a href={project.pageUrl} target="_blank"> {/* Asegúrate de que cada elemento de projectsData tenga una propiedad pageUrl */}
              <div className="bg-custom1 p-4 rounded-lg">
                <img src={project.image} className="rounded-md" />
                <h2 className="text-xl font-semibold mt-2 text-[white]">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2 text-[white]">
                  {project.description}
                </p>
                <div className="mt-2">
                  {project.tags.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 text-gray-700 py-1 rounded-md text-sm mr-2 text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
