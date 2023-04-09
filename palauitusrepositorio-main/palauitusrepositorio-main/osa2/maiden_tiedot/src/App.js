import React, { useState } from "react";
import Countries from "./components/Countries";
import CountrySearch from "./components/CountrySearch";
/*
JM fullstackopen 2023 
maat
*/
const App = () => {
  const [searchFilter, setSearchFilter] = useState([]);
  return (
    <div>
      <CountrySearch
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <Countries searchFilter={searchFilter} />
    </div>
  );
};

export default App;
