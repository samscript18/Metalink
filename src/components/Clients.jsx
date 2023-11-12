import { ClientsData } from "../utils/data";
import { Client } from "../components";

const Clients = () => {
  return (
    <section>
      <div className="relative w-full flex flex-col justify-center items-center md:px-12 sm:px-8 xs:px-4 py-8">
        <h1 className="text-white text-3xl font-bold text-center my-10">
          Best Creators & Sellers
        </h1>
        <div className="w-full grid gap-12 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          {ClientsData.map((client) => {
            return <Client key={client.id} {...client} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Clients;
