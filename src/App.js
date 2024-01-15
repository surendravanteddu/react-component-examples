import React, {useEffect, useState} from "react";
import {MyTable} from "./MyTable/MyTable";
import './App.css';
import {InputWithToast} from "./InputWithToast/InputWithToast";
import {GridContainer} from "./Roomba/GridContainer";
import {ContactsTable} from "./MyTable/ContactsTable";

function App() {
    return (
     <>
         <MyTable />
         <GridContainer/>
         <ContactsTable />
         <InputWithToast></InputWithToast>
     </>
 )
}

export default App;
