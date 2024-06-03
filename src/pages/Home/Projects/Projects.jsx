import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetProjects } from "../../../api/projects.hook";

const Projects = () => {
  const { data, isLoading, isError } = useGetProjects();
  console.log(data);
  const projects = data?.data;
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (projects) {
      setItems(projects);
    }
  }, [projects]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong...</p>;
  }

  const filterItem = (ci) => {
    const updatedItems = projects.filter((curItem) => {
      return curItem.category === ci;
    });
    setItems(updatedItems);
  };

  return (
    <div className="px-5 md:px-20 lg:px-60  my-40">
      <h2
        data-aos="fade-right"
        data-aos-duration="2000"
        className="text-center md:text-left text-3xl md:text-5xl font-bold mb-5"
      >
        Portfolio
      </h2>
      <p data-aos="fade-left" data-aos-duration="2000" className="mb-3">
        Check out my projects section! I have worked on diverse React front-end
        projects, showcasing my skills in creating interactive interfaces,
        optimizing performance, and more.
      </p>
      {/* $$$$$$$$$$$  tabs  $$$$$$$$$$$ */}
      <div>
        <button
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          onClick={() => setItems(projects)}
          className=" shadow-md bg-neutral px-3 py-2 rounded-2xl font-semibold"
        >
          All
        </button>
        <button
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          onClick={() => filterItem("basic")}
          className=" shadow-md bg-neutral px-3 py-2 rounded-2xl font-semibold mx-3"
        >
          Next js
        </button>
        <button
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          onClick={() => filterItem("react")}
          className=" shadow-md bg-neutral px-3 py-2 rounded-2xl font-semibold"
        >
          React js
        </button>
        <button
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          onClick={() => setItems(projects)}
          className=" shadow-md bg-neutral px-3 py-2 rounded-2xl font-semibold ms-3"
        >
          Best 3
        </button>
      </div>
      {/* $$$$$$$$$$$  main content  $$$$$$$$$$$ */}
      <div className="my-5 grid md:grid-cols-2 gap-5">
        {items?.map((project) => (
          <div
            key={project.name}
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-full bg-neutral px-5 py-8 shadow-xl rounded-3xl"
          >
            <div className="mockup-window border border-accent bg-base-300 max-w-xl  h-60">
              <div
                className="projectImage flex justify-center h-full px-4 py-1 transition-all duration-[8s] bg-base-200 hover:bg-bottom"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <p className="mt-3">{project.name}</p>
            <div className="">
              <Link
                to={project.live}
                target="_blank"
                className="hover:text-primary"
              >
                Visit site for More Details
              </Link>
              <div className="mt-5 flex flex-wrap">
                <Link
                  className="bg-accent text-white text-xs mr-2 mb-2 w-fit px-5 py-3 rounded-2xl duration-500 hover:rounded-3xl hover:border-b"
                  to={project.server}
                  target="_blank"
                >
                  Server Code
                </Link>
                <Link
                  className="bg-accent text-white text-xs mb-2 w-fit px-5 py-3 rounded-2xl duration-500 hover:rounded-3xl hover:border-b"
                  to={project.client}
                  target="_blank"
                >
                  Client Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
