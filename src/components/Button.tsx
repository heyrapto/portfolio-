import { ButtonProps } from "../types/types.ts"

export const Button = ({ buttonText, onClick }: ButtonProps) => {
    return(
    <div onClick={onClick} className="transition-all duration-300 active:scale-[0.96] max-w-[200px] mx-auto md:mx-0 flex justify-center lg:flex lg:justify-start">
      <span
        className="cursor-pointer bg-gradient-to-r max-w-[197px] lg:max-w-[252px] to-[#D9D9D9] from-[#D9D9D900] py-0.5 pr-0.5"
      >
        <p className="bg-yellow-400 px-[17px] py-[18px] font-medium text-[18px] font-clash text-black">
          {buttonText}
        </p>
      </span>
    </div>
    )
}