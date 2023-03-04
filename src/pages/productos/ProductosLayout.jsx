import './_productos.scss';
import Background from '../../assets/backgrounds/pexels-polina-tankilevitch-4109751.jpg';
import { frutosSecos, mixFrutosSecos, otrosProductos, semillas } from "./data/data.js";
import { Cards } from './components/Cards.jsx';
import { Titles } from "./components/Titles";

export const ProductosLayout = () => {
    return (
        <section style={ { backgroundImage: `url(${ Background })` } } className="mt-4" id="productos-container">
            <Titles description={'FRUTOS SECOS'}/>
            <div className="p-4 container-cards">
                { frutosSecos.map( (el, i) => {
                    return (
                        <Cards key={i} img={ el.img } description={ el.description } title={ el.name }/>
                    )

                } ) }
            </div>
            <Titles description={'MIX FRUTOS SECOS'}/>
            <div className="p-4 container-cards">
                { mixFrutosSecos.map( (el, i) => {
                    return (
                        <Cards key={i} img={ el.img } description={ el.description } title={ el.name }/>
                    )

                } ) }
            </div>
            <Titles description={'SEMILLAS'}/>
            <div className="p-4 container-cards">
                { semillas.map( (el, i) => {
                    return (
                        <Cards key={i} img={ el.img } description={ el.description } title={ el.name }/>
                    )

                } ) }
            </div>
            <Titles description={'OTROS PRODUCTOS'}/>
            <div className="p-4 container-cards">
                { otrosProductos.map( (el, i) => {
                    return (
                        <Cards key={i} img={ el.img } description={ el.description } title={ el.name }/>
                    )

                } ) }
            </div>

        </section>
    );
};
