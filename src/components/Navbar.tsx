import clsx from "clsx";
import { GhIcon } from "../pages/svgs";

export const Navbar = () => {
    return (
        <header
            className={clsx(
                "fixed z-40 top-0 md:relative bg-[#0b040c]/90 pb-3 w-full pt-[20px] px-[32px] md:py-[30px] lg:px-[80px]"
            )}
        >
            <nav className="flex items-center justify-between">
                <a href="/" className="relative">
                    <div className="before:content-[''] font-clashbold font-semibold text-[18px] md:text-[25px] lg:hover:before:bg-[#4C686F] active:scale-[0.86] transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 text-white hover:before:w-full">
                        Honour<span>!</span>
                        <span>⚡</span>
                    </div>
                </a>
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
            </nav>
        </header>
    );
};
