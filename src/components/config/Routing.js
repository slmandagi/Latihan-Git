import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "../About";
import Dashboard from "../Dashboard";
import ListUsers from "../ListUsers";
import Products from "../Products";
export default function Routing() {
    return (
            <Router>
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                    <Route path="/ListUsers" element={<ListUsers/>}/>
                    <Route path="/Products" element={<Products/>}/>
                    <Route path="/About" element={<About />}/>
                </Routes>
            </Router>
    )
}
