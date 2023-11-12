import { accordionData } from "../utils/data";
import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const QA = () => {
  const [activeIndex, SetActiveIndex] = useState(null);

  const handleChange = (index) => {
    SetActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section id="about-us">
      <div className="relative w-full flex md:flex-row xs:flex-col justify-center items-center md:px-12 sm:px-8 xs:px-5 py-16 z-10">
        <div className="md:max-w-[500px] xs:max-w-full md:mr-12">
          <h1 className="text-white text-5xl font-bold text-gradient sm:text-start xs:text-center">
            Q&A
          </h1>
          <p className="text-cadetGray md:text-lg xs:text-base xs:text-center font-normal my-4">
            We are a huge marketplace dedicated to connecting great artists of
            all Metalink with their fans and unique token collectors!
          </p>
        </div>
        <div className="md:flex-1 xs:w-full">
          {accordionData.map(({ id, heading, detail }, index) => {
            return (
              <div
                className="w-full bg-oxfordBlue2 p-5 mb-6 rounded-xl xs:mt-6 md:mt-0 accordion"
                key={id}
                onClick={() => handleChange(index)}
              >
                <div className="flex justify-between items-center">
                  <h6 className="text-violetBlue text-lg font-medium">
                    {heading}
                  </h6>
                  <button type="button" onClick={() => handleChange(index)}>
                    {activeIndex === index ? (
                      <BiChevronUp className="text-violetBlue" size={22} />
                    ) : (
                      <BiChevronDown className="text-violetBlue" size={22} />
                    )}
                  </button>
                </div>
                {activeIndex === index && (
                  <div>
                    <p className="text-cadetGray text-base font-normal pt-6">
                      {detail}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default QA;
