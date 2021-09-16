import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import PrimeiraPagina from "../PageOne/PageFirst";
import SegundaPagina from "../PageTwo/PageSecond";
import TerceiraPagina from "../PageThree/PageThree";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component= { Home } path="/" exact />
            <Route component= { PrimeiraPagina } path="/primeirapagina" exact />
            <Route component= { SegundaPagina } path="/segundapagina" exact />
            <Route component= { TerceiraPagina } path="/terceirapagina" exact />
        </BrowserRouter>
    )
}
export default Routes;