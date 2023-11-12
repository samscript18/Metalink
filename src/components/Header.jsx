import { Button } from "../components";

const Header = () => {
  return (
    <section id="home">
      <div className="w-full h-[89vh] flex flex-col justify-center items-center md:px-12 sm:px-8 xs:px-4">
        <h1 className="text-white md:text-6xl sm:text-5xl xs:text-[3rem] leading-[1] font-bold text-center">
          Discover rate collection or{" "}
          <span className="text-gradient">Arts & NFTs</span>
        </h1>
        <h2 className="text-cadetGray text-xl font-normal my-10 text-center">
          We are a huge marketplace dedicated to connecting great artists of all
          Metalink <br /> with their fans and unique token collectors!
        </h2>
        <Button text={`Explore Now`} />
      </div>
    </section>
  );
};
export default Header;
