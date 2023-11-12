import { BsPersonAdd } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Client = ({ name, author, avatar }) => {
  return (
    <div className="relative md:w-[350px] xs:w-full h-auto bg-oxfordBlue2 flex justify-between items-center p-3 rounded-xl cursor-pointer z-10 slide">
      <div className="flex">
        <div className="mr-5">
          <img src={avatar} className="w-14 h-14 rounded-xl" alt="name" />
          <span className="absolute text-green-500 sm:left-[19%] xs:left-[16%] top-[15%] z-10">
            <RiVerifiedBadgeFill size={15} />
          </span>
        </div>
        <div className="text-start">
          <h2 className="text-white text-lg font-medium hover:text-violetBlue duration-300">
            {name}
          </h2>
          <p className="text-cadetGray text-base font-normal">@{author}</p>
        </div>
      </div>
      <div className="w-10 h-10 flex justify-center items-center p-2 bg-oxfordBlue2 border border-oxfordBlue text-violetBlue hover:bg-violetBlue hover:text-white rounded-full duration-300">
        <BsPersonAdd size={20} />
      </div>
    </div>
  );
};
export default Client;
