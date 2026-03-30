import Image from "next/image";

const baseImagePath = "/assets/images/";


const projects = [
    {
        id: 1,
        title: "Project Name 1",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Web Design",
    },

    {
        id: 2,
        title: "Project Name 2",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Web Development",
    },
    {
        id: 3,
        title: "Project Name 3",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Web Development",
    },
    {
        id: 4,
        title: "Project Name 4",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Landing Page",
    },
    {
        id: 5,
        title: "Project Name 5",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "E-commerce",
    },
    {
        id: 6,
        title: "Project Name 6",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "E-commerce",
    },
]

const heroProject = projects[0];
const sideProjects = projects.slice(1, 3); // takes items at index 1, 2
const ProjectsPage = () => {
  return (
    <main className="projects-page">
        
        <section className="full-bleed hero-banner-section">
            <div className="container">
                <div className="text-div flex flex-col justify-center items-center">
                    <h1>Projects</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam</p>
                </div>

                <div className="featured-projects-div grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="hero-project-card">
                        <div className="image-div">
                            <Image src={heroProject.image} alt={heroProject.title} width={800} height={500} />
                        </div>
                        <div className="text-div p-5">
                            <div className="wrapper p-5 bg-white border-radius-md ">
                                <h5 className="mb-2">{heroProject.title}</h5>
                                <p className="mb-0">{heroProject.category}</p>
                            </div>
                        </div>
                    </div>

                    <div className="side-projects-div flex flex-col justify-between gap-8">
                        {
                            sideProjects.map((sideProject) => (
                                <div key={sideProject.id} className="side-projects-card">
                                    <div className="image-div">
                                        <Image src={sideProject.image} alt={sideProject.title} width={800} height={500} />
                                    </div>
                                    <div className="text-div p-5">
                                        <div className="wrapper p-5 bg-white border-radius-md ">
                                            <h5 className="mb-2">{sideProject.title}</h5>
                                            <p className="mb-0">{heroProject.category}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>

        <section className="full-bleed projects-section">
            <div className="container">
                <div className="projects-grid grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {
                        projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="image-div">
                                    <Image src={project.image} alt={project.title} width={500} height={500} />
                                </div>
                                <div className="text-div p-5">
                                    <div className="wrapper p-5 bg-white border-radius-md ">
                                        <h5 className="mb-2">{project.title}</h5>
                                        <p className="mb-0">{project.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProjectsPage