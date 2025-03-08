import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/components/home";
import FirstStage from "../src/components/firstStage";
import SecondStage from "../src/components/secondStage";
import ThirdStage from "../src/components/thirdStage";
import FourthStage from "../src/components/fourthStage";
import FifthStage from "../src/components/fifthStage";
import SixthStage from "../src/components/sixthStage";
import SeventhStage from "../src/components/seventhStage";
import Loading from "../src/components/loading";
import NotFound from "../src/components/notFound";
import GlobalStyle from "./style/GlobalStyle";

createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/1' element={<FirstStage />} />
                <Route path='/2' element={<SecondStage />} />
                <Route path='/3' element={<ThirdStage />} />
                <Route path='/4' element={<FourthStage />} />
                <Route path='/5' element={<FifthStage />} />
                <Route path='/6' element={<SixthStage />} />
                <Route path='/7' element={<SeventhStage />} />
                <Route path='/loading' element={<Loading />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </>
);
