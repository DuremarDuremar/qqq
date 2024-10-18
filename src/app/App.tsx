import React from "react";
import { Routes, Route } from "react-router-dom";
import { Content, Global } from "./style";
import {Header, SideBar, Footer} from "../components";


function App() {
    return (
        <>
        <Global/>
        <Content><Header/><SideBar/><Footer/></Content>
        </>
        
    )
}

export default App;