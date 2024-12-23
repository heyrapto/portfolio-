import { ArrowDown, Minus, Check } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
const WorkExp = () => {
    const expData = [
        {
            company: "Afrovivo",
            expTitle: "Frontend Developer",
            desc: "I helped  them develop Quality User Interfaces"
        },
        {
            company: "Afrovivo",
            expTitle: "Frontend Developer",
            desc: "I helped  them develop Quality User Interfaces"
        },
        {
            company: "Afrovivo",
            expTitle: "Frontend Developer",
            desc: "I helped  them develop Quality User Interfaces"
        },
        {
            company: "Afrovivo",
            expTitle: "Frontend Developer",
            desc: "I helped  them develop Quality User Interfaces"
        },
    ]

    const [openDesc, setOpenDesc] = useState<boolean>(false);
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
      setVisibleIndex(visibleIndex === index ? null : index);
    }
    return(
        <section>
      <div className="flex justify-center py-5">
        <div className="my_fixed_width">
          <h2 className="text-2xl font-bold font-clash">
            Experience
            <span className="inline-block animate-bounce">👨‍🍳</span>
          </h2>
          <p className="text-sm text-[#808e91] font-rubik my-3">
            Here are some companies i have worked with
          </p>

          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 gap-2">
            {expData.map((data, index) => (
                <div key={data.company} className="bg-[#0a1c20] w-full rounded-md md:p-[20px] flex flex-col p-[10px]">
                  <div className="flex justify-between">
                    <h1>{data.expTitle} at <span>{data.company}</span></h1>
                    {visibleIndex === index ? (
                    <Minus onClick={() => toggleDropdown(index)} className="cursor-pointer"/>
                    ) : (
                      <ArrowDown onClick={() => toggleDropdown(index)} className="cursor-pointer"/>
                    )}
                    
                  </div>
                  {visibleIndex === index && (
                    <div className="flex flex-col mt-[20px]">
                      <div className="flex gap-2 items-center">
                        <Check className="w-[15px]" />
                        <p className="text-[0.7rem]">{data.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
            ))}
          </div>
          </div>
          </div>
          </section>
    )
}

export default WorkExp;