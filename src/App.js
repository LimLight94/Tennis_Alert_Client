import './App.css';
import React from "react";
import Home from "./pages/Home"
import TennisAppBar from "./components/AppBar";

function App() {
    return (
        <div className="App">
            <TennisAppBar/>
            <Home/>
        </div>
    );
}

export default App;
