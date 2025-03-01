export const Footer = () => {
    const iconStyle = "rounded-full border border-1 border-[#FFCC00] px-4 p-3 text-sm bg-transparent text-[#FFCC00] hover:border-[#34afcb] hover:bg-[#34afcb] hover:text-[#0a1c20]";
    return (
      <footer>
        <div className="flex justify-center py-3 font-rubik">
          <div className="my_fixed_width text-center py-5">
            <h2 className="font-bold text-2xl font-clash">
              <span>Start a project</span>
              <span className="animate-bounce inline-block">🚀</span>
            </h2>
            <p className="text-[#808e91] font-rubik text-sm my-2">
              Interested in making waves together? Hit Me Up, I don't bite.
            </p>
            <hr className="my-[2.7rem] border-[#4c5a5d] inline-block w-[65%] md:w-[45%]" />
            <div className=" flex justify-center items-center flex-col md:space-x-4 md:flex-row md:flex-wrap">
              <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
                <a
                  href="https://www.facebook.com/raptomiofw"
                  className={iconStyle}
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/heyrapto"
                  className={iconStyle}
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/caleb.kale"
                  className={iconStyle}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <a
                  href="https://www.github.com/heycalebszn"
                  className={iconStyle}
                >
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://wa.me/+2347064019926" className={iconStyle}>
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="mailto: raptomiofw@gmail.com"
                  className={iconStyle}
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="text-white font-bold text-sm mt-[5rem] my-[2rem] flex flex-col items-center text-center justify-center">
              <p>&copy; 2025</p>
              <p className="ml-1">Inspired by Treasure</p>
            </div>
              
          </div>
        </div>
      </footer>
    );
};
