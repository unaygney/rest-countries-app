import React, {useState} from "react";
import "./main.css";

//Layout
import Navbar from "./components/layout/Navbar";
//Components
import SearchBar from "./components/SearchBar";
import RegionList from "./components/RegionList";
function App() {
  const [region, setFilterRegion] = useState('');
  const [search, setSearch] = useState('')
  return (
    <>
      <Navbar />
      <SearchBar region={region} setFilterRegion={setFilterRegion} search={search} setSearch={setSearch}  />
      <RegionList region={region} search={search} />
    </>
  );
}

export default App;
