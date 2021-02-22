import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./layout/SearchBar.jsx";
import Logs from "./logs/Logs";
import AddButton from './layout/AddButton';
import AddLogModal from '../components/logs/AddLogModal';
import EditLogModal from '../components/logs/EdditLogModal';
import AddTechModal from '../components/techs/AddTechModal';
import TechListModal from '../components/techs/TechListModal'

function App() {
  useEffect(() => {
    // initialize JS Materialize (for instances ie: event listeners)
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
