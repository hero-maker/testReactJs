import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from './App.js';
import {About} from './App.js';

function BasicRoute(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default BasicRoute;