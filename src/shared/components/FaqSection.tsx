import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/shared/components/shadcnUi/accordion"


const faq = [
    {
        id: 1,
        question: "What services does Kiun Studio offer?	",
        answer: "We specialise in web design, web development, branding, and digital strategy tailored to help businesses grow online.",
    },
    {
        id: 2,
        question: "How long does a typical project take?	",
        answer: "Timelines vary by scope, but most projects are delivered within 4–8 weeks from kickoff to launch.",
    },
    {
        id: 3,
        question: "What is your pricing structure?	",
        answer: "Every project is unique. We provide custom quotes based on your requirements after an initial discovery call.",
    },
    {
        id: 4,
        question: "Do you offer ongoing support after launch?",
        answer: "Yes, we offer maintenance and support packages to keep your site updated, secure, and performing well.",
    },
    {
        id: 5,
        question: "Can I see examples of your past work?	",
        answer: "Of course! Head over to our Portfolio page to see some of our recent projects.",
    },
]

const FaqSection = () => {
  return (
    <section className="full-bleed faq-section">
        <div className="container">
            <div className="text-div flex flex-col items-center justify-center mb-10">
                <h2 className="text-center mb-10">Frequently Asked Questions</h2>
                <p>Find answers to commonly asked questions about our process, pricing, and services.</p>
            </div>

            <div className="accordion-div flex justify-center">
                <Accordion type="single" collapsible defaultValue="item-1" className="accordion">
                {
                    faq.map((item) => (
                        <AccordionItem key={item.id} value={item.id.toString()} className="px-5 pt-5">
                            <AccordionTrigger className="question">{item.question}</AccordionTrigger>
                            <AccordionContent className="answer">{item.answer}</AccordionContent>
                        </AccordionItem>
    
                    ))
                }
                </Accordion>
            </div>
        </div>

        
    </section>
  )
}

export default FaqSection