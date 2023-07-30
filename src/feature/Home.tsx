import Searchbar from "./SearchBar";

const Home = () => {
  return (
    <div className="w-full">
      <div>
        <h2 className="mb-5 text-black font-semibold text-center text-xl">Make your trips come true</h2>
      </div>
      <div className="ml-10">
        <Searchbar />
      </div>
    </div>
  );
};
export default Home;
