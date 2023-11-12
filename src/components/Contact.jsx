import { Button } from "../components";

const Contact = () => {
  return (
    <section id="contact" className="mb-6">
      <div className="w-full flex flex-col justify-center items-center md:px-12 sm:px-8 xs:px-4 sm:pt-10 sm:pb-16 xs:pt-8 xs:pb-20 text-center">
        <h1 className="text-white text-4xl font-bold">
          Have Question? Get in touch.
        </h1>
        <p className="text-cadetGray text-lg font-normal my-4">
          We are a huge marketplace dedicated to connecting great artists of all{" "}
          <br />
          Metalink with their fans and unique token collectors!
        </p>
        <Button text={"Contact Us"} />
      </div>
    </section>
  );
};
export default Contact;
