import React from "react";
import {MyTable} from "./MyTable/MyTable";
import './App.css';
import {InputWithToast} from "./InputWithToast/InputWithToast";

import {GridContainer} from "./Roomba/GridContainer";

function App() {
 return (
     <>
     <MyTable />
      <GridContainer/>
     <InputWithToast></InputWithToast>
     </>
 )
}

export default App;
