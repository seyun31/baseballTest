import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/home"
import GlobalStyle from "./style/GlobalStyle";

createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    </>
);
