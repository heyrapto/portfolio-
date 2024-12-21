import SvgIcons from "./icons/SvgIcons";
import HeroImage from "./mainComponents/HeroImage";

const Hero = () => {
    return (
      <header className="my-[5.4rem] flex items-center justify-center min-h-screen relative overflow-hidden w-full lg:min-h-[100vh] md:mt-0">
        <div className="my_fixed_width md:flex justify-between items-center sm:pr-2 md:px-3">
          <div className="md:w-[52%] lg:w-[60%]">
            <h1 className="gradient_text text-[2.1rem] font-clash leading-[2.5rem] md:leading-[3.6rem] md:text-[3.5rem]">
              Creative <br className="md:hidden" /> Frontend and Blockchain Developer.
            </h1>
            <div className="font-[400] mt-[2.5rem] font-rubik pr-5 text-sm">
              <p className="gradient_text">
                I specialize in building visually appealing and responsive web applications, ensuring seamless user experiences
              </p>
              <p className="gradient_text py-[1.8rem]">
                With 3+ years of experience with Frontend(React, Next, TailwindCss), I can also provide backend solutions with Node/Express. and i write Smart Contracts with Solidity. I have a strong passion for learning new technologies and bringing creative ideas to life in the digital space.
              </p>
            </div>
            <div className="mt-[1.7rem] flex space-x-5">
              <a
                href="https://www.facebook.com/raptomiofw"
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green"
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
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green"
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
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green"
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
                className="rounded-full border-2 border-[#34afcb] hover:border-green hover:bg-green"
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
          <HeroImage />
        </div>
      </header>
    );
};
export default Hero;
