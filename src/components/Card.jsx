import { FaEthereum } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";

const Card = ({ author, collection, price, bid, avatar, showcase }) => {
  return (
    <div className="relative flex flex-col sm:mr-[20px] md:w-[275px] xs:w-full  h-auto bg-oxfordBlue2 rounded-lg p-3 cursor-pointer  duration-500 hover:scale-[1.02] card">
      <div className="w-full flex flex-col justify-center items-center">
        <img src={showcase} className="max-w-full" alt={collection} />
        <div className="absolute flex justify-center items-center bg-violetBlue p-1 rounded-xl w-[100px] text-center place-bid">
          <span className="text-white mr-1">
            <RiFlashlightFill size={20} />
          </span>
          <p className="text-white text-base font-medium">Place Bid</p>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-start items-center my-4">
          <img
            src={avatar}
            className="max-w-full w-10 h-10 rounded-full"
            alt={author}
          />
          <span className="text-cadetGray text-lg font-normal ml-8 hover:text-violetBlue duration-300">
            @{author}
          </span>
        </div>
        <h2 className="text-xl text-white font-medium  hover:text-violetBlue duration-300">
          {collection}
        </h2>
        <div className="flex flex-row justify-between items-center bg-oxfordBlue p-3 mt-3 rounded-xl cursor-pointer">
          <p className="text-cadetGray text-base font-normal">
            Price <br />{" "}
            <span className="flex justify-start text-white">
              <FaEthereum size={25} className="mr-1" />
              {price}
            </span>
          </p>
          <p className="text-cadetGray text-base font-normal">
            Highest Bid <br />{" "}
            <span className="flex justify-start items-center text-white">
              <FaEthereum size={25} className="mr-1" />
              {bid}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
