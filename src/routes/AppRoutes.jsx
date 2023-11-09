import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import About from "../pages/About";

export default function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}