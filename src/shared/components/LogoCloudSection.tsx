import Image from 'next/image'

const baseImagePath = "/assets/images/";
const logoPath = `${baseImagePath}logos/`;

const logos = [
    {
        src: `${logoPath}microsoft-logo.svg`,
        alt: "Microsoft",
    },
    {
        src: `${logoPath}paypal-logo.svg`,
        alt: "Paypal",
    },
    {
        src: `${logoPath}google-logo.svg`,
        alt: "Google",
    },
    {
        src: `${logoPath}chase-logo.svg`,
        alt: "Chase",
    },
    {
        src: `${logoPath}walmart-logo.svg`,
        alt: "Walmart",
    },
]

  
const LogoCloudSection = () => {
  return (
    <section className="logo-cloud-section">
        <div className="container">
            <p className="mb-10">Trusted by the clients we have worked with</p>
            <div className="logo-cloud-content flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                
                    {logos.map((logo) => (
                        <div className="logo-cloud-item" key={logo.alt}>
                            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
                        </div>
                    ))}
                
            </div>
        </div>
    </section>
  )
}

export default LogoCloudSection