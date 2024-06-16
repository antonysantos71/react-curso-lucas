import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Routers() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element/>
            </Routes>
        </BrowserRouter>
    )
}