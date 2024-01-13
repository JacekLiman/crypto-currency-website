const CalcForm = () => {
  return (
    <div data-aos-offset='200' data-aos='fade-up' className="w-full bg-white max-w-[940px] mx-auto rounded-2xl text-darkblue p-12 shadow-primary">
      <form className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0">
        <input
          className="placeholder:text-darkblue input"
          type="text"
          placeholder="Enter your hash rate"
        />
        <select className="select">
          <option value="">TH/s</option>
          <option value="">H/s</option>
          <option value="">KH/s</option>
          <option value="">MH/s</option>
          <option value="">GH/s</option>
        </select>
        <button className="btn text-white px-8 self-start">Calculate</button>
      </form>
      <div className="mt-24">
        <div className="text-blue font-medium mb-4">ESTIMATED 24 HOUR REVENUE:</div>
        <div className="text-[32px] font-bold mb-3">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </div>
        <div className="text-gray-500 tracking-[3px]">Revenue will change based on mining difficulty and Ethereum price.</div>
      </div>
    </div>
  );
};

export default CalcForm;
