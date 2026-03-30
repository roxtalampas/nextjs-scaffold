

const ContactUsSection = () => {
  return (
    <section className="full-bleed contact-us-section">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            <div className="text-div flex flex-col  justify-center lg:mb-10">
                <h2 className=" mb-10">Let&apos;s Build Something Amazing Together
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
                purus sit amet luctus magna fringilla urna</p>
            </div>

            <div className="form-div">
                <div className="contact-us-form-wrapper">
                    <form action="#" className="contact-us-form">
                    <div className="mb-5">
                    <label className="mb-2 block">Your Name
                    </label>
                        <div className="relative group">
                        <input className="w-full" placeholder="John Doe" type="text"/>
                        
                        </div>
                    </div>

                    <div className="mb-5">
                    <label className="mb-2 block">Email Address</label>
                    <div className="relative group">
                    <input className="w-full" placeholder="hello@example.com" type="email"/>
                    </div>
                    </div>
                    
                    <div className="mb-5">
                    <label className="mb-2 block">Message</label>
                    <div className="relative group">
                    <textarea className="w-full" placeholder="Tell us about your project..." rows={4}></textarea>
                    </div>
                    </div>
                    <button className="w-full btn-primary" type="submit">
                    <span>Send Message</span>
                    </button>
                    </form>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ContactUsSection