const WorkExp = () => {
    const expData = [
        {
            company: "Afrovivo",
            expDesc: "Frontend Developer",
            desc: ""
        },
    ]
    return(
        <section>
      <div className="flex justify-center py-5">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            Some of my Works
            <span className="inline-block animate-bounce">👨‍🍳</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3">
            Here are some of the fun and recent projects I’ve worked on
          </p>

          <div className="">
            {expData.map((data) => (
                <div key={data.company}>
                </div>
            ))}
          </div>
          </div>
          </div>
          </section>
    )
}

export default WorkExp;