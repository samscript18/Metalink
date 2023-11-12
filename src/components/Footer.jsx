import { logo, appstore, playstore } from "../assets/export";
import { footerLinks } from "../utils/data";
import { FaHeartbeat, FaMailBulk, FaPhone } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="relative w-full md:pt-[8rem] xs:pt-[14rem] pb-6 md:px-12 sm:px-8 xs:px-5 bg-oxfordBlue z-8">
      <div className="flex flex-col">
        <div className="flex sm:flex-row xs:flex-col justify-start items-start mb-4">
          <div className="basis-1/4 lg:mr-[9rem] xs:mr-6">
            <img src={logo} className="max-w-full" alt="logo" />
            <p className="font-normal md:text-lg xs:text-base text-white my-10">
              Buy, sell and discover exclusive digital assets by the top artists
              of NFTs world.
            </p>
          </div>
          {footerLinks.map(({ title, links }, index) => {
            return (
              <div className="basis-1/4" key={index}>
                <h3 className="text-white sm:text-base xs:text-base font-bold mb-2 sm:mt-0 xs:mt-7">
                  {title}
                </h3>
                {links.map(({ name }, index) => {
                  return (
                    <div
                      className="flex justify-start items-center"
                      key={index}
                    >
                      <span className="text-violetBlue">
                        <BiChevronRight size={20} />
                      </span>
                      <p
                        key={index}
                        className="text-cadetGray text-base font-normal py-2 hover:text-violetBlue duration-300 cursor-pointer"
                      >
                        {name}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="basis-1/4 my-6">
            <h1 className="text-white text-2xl font-medium">
              Download the Metalink app
            </h1>
            <div className="flex lg:flex-row sm:flex-col xs:flex-row justify-start item-start mt-4">
              <img
                src={appstore}
                className="max-w-full mr-2 mb-2"
                alt="appstore"
              />
              <img
                src={playstore}
                className="max-w-full mb-2"
                alt="playstore"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-white text-2xl font-medium mb-2">
                Contact Details
              </h1>
              <div className="flex mt-4 mb-4">
                <span className="text-violetBlue mr-2">
                  <FaMailBulk size={18} />
                </span>
                <p className="text-cadetGray text-base font-normal">
                  metalink@nft.com
                </p>
              </div>
              <div className="flex">
                <span className="text-violetBlue mr-2">
                  <FaPhone size={18} />
                </span>
                <p className="text-cadetGray text-base font-normal">
                  +11 234-567-891
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-lightGray pt-6 text-center">
          <div className=" text-cadetGray text-base font-medium">
            <p>
              Made with{" "}
              <span>
                <FaHeartbeat size={20} className="inline text-violetBlue" />
              </span>{" "}
              by Samscript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
