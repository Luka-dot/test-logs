import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./layout/SearchBar.jsx";

function App() {
  useEffect(() => {
    // initialize JS Materialize (for instances ie: event listeners)
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <h4>logger</h4>
    </Fragment>
  );
}

export default App;
