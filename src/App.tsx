import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyLista = lazy(() => import("./pages/Lista/Lista"));
const LazyProfile = lazy(() => import("./pages/Profile/Profile"));

function App() {
    return(
        <>
        <BrowserRouter>
            <Suspense fallback={<>Carrgeando</>}>
                <Routes>
                    <Route path="/" element={<LazyHome />} />
                    <Route path="/lista" element={<LazyLista />} />
                    <Route path="/perfil" element={<LazyProfile />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
        </>
    );
}

export default App;
