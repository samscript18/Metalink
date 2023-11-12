import { exploreData } from "../utils/data";
import { Card } from "../components";
import { BsArrowRight } from "react-icons/bs";

const Explore = () => {
  return (
    <section id="wallet">
      <div className="relative w-full flex flex-col md:px-12 sm:px-8 xs:px-5 py-20 z-10">
        <div className="flex sm:flex-row xs:flex-col justify-between items-center">
          <h1 className="text-white text-3xl font-bold text-center my-10">
            Discover Items
          </h1>
          <div className="absolute sm:right-[3%] lg:top-[10%] md:top-[7%] sm:top-[5.3%] xs:bottom-[-0.5%] xs:right-[30%] flex text-white duration-300 cursor-pointer hover:text-violetBlue">
            <p className="text-lg font-medium mr-4">Explore more </p>
            <span>
              <BsArrowRight size={27} />
            </span>
          </div>
        </div>
        <div className="w-full grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {exploreData.map((explore) => {
            return <Card key={explore.id} {...explore} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Explore;
