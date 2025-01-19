import SvgIcons from "../assets/icons/SvgIcons";
import { BackgroundLines } from "../components/ui/background-lines";

const Hero = () => {
    return (
      <header className="my-[5.4rem] flex items-center justify-center relative overflow-hidden w-full md:mt-0 md:h-screen h-[80vh]">
      <BackgroundLines>
        <div className="my_fixed_width md:flex justify-center items-center sm:pr-2 md:px-3 text-center">
          <div className="md:w-[52%] lg:w-[60%]">
            <h1 className="gradient_text text-[2.5rem] font-clash leading-[2.5rem] md:leading-[3.6rem] md:text-[3.5rem]">
              Creative <br className="md:hidden" /> Software Developer.
            </h1>
            <div className="font-[400] mt-[2.5rem] font-rubik pr-5 text-sm text-center">
              <p className="gradient_text">
                You got here! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-600">Caleb Kalejaiye</span>, a Fullstack Developer heavy on Frontend and passionate about Web3, Blockchain and writing smart contracts. 
              </p>
            </div>
            <div className="mt-[1.7rem] flex space-x-5 items-center justify-center">
              <a
                href="https://www.facebook.com/raptomiofw"
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green md:p-2 p-0"
                target="_blank"
              >
                <SvgIcons
                  type="facebook"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
              <a
                href="https://www.linkedin.com/in"
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green md:p-2 p-0"
                target="_blank"
              >
                <SvgIcons
                  type="linkedin"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
              <a
                href="https://www.x.com/heyrapto"
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green md:p-2 p-0"
                target="_blank"
              >
                <SvgIcons
                  type="twitter"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
              <a
                href="https://www.instagram.com/caleb.kale"
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green md:p-2 p-0"
                target="_blank"
              >
                <SvgIcons
                  type="instagram"
                  height="20"
                  width="20"
                  color="#34afcb"
                  className="m-1 hover:fill-[#061417]"
                />
              </a>
            </div>
          </div>
          {/*<HeroImage />*/}
          
        </div>
        </BackgroundLines>
      </header>
    );
};
export default Hero;
