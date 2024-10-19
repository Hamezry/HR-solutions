export default function HeroSection() {  
  return (
    <section id="home" className="w-full lg:flex lg:justify-between items-center gap-4  lg:px-14 pt-40 pb-5 text-primarySlate">
      <div className="lg:w-[700px] p-8">
        <h2 className="text-6xl font-semibold font-display leading-relaxed">
          The Platform for Creative
          <span className="text-primaryBlue"> Minds </span>
        </h2>

        <p className="leading-relaxed mt-1 px-5">
         
          Looking to find and manage the best talent? We help you manage your
          entire HR process, from sourcing candidates to employee onboarding and
          management. We provide innovative human resource solutions tailored to
          your business needs.
        </p>
      </div>

      <div className="col-span-12 lg:col-span-4 flex items-center justify-center mt-4 lg:mt-0">
       
        <img
          src="https://img.freepik.com/free-vector/business-leader-consulting-hr-expert_1262-21207.jpg?t=st=1729293670~exp=1729297270~hmac=e32f9e978a4b75e5bd47c25811a06b3c8ba73b4b50e165f48a00cd7ee153413c&w=1800"
          alt="Creative Minds Illustration"
          className="h-[400px] w-[700px] rounded-lg"
        />
      </div>
    </section>
  );  

}