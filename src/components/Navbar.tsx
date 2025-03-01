import { GhIcon } from "../pages/svgs.tsx";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
            <div className="flex justify-center w-full">
                <div className="flex justify-between my_fixed_width items-center">
                    <span className="text-base font-bold text-[18px] md:text-[25px]">
                        Raptomi ⚡
                    </span>
                    <div className="text-[#FFFFFF99] group group-hover:text-white transition-all duration-300">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.github.com/ikwerre-dev"
                            className="group-hover:text-white transition-colors duration-300"
                        >
                            <span className="flex items-center gap-[8px] md:gap-[10px]">
                                <GhIcon className="opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px] transition-opacity duration-300 group-hover:opacity-100" />
                                <p className="font-clash text-[15px] md:text-[18px] font-medium transition-colors duration-300">
                                    github
                                </p>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};