import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {

  useEffect(() => {
    // initialize JS Materialize (for instances ie: event listeners)
    M.AutoInit();
  });
  
  return (
    <div className="App">
      <h4>logger</h4>
    </div>
  );
}

export default App;
