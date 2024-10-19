export function OurHRServices() {
  return (
    <section
      id="services"
      className="max-w-[1500px] px-6 lg:px-64 pb-10 text-primarySlate"
    >
      <h2 className="text-5xl text-primaryBlue text-center font-semibold font-display py-8 leading-relaxed">
        Our HR Solutions
      </h2>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        {" "}
        {/* Centered content */}
        <div className="w-full mx-auto text-center lg:text-left mt-8 mb-6 lg:mb-0">
          <img
            src="https://img.freepik.com/free-vector/flat-business-people-set_23-2148985671.jpg?t=st=1729297211~exp=1729300811~hmac=2d6d61799444fc47bb28a412b7bc9a261752587b308645dfee48b539022ed459&w=2000"
            className="h-auto w-[300px] md:w-[350px] rounded-lg mx-auto lg:mx-0" // Center on mobile, align on larger screens
            alt="Hiring Agency"
            width={350}
            height={250}
          />
          <p className="w-full max-w-[400px] py-2 text-sm mx-auto lg:mx-0">
            Discover a range of comprehensive HR solutions tailored to meet your
            organizational needs. From recruitment to employee management, our
            services aim to streamline processes and enhance workplace
            productivity.
          </p>
        </div>
        <div className="w-full lg:w-[60%] mt-6 lg:mt-0">
          <ul className="list-disc list-inside space-y-2">
            <li>Recruitment and Talent Acquisition</li>
            <li>Employee Onboarding and Training</li>
            <li>Performance Management</li>
            <li>Payroll and Benefits Administration</li>
            <li>Employee Relations and Support</li>
            <li>HR Compliance and Risk Management</li>
            <li>Workplace Diversity and Inclusion Programs</li>
            <li>HR Analytics and Reporting</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
