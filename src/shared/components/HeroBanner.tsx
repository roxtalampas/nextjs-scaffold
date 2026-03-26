import { Button } from '@/shared/components/shadcnUi/button'
import Image from 'next/image'


const baseImagePath = "/assets/images/";
const ImagePath = `${baseImagePath}pages/home/`;

const HeroBanner = () => {
  return (
    <section className="full-bleed hero-banner">
        <div className="hero-banner-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center">
            <div className="text-div flex flex-col">
              <span className="tag">Hey, we are Kiun Studio</span>
              <h1>We create amazing websites and digital solutions</h1>
              <p>
                We build websites and web applications from idea to launch. Frontend, backend, and everything in between—clean code and modern tech.
              </p>
  
              <div>
                <Button className="btn-primary" >
                  Contact Us
                </Button>
                <Button className="btn-secondary">
                  Learn More
                </Button>
  
              </div>
            </div>

            <div className="image-div">
              <Image src={`${ImagePath}hero-banner-img.png`} alt="Hero Banner Image" width={500} height={500} />
            </div>

        </div>
    </section>
  )
}

export default HeroBanner