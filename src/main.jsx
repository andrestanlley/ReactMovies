import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Details from './pages/Details/Details';
import Home from "./pages/Home/Home";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:page" element={<Home />} />
                <Route path="/movie/:id" element={<Details />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)