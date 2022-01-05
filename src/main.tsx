import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Posts } from "./pages/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { PostDetail } from "./pages/PostDetail";

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
