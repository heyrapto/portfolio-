import SvgIcons from "../assets/icons/SvgIcons";

const Hero = () => {
    return (
      <header className="my-[5.4rem] flex items-center justify-center min-h-screen relative overflow-hidden w-full lg:min-h-[100vh] md:mt-0">
        <div className="my_fixed_width md:flex justify-center items-center sm:pr-2 md:px-3 text-center">
          <div className="md:w-[52%] lg:w-[60%]">
            <h1 className="gradient_text text-[2.2rem] font-clash leading-[2.5rem] md:leading-[3.6rem] md:text-[3.5rem]">
              Creative <br className="md:hidden" /> Software Developer.
            </h1>
            <div className="font-[400] mt-[2.5rem] font-rubik pr-5 text-sm text-center">
              <p className="gradient_text">
                You got here! I'm <span className="bg-transparent bg-clip-text bg-gradient from-violet-400 to-violet-700">Rapto</span>, a Fullstack Developer heavy on Frontend and passionate about Web3, Blockchain and writing smart contracts. 
              </p>
              <p className="gradient_text py-[1.8rem]">
                I develop industry standard products that solves everyday problems with an emphasis on user experience, accessibility and performance.
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
      </header>
    );
};
export default Hero;
