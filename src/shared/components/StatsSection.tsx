const stats = [

    {
        title: "Projects Completed",
        value: "150+",
    },
    {
        title: "Happy Clients",
        value: "80+",
    },
    {
        title: "Years of Experience",
        value: "5+",
    },
    {
        title: "Websites Hosted",
        value: "300+",
    },

]
const StatsSection = () => {
  return (
    <section className="full-bleed stats-section">
        <div>
            <div className="text-div flex flex-col items-center justify-center mb-10">
                <h2 className="text-center mb-10">We get results</h2>
                <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
                purus sit amet luctus magna fringilla urna</p>
            </div>

            <div className="stat-div grid grid-cols-1 lg:grid-cols-4 gap-10">

                {
                    stats.map((stat) => (
                        <div key={stat.title} className="stat-item flex flex-col items-center justify-center">
                        <h5>{stat.title}</h5>
                        <p>{stat.value}</p>
                        </div>

                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default StatsSection