import FeaturesSection1 from "./FeaturesSection1";
import FeaturesSection2 from "./FeaturesSection2";
import FeaturesSection3 from "./FeaturesSection3";

const Features = () => {
  return (
    <section className="pt-12 lg:pt-24 bg-violet">
      <div className="container mx-auto">
        <div className="text-center max-w-[758px] mx-auto mb-24" >
          <h2 data-aos-offset='200' data-aos="fade-up" className="section-title">Market sentiments, portfolio, and run the infrastructure of your choice</h2>
        </div>
        <FeaturesSection1/>
        <FeaturesSection2/>
        <FeaturesSection3/>
      </div>
    </section>
  );
};

export default Features;
