import React from "react";
import {Card,CardContent} from "@mui/material";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { Earnings } from "./Earnings";
import { Expenses } from "./Expenses";
import { Nav } from "./Nav";
export const Landing=()=>{
    return(
        <React.Fragment>
            
         <Card>
            <CardContent>
                <BrowserRouter>
            <Nav/>
                <Routes>
                    <Route path="/home"      element={<Home/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/earnings"   element={<Earnings/>} />
                    <Route path="/expenses"  element={<Expenses/>} />
                    <Route path="/"          element={<Home/>} />
                </Routes>
                </BrowserRouter>
            </CardContent>
         </Card>
        </React.Fragment>
    )
}