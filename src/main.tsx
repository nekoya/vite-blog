import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { NotFound } from "./pages/NotFound";
import { Posts } from "./pages/Posts";
import { PostDetail } from "./pages/PostDetail";
import { App } from "./App";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Posts />} />
                    <Route path="posts/:path" element={<PostDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
