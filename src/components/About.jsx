import { coin, programmer, instagram, x, linkedin, github } from "../assets";

const About = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto my-20 sm:my-10" id="about">
        <div className="flex items-center">
          <h1 className="text-[white] font-fredoka text-[30px]">About Me</h1>
          <img src={coin} alt="coin" className="w-8 h-8 -mt-2" />
        </div>
        <div className="pt-6 flex flex-col sm:flex-row max-sm:flex-col">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-6 sm:mb-0">
            <p className="text-[white] font-nunito text-[20px] md:pr-10">
              With over 2 years of experience in application development and
              software solutions creation, I thrive in team environments,
              tackling challenging projects that demand innovative and efficient
              solutions. I'm an avid learner, constantly honing my programming
              skills to deliver excellence.
            </p>
            <div className="md:w-5/6 lg:w-1/2 h-[80px] bg-bmarin-transparent rounded-r-full mt-8 flex space-x-8 justify-center items-center lg:px-6 lg:py-5">
              <a
                href="#"
                className="social-icon transform transition-transform hover:scale-125"
              >
                <img src={linkedin} alt="linkedin" className="w-12" />
              </a>
              <a
                href="#"
                className="social-icon transform transition-transform hover:scale-125"
              >
                <img src={github} alt="github" className="w-12" />
              </a>
              <a
                href="#"
                className="social-icon transform transition-transform hover:scale-125"
              >
                <img src={instagram} alt="instagram" className="w-12" />
              </a>
              <a
                href="#"
                className="social-icon transform transition-transform hover:scale-125"
              >
                <img src={x} alt="x" className="w-12" />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex justify-center md:lg:justify-end">
            <img
              src={programmer}
              alt="programmer"
              className="w-full max-w-[450px] lg:-mt-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
