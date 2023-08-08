import ResponseGPT from "./ResponseGPT";
import SaveTrips from "./SaveTrips";
import SearchSection from "./SearchSection";

const Home = () => {
  return (
    <div className="w-full">
      <div>
        <h2 className="my-5 text-black font-semibold text-center text-xl">
          Make your trips come true
        </h2>
      </div>
        <div className="flex" style={{ height: "84vh"}}>
          <SaveTrips />
          <SearchSection />
          <ResponseGPT />
        </div>
    </div>
  );
};
export default Home;
