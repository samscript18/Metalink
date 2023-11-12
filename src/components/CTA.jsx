import { Button } from "../components";

const CTA = () => {
  return (
    <section className="relative flex justify-center items-center mt-[8rem]">
      <div className="absolute w-[85vw] flex md:flex-row xs:flex-col justify-center items-center bg-oxfordBlue2 sm:px-8 sm:py-10 xs:px-4 xs:py-5 rounded-xl z-10 cta">
        <div className="max-w-[500px] md:mr-16">
          <h1 className="text-white text-3xl font-medium sm;text-start xs:text-center">
            Subscribe to Newsletter!
          </h1>
          <p className="text-cadetGray text-lg font-normal mt-3">
            Subscribe to get latest updates and information
          </p>
        </div>
        <div className="flex-1 w-full xs:mt-6 md:mt-0">
          <div className="relative flex sm:flex-row xs:flex-col xs:justify-center xs:items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address : "
              className="w-full bg-oxfordBlue2 text-cadetGray border border-oxfordBlue rounded-3xl p-[14px] outline-none"
            />
            <span className="sm:absolute top-[8%] right-[0.8%] xs:w-[40%] xs:mt-4 sm:max-w-[18%] sm:mt-0 text-center">
              <Button text={"Subscribe"} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
