import Image from "next/image";

const baseImagePath = "/assets/images/";

const teamMembers = [
    {
        id: 1,
        name: "John Doe",
        position: "Software Developer",
        image: `${baseImagePath}placeholder-img.png`,
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit. Lorem ipsum dolor sit amet,  elit ut aliquam",
    },
    
    {
        id: 2,
        name: "Kevin Smith",
        position: "Web Developer",
        image: `${baseImagePath}placeholder-img.png`,
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit. Lorem ipsum dolor sit amet,  elit ut aliquam",
    },
    
    {
        id: 3,
        name: "Sarah Johnson",
        position: "Graphic Designer",
        image: `${baseImagePath}placeholder-img.png`,
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit. Lorem ipsum dolor sit amet,  elit ut aliquam",
    },
    {
        id: 4,
        name: "David Brown",
        position: "Copywriter",
        image: `${baseImagePath}placeholder-img.png`,
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit. Lorem ipsum dolor sit amet,  elit ut aliquam",
    },

]

const AboutPage = () => {
  return (
    <main className="about-page">
        
        <section className="full-bleed hero-banner-section">
            <div className="container">
                <div className="text-div flex flex-col justify-center items-center">
                    <h1 className="text-center">Meet Kiun Studio</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
                    purus sit amet luctus magna fringilla urna</p>
                </div>
                <div className="image-div">
                    <Image src={`${baseImagePath}placeholder-img-2.png`} alt="About Hero Banner" width={500} height={500} />
                </div>
            </div>
        </section>

        <section className="full-bleed intro-section">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <h2>Creating Something Meaningful with Kiun</h2>
                </div>
                <div>
                    <p>Consectetur adipiscing elit duis tristique sollicitudin nibh. Augue mauris augue neque gravida in fermentum. Sapien pellentesque habitant morbi tristique pellentesque.</p>
                </div>
            </div>
        </section>

        <section className="full-bleed our-team-section">
            <div className="container">
                <div className="text-div flex flex-col items-center justify-center mb-10">
                    <h2>Our Team Members</h2>
                    <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
                </div>
                
                <div className="team-div grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        teamMembers.map((member) =>{
                            return (
                                <div key={member.id} className="team-item grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
                                    <div className="image-div">
                                        <Image src={member.image} alt={member.name} width={500} height={500} />
                                    </div>
                                    <div className="member-div flex flex-col justify-center">
                                        <h5>{member.name}</h5>
                                        <p>{member.position}</p>
                                        <p>{member.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>


    </main>
  )
}

export default AboutPage