import ResponseGPT from "./ResponseGPT";
import SaveTrips from "./SaveTrips";
import Searchbar from "./SearchBar";

const Home = () => {
  return (
    <div className="w-full">
      <div>
        <h2 className="mb-5 text-black font-semibold text-center text-xl">
          Make your trips come true
        </h2>
      </div>
        <div className="flex h-screen">
          <SaveTrips />
          <Searchbar />
          <ResponseGPT />
        </div>
    </div>
  );
};
export default Home;
