import React from "react";
import {Routes , Route} from 'react-router-dom';
import Nav from "./Nav";
import Store from "./Store";
import Hw from "./Hw";
import Classcom from "./Classcom";
import { Course } from "./Course";

function Rou() {
    
return(
    <div>
        <Nav></Nav>
        <Routes>
            <Route exact path='/' element={<Hw></Hw>}></Route>
            <Route path='Course' element={<Course />}></Route>
        </Routes>
    </div>
)
  
}
  // <><Routes>
    //     <Route path='clickme' element={<Classcom />}></Route>

    // </Routes>
    // <Hw></Hw></>
export default Rou 