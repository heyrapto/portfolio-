import { ArrowDown, Minus, Check } from "lucide-react";
import { useState } from "react";
const WorkExp = () => {
    const expData = [
        {
            company: "Qruzpay",
            expTitle: "Frontend Developer",
            desc1: "Redesigned user interfaces to enhance payment experiences.",
            desc2: "Collaborated on front-end solutions for seamless transactions",
            desc3: "Streamlined UI for secure and efficient payment platforms.",
        },
        {
            company: "TCU",
            expTitle: "Frontend Developer",
            desc1: "Crafted modern designs to improve platform usability.",
            desc2: "Developed front-end features to enhance customer satisfaction",
            desc3: "optimized responsive layout for better accessibility.",
        },
        {
            company: "Afrovivo",
            expTitle: "Frontend Developer",
            desc1: "Built engaging interfaces",
            desc2: "Developed a demo waitlist and got to network with others on the team",
            desc3: "",
        },
        {
            company: "Educhain",
            expTitle: "Blockchain and Frontend Developer",
            desc1: "Developed interfaces for secure blockchain applications.",
            desc2: "Simplified complex blockchain processes through intuitive design.",
            desc3: "Enhanced accesibility of decentralized platforms with modern UIs.",
        },
    ]
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

          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 gap-4">
            {expData.map((data, index) => (
                <div key={data.company} className="bg-[#0a1c20] w-full rounded-md md:p-[20px] flex flex-col p-[20px]">
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
                      <div className="flex flex-col gap-6">
                        <div className="flex gap-2 items-center">
                        <Check className="w-[20px]" />
                        <p className="text-[0.8rem]">{data.desc1}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                        <Check className="w-[20px]" />
                        <p className="text-[0.8rem]">{data.desc2}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                        <Check className="w-[20px]" />
                        <p className="text-[0.8rem]">{data.desc3}</p>
                        </div>
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
