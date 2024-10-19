
export default function AboutUs() {
  return (
    <section id="about" className="pt-[100px]">
      <div className="px-6 lg:px-8">
        <div className="w-full">
          <h2 className="text-4xl md:text-5xl text-center text-primaryBlue font-semibold font-display">
            Why Choose Our HR Solutions
          </h2>
          <p className="text-primarySlate text-lg mt-4 md:mt-8 text-center w-full md:w-10/12 mx-auto">
            Choose our HR solutions for unparalleled support in developing a
            workforce that thrives on engagement, collaboration, and growth.
          </p>
        </div>
        <div className="mt-16 lg:px-40 text-center lg:text-left">
          {/* Container for Customized HR Strategies */}
          <div className="flex flex-col lg:flex-row items-center  gap-4 mb-8">
            {/* Text for Customized HR Strategies */}
            <div className="flex-1 flex items-start">
              <span className="bg-secondary px-3 py-1 rounded-xl font-display text-sm spacing">
                01
              </span>
              <div className="lg:w-[500px]">
                <h3 className="text-primaryBlue font-semibold text-lg">
                  Customized HR Strategies
                </h3>
                <p className="text-primarySlate mt-2">
                  We tailor our HR solutions to fit your unique organizational
                  needs, ensuring maximum impact and effectiveness.
                </p>
              </div>
            </div>
            {/* Image for Customized HR Strategies */}
            <div className="flex-shrink-0">
              <img
                src="https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?t=st=1729294927~exp=1729298527~hmac=5b6dbf90dcaac1f71e1449a5871d77d9c1d51881648836aec5a4640afc0dfad5&w=2000"
                className="h-auto w-[300px] md:w-[350px] rounded-lg"
                alt="Hiring Agency"
                width={350}
                height={250}
              />
            </div>
          </div>

          {/* Container for Empowering Workforce Development */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
            {/* Text for Empowering Workforce Development */}
            <div className="flex-1 flex items-start">
              <span className="bg-secondary px-3 py-1 rounded-xl font-display text-sm spacing">
                02
              </span>
              <div className="lg:w-[500px]">
                <h3 className="text-primaryBlue font-semibold text-lg">
                  Empowering Workforce Development
                </h3>
                <p className="text-primarySlate mt-2">
                  Our mission is to empower your employees through continuous
                  learning and development, helping them to reach their full
                  potential.
                </p>
              </div>
            </div>
            {/* Image for Empowering Workforce Development */}
            <div className="flex-shrink-0">
              <img
                src="https://img.freepik.com/free-vector/businessmen-businesswoman-talking-desktop_1262-21452.jpg?t=st=1729295101~exp=1729298701~hmac=19fc9355ed6809765cc1ae1304c3f98f951cee78d2e760e33bd4118d73719ec8&w=2000"
                className="h-auto w-[300px] md:w-[350px] rounded-lg"
                alt="Workforce Development"
                width={350}
                height={250}
              />
            </div>
          </div>

          {/* Container for Vision for a Collaborative Workplace */}
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
            {/* Text for Vision for a Collaborative Workplace */}
            <div className="flex-1 flex items-start">
              <span className="bg-secondary px-3 py-1 rounded-xl font-display text-sm spacing">
                03
              </span>
              <div className="lg:w-[500px]">
                <h3 className="text-primaryBlue font-semibold text-lg">
                  Vision for a Collaborative Workplace
                </h3>
                <p className="text-primarySlate mt-2">
                  Our vision is to create a workplace where collaboration and
                  open communication are at the forefront, fostering a strong
                  company culture.
                </p>
              </div>
            </div>
            {/* Image for Vision for a Collaborative Workplace */}
            <div className="flex-shrink-0">
              <img
                src="https://img.freepik.com/free-vector/vision-statement-concept-illustration_114360-7576.jpg?t=st=1729295999~exp=1729299599~hmac=a1d5102955c2622b7eeb7df331576ba9aa30b72fa1207c3eb5c3cbb8b99123a6&w=1800"
                className="h-auto w-[300px] md:w-[350px] rounded-lg"
                alt="Collaborative Workplace"
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

