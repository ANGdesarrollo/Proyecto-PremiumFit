import Navbar from "./ui/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { Nosotros } from "./pages/nosotros/Nosotros.jsx";
import { InicioContainer } from "./pages/InicioContainer";
import { ContactoPageContainer } from "./pages/contacto/ContactoPageContainer";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/inicio" element={<InicioContainer/>}></Route>
                <Route path="/nosotros" element={<Nosotros/>}></Route>
                <Route path="/contacto" element={<ContactoPageContainer/>}></Route>
                <Route path="*" element={<Navigate to="/inicio"/>}></Route>
            </Routes>
        </>

    )
}

