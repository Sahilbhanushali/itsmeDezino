import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
import "../Project-gallery/Projectgallery.scss";

export const allWorkItems = [
  {
    id: 1,
    title: "Branding & Strategy",
    category: "BRANDING",
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=2070&q=80",
    year: "2024",
  },
  {
    id: 2,
    title: "Digital Experience",
    category: "UI/UX DESIGN",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2070&q=80",
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile Innovation",
    category: "DEVELOPMENT",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=2070&q=80",
    year: "2023",
  },
  {
    id: 4,
    title: "Creative Solutions",
    category: "STRATEGY",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2015&q=80",
    year: "2023",
  },
  {
    id: 5,
    title: "Visual Identity",
    category: "BRANDING",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=2070&q=80",
    year: "2023",
  },
  {
    id: 6,
    title: "Web Platform",
    category: "DEVELOPMENT",
    image:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=2070&q=80",
    year: "2023",
  },
];

const ProjectGallery = () => {
  return (
    <div className="min-h-screen bg-[#E9E9E7] text-black">
      <div className="container mx-auto px-4 py-24">
        <header className="mb-20">
          <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tighter">
            Work
          </h1>
          <p className="text-xl text-neutral-600 max-w-xl font-light tracking-wide">
            Making your boldest ideas a reality
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {allWorkItems.map((item, index) => (
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
  );
};

export default ProjectGallery;
