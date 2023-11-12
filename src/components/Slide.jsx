import { RiVerifiedBadgeFill } from "react-icons/ri";

const Slide = ({ author, collection, quantity, avatar, showcase }) => {
  return (
    <div className="flex flex-col xs:mr-[50px] xs:ml-3 md:w-[275px] sm:w-[290px] xs:w-[87vw] h-auto bg-oxfordBlue2 rounded-lg p-4 cursor-pointer slide">
      <div className="w-full">
        <img src={showcase} className="max-w-full" alt={collection} />
      </div>
      <div className="relative w-full flex flex-col">
        <img
          src={avatar}
          className="absolute top-[-35%] left-[2%] max-w-full w-16 h-16 rounded-xl"
          alt={author}
        />
        <span className="absolute text-green-500 md:left-[23%] xs:left-[20%] top-[10%] z-10">
          <RiVerifiedBadgeFill size={15} />
        </span>
        <h2 className="text-xl text-white font-medium mt-8">{collection}</h2>
        <p className="text-cadetGray text-lg font-normal">
          <i>
            by{" "}
            <span className="text-violetBlue text-lg font-normal">
              @{author}
            </span>
          </i>
        </p>
        <p className="text-cadetGray text-lg font-normal">{quantity}</p>
      </div>
    </div>
  );
};
export default Slide;
