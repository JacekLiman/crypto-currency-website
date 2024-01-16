
import Image1 from '../assets/img/feature-1-img.png'


const FeaturesSection1 = () => {
  return (
    <section className="pb-[30px] lg:pb-[120px] pt-0">
      <div className="flex flex-col lg:flex-row">
        <div data-aos="fade-right" className="max-w-[454px] mb-6 lg:mt-10">
          <h3 className="h3 mb-6 ">Invest Smart</h3>
          <p className="text-gray mb-8 ">
            Get full statistic information about the behaviour of buyers and
            selllers will help you to make the decision.{" "}
          </p>
          <button className="btn px-8">Learn more</button>
        </div>
        <div data-aos="fade-left" className="flex-1 flex justify-end">
          <img src={Image1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection1