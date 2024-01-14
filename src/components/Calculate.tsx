import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center">
          <h2          
            data-aos="fade-up"
            className="section-title"
          >
            Check how much you can earn
          </h2>
          <p
            
            data-aos="fade-up"
            className="max-w-[600px] mx-auto section-subtitle text-lg mb-16"
          >
            Let's check your hash rate to see how much you will earn today.
          </p>
        </div>
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
