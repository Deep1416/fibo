import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// const api = https://run.mocky.io/v3/90fc9e7a-53eb-4c28-9d9b-4f5aa6a441d2;
function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("Won't haves");
  const [have, setHave] = useState([]);
  const [must, setMust] = useState([]);
  const [disc, setDisc] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      " https://run.mocky.io/v3/90fc9e7a-53eb-4c28-9d9b-4f5aa6a441d2"
    );
    const response = await res.json();
    // console.log(response);

    setData(response[0].tasks);
    setHave(response[1].tasks);
    setMust(response[2].tasks);
    // setAll((prev)=> [...prev , data , have , must])
    // console.log(response[0].tasks);
    // console.log(all);
  };

  const addHandler = (item) => {
    if ("Won't haves" === item) {
      setData((prev) => [
        ...prev,
        { title: name, description: disc, id: Date.now() },
      ]);
      setName("");
    }

    if ("Could haves" === item) {
      setHave((prev) => [
        ...prev,
        { title: name, description: disc, id: Date.now() },
      ]);
      setName("");
    }
    if ("Must haves" === item) {
      setMust((prev) => [
        ...prev,
        { title: name, description: disc, id: Date.now() },
      ]);
      setName("");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {/* <select
          name=""
          id=""
          onChange={(e) => setName(e.target.value)}
          className="border border-black"
        >
          <option value="Won't haves">Won't haves</option>
          <option value="Could haves">Could haves</option>
          <option value="Must haves">Must haves</option>
        </select> */}
        <h1 className="bg-green-500 text-white p-4 text-center">Won't haves</h1>
        <div className="flex items-center mt-5">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-600 py-1"
          />
          <input
            type="text"
            onChange={(e) => setDisc(e.target.value)}
            className="w-full border border-gray-600 py-1"
          />
          <button
            className="px-4 py-1 bg-blue-500 mb-2"
            onClick={() => addHandler("Won't haves")}
          >
            Add
          </button>
        </div>
        <div>
          {data.map((item) => {
            return (
              <>
                <div className="flex items-center justify-between mb-5 text-white bg-black">
                  <div className="bg-gray-500">{item?.title}</div>
                  <div>{item?.description}</div>
                </div>
              </>
            );
          })}
          <h1 className="bg-green-500 text-white p-4 text-center mb-5">
            Could haves
          </h1>
          <div className="flex items-center justify-between">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-600 py-1"
            />
            <input
              type="text"
              onChange={(e) => setDisc(e.target.value)}
              className="w-full border border-gray-600 py-1"
            />
            <button
              className="px-4 py-1 bg-blue-500 mb-2"
              onClick={() => addHandler("Could haves")}
            >
              Add
            </button>
          </div>
          {have.map((item) => {
            return (
              <>
                <div className="flex items-center justify-between mb-5 text-white bg-black">
                  <div className="bg-gray-500">{item?.title}</div>
                  <div>{item?.description}</div>
                </div>
              </>
            );
          })}
          <h1 className="bg-green-500 text-white p-4 text-center mb-5">
            Must haves
          </h1>
          <div className="flex items-center justify-between">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-600 py-1"
            />
            <input
              type="text"
              onChange={(e) => setDisc(e.target.value)}
              className="w-full border border-gray-600 py-1"
            />
            <button
              className="px-4 py-1 bg-blue-500 mb-2"
              onClick={() => addHandler("Must haves")}
            >
              Add
            </button>
          </div>
          {must.map((item) => {
            return (
              <>
                <div className="flex items-center justify-between mb-5 text-white bg-black">
                  <div className="bg-gray-500">{item?.title}</div>
                  <div>{item?.description}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
