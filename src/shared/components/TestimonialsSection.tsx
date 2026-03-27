import Image from "next/image";

const baseImagePath = "/assets/images/";
const iconPath = `${baseImagePath}icons/`;

const testimonials = [
    {
        id: 1,
        name: "Emma Richardson",
        position: "Operations Manager, Coastal Property Group",
        testimonial: `"Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"`,
        image: `${baseImagePath}placeholder-img.png`,
    },
    {
        id: 2,
        name: "Sarah Mitchell	",
        position: "Marketing Director, Apex Digital",
        testimonial: `"Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"`,
        image: `${baseImagePath}placeholder-img.png`,
    },
    {
        id: 3,
        name: "David Chen	",
        position: "Founder, GreenLeaf Co.	",
        testimonial: `"Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"`,
        image: `${baseImagePath}placeholder-img.png`,
    },
]

const TestimonialsSection = () => {
  return (
    <section className="full-bleed testimonials-section">
        <div className="container">
            <h2 className="text-center mb-10">What our clients are saying</h2>

            <div className="testimonials-div grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="item py-10 px-8">
                            <Image src={`${iconPath}star-review-icon.svg`} alt="quote" width={140} height={20} className="mb-6" />
                            <p className="mb-6">{testimonial.testimonial}</p>
                            
                            <div className="flex items-center gap-4">
                                <Image src={testimonial.image} alt={testimonial.name} width={60} height={60} className="img-circle" />
                                <div>
                                    <h5 className="mb-0">{testimonial.name}</h5>
                                    <p className="position">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection