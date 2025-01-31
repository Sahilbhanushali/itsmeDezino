import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { allWorkItems } from "../Project-gallery/Projectgallery"; // Import the exported array

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = allWorkItems.find((item) => item.id === parseInt(id)); // Find the project by ID

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="min-h-screen bg-[#E9E9E7] text-black">
      <div className="container mx-auto px-4 py-24">
        <header className="mb-20">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter">
            {project.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-xl font-light tracking-wide">
            {project.category} - {project.year}
          </p>
        </header>

        {/* Project Details Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Project Description</h2>
            <p className="text-lg text-neutral-600">
              {/* Add a detailed description for the project here */}
              This is a detailed description of the {project.title} project.
            </p>
          </div>
        </div>

        {/* Other Projects List */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {allWorkItems
              .filter((item) => item.id !== project.id) // Exclude the current project
              .map((item, index) => (
                <Link
                  key={item.id}
                  to={`/project/${item.id}`} // Add routing for each project
                  className={`group relative overflow-hidden cursor-pointer rounded-2xl ${
                    index === 0 || index === 3 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 scale-[1.01] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 opacity-60 group-hover:opacity-80 transition-all duration-500" />

                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col text-white">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-medium tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-8">
                          <span className="text-sm font-medium tracking-wider opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                            {item.year}
                          </span>
                          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black transform translate-y-[-150%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:scale-95 shadow-lg">
                            <ArrowUpRight className="w-6 h-6" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <h3 className="text-3xl md:text-4xl font-bold max-w-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
