import Image from "next/image";

const baseImagePath = "/assets/images/";


const projects = [
    {
        id: 1,
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Web Design",
    },

    {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Web Development",
    },
    {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Web Development",
    },
    {
        id: 4,
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        category: "Landing Page",
    },
    {
        id: 5,
        title: "Project 5",
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="hero-project-card">
                        <div className="image-div">
                            <Image src={heroProject.image} alt={heroProject.title} width={800} height={500} />
                        </div>
                        <div className="text-div p-5">
                            <h4 className="mb-2">{heroProject.title}</h4>
                            <p className="mb-6">{heroProject.category}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {
                            sideProjects.map((project) => (
                                <div key={project.id} className="side-projects-card grid grid-cols-2 gap-4">
                                    <div className="image-div">
                                        <Image src={project.image} alt={project.title} width={150} height={150} />
                                    </div>
                                    <div className="text-div py-2">
                                        <h5 className="mb-2">{project.title}</h5>
                                        <p className="mb-6">{project.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    </main>
  )
}

export default ProjectsPage