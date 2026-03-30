import Link from "next/link";
import Image from "next/image";

const baseImagePath = "/assets/images/";
const iconPath = `${baseImagePath}icons/`;


const FeaturesSection = () => {
  return (
    <section className="features-section">
        <div className="container">
            <h2 className="text-center mb-10">Our Features</h2>

            <div className="flex flex-col gap-6 lg:gap-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
                    <div className="text-div flex flex-col justify-center p-6 lg:p-10">
                        <div className="wrapper">
                            <h2 className="mb-6">Never miss any task</h2>
                            <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus </p>
        
                            <Link href="/features" className="btn-primary">Get Started</Link>
                        </div>
    
                    </div>
                    <div className="image-div">
                        <Image src={`${baseImagePath}placeholder-img.png`} alt="Features Section Image" width={500} height={500} />
                    </div>
                </div>
    
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
                    <div className="image-div order-2 lg:order-1">
                        <Image src={`${baseImagePath}placeholder-img.png`} alt="Features Section Image" width={500} height={500} />
                    </div>
                    
                    <div className="text-div flex flex-col justify-center p-6 lg:p-10 lg:px-0 order-1 lg:order-2">
                        <div className="wrapper">
                            <h2 className="mb-6">Understand sales
                            performance better</h2>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus       
                            </p>

                            <div className="line border-b border-color pb-10 mb-10"></div>

                            <ul>
                                <li className="flex gap-2 mb-5">          
                                    <Image src={`${iconPath}check-icon.svg`} alt="Check Icon" width={20} height={20} className="check-icon" />
                          
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </li>
                                <li className="flex gap-2 mb-5">
                                    <Image src={`${iconPath}check-icon.svg`} alt="Check Icon" width={20} height={20} className="check-icon" />
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </li>
                                <li className="flex gap-2 mb-5">
                                    <Image src={`${iconPath}check-icon.svg`} alt="Check Icon" width={20} height={20} className="check-icon" />
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </li>
                            </ul>
        
                            
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection