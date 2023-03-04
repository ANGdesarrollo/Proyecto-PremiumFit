import Navbar from "./ui/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inicio } from "./pages/inicio/Inicio";
import { ProductosContainer } from "./pages/productos/ProductosContainer";

export const App = () => {
    return (
        <>
            <Navbar/>
            <main className="container-fluid general-container">
                <Inicio/>
                <ProductosContainer/>
            </main>
        </>

    )
}

