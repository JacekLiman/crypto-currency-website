import Image from "../assets/img/why-img.png";

const Why = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div
            data-aos-offset="400"
            data-aos="fade-left"
            className="lg:order-2"
          >
            <img src={Image} alt="" />
          </div>
          <div
            
            data-aos="fade-right"
            className="max-w-[480px]"
          >
            <h2 className="section-title">Why you should choose CRAPPO</h2>
            <p className="section-subtitle">
              Experience the next generation cryptocurrency platform. No
              financial borders,extra fees, and fake reviewes.{" "}
            </p>
            <button className="btn px-6">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
