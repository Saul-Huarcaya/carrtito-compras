import { useContext } from "react";
import { ContextEcommerce } from "../Context/ContextEcommerce";
import styled from "styled-components";
import types from "../actions/actionsEcommerce";
import { AiOutlineShoppingCart} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

const Item = styled.div`
    position: relative;
    background-color: white;
    border-radius: 8px;
    color: black;
    display: flex;
    padding: 1rem;
    gap: 0.5rem;
    max-width: 500px;
    @media screen and (max-width:400px) {
        flex-direction: column;
        padding: 1rem 0.5rem;
    }
`;
const ContainerImg = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* max-width: 200px; */
    img{
        max-width: 150px;
    }
    @media screen and (min-width:576px) {
        max-width: 150px;
        
    }
`;
const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    h2{
        font-weight:500;
        font-size: 1.3rem;
        text-align: justify;
    }

    div:nth-child(2){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width:375px)  {
        padding: 0.25rem;
    }
`;
const Price = styled.p`
    font-size: calc(1rem + 1vh);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 600;
    color: red;
`;
const Operation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    button{
        padding: 0.5rem 0.8rem;
        font-size: 1rem;
        background-color: #181717;
        color: white;
        outline: none;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        
    }
    button:hover{
        background-color: black;
    }
    p{
        width: 40px;
        text-align: center;
    }
`;
const ContainerDelete = styled.div`
    width:100%;
    display: flex;
    justify-content: end;

    button {
        outline: none;
        border: none;
        background-color: #0d61bb;
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 16px;
        font-size: 1rem;
        cursor: pointer;
    }
    button:hover{
        background-color: #007bff;
    }
    @media screen and (min-width:376px)  {
        button {
            padding: 0.5rem 2rem;
        }
    }
`;
export function ListItem({id,img,nombre,precio,cantidad}){
    const {dispatch} = useContext(ContextEcommerce);
    return <Item>
                <ContainerImg>
                    <img src={`img/${img}`} />
                </ContainerImg>

                <ContainerData>                    
                    <h2>{nombre}</h2>

                    <div>
                        <Price>S/.{precio}</Price>

                        <Operation>
                            <button 
                            onClick={()=> dispatch({type:types.ADD_PRODUCTO,payload: id})} 
                            >+</button>

                            <p>{cantidad}</p>

                            <button 
                            onClick={()=> dispatch({type:types.DECREASE_ONE_PRODUCTO,payload: id})}
                            >-</button>
                        </Operation>
                    </div>

                    <ContainerDelete>
                        <button 
                        onClick={()=> dispatch({type:types.REMOVE_PRODUCTO,payload: id})}
                        >Eliminar</button>
                    </ContainerDelete>
                </ContainerData>
            </Item>
}

/* CONTAINER PRINCIPAL */
const ContainerCarrito = styled.main`
    margin-top: 5.5rem;
    margin-bottom: 1rem;
    width: calc(100% - 2rem);    
    display: grid;
    grid-template-columns: ${props => props.cantidad ? "2fr 1fr":"1fr"};
    color: white;
    gap: 1rem;
    @media screen and (max-width:550px) {
        grid-template-columns: 1fr;

    }
`;

/* CONTAINER CARRITO */ 
const Carrito = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Message = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    
    div{
        font-size: calc(7rem + 1vh);
        display: flex;
        color: red;
    }
    h2{
        text-align: center;
        font-size: calc(2.5rem + 1vh);
    }
    p{
        text-align: center;
        font-size: calc(1.25rem + 1vh);
    }
    button{
        outline: none;
        border: none;
        background-color: #0d61bb;
        padding: 0.5rem 2.5rem;
        font-size: calc(1rem + 1vh);
        color: white;
        border-radius: 20px;
        cursor: pointer;
        transition: background-color 0.3s ease-in;
    }
    button:hover{
        background-color: #007bff;
    }
    @media screen and (max-width:374px) {
        padding: 1rem;
        div{
            font-size: calc(4rem + 1vh);
        }
    }

`;
/* CONTAINER DEL RESUMEN DE LA ORDEN */
const ContainerOrden = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* width: calc(100% - 2.5rem); */

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    div:nth-child(2){
        background-color: white;
        border-radius: 6px;
        padding: 0.5rem;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        font-size: 1.2rem;
    }

    p{
        display: flex;
        justify-content: space-between;
    }
    
    button{
        outline: none;
        border: none;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        border-radius: 16px;
        background-color: #0d61bb;
        color: white;
        text-align: center;
        cursor: pointer;
    }
    button:hover{
        background-color: #007bff;
    }
`;

function Cart(){

    const {data,dispatch} = useContext(ContextEcommerce);

    const cantidad = (data.carrito.length > 0) && data.carrito.map(el => el.cantidad)
    .reduce((acumulador,valor)=> acumulador + valor);
    
    const navegacion = useNavigate();

    const compra = () =>{
        dispatch({type:types.REMOVE_TOTAL_PRODUCTOS});
        navegacion("/");
    }
    return <ContainerCarrito className="container" cantidad={(data.carrito.length > 0)}>
        <Carrito>
            {(data.carrito.length > 0) && <h1>Carrito ({cantidad} productos)</h1>}

            {data.carrito.length > 0 ? data.carrito.map((producto) =>
                <ListItem 
                    key={producto.id}
                    id={producto.id}
                    img={producto.img}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    cantidad={producto.cantidad}
                />)
                :<Message>
                    <div>
                        <AiOutlineShoppingCart/>
                    </div>
                    <h2>Tu Carro está vacío</h2>
                    <p>Tenemos los mejores precios en productos tecnológicos.¿Te los vas a perder?</p>
                    <button
                    onClick={()=>navegacion("/")}
                    >Inicio</button>
                </Message>
            }
        </Carrito>

        <ContainerOrden>
            
            {data.carrito.length > 0 && 
                <div>
                    <h2>Resumen de la Orden</h2>
                    <div>
                        <p>Total :  <span>S/. {data.carrito.map(el => el.cantidad * el.precio)
                            .reduce((acumulador,valor)=> acumulador + valor)}
                            </span>
                        </p>
                        
                        <button
                            onClick={compra}
                        >Comprar</button>
                    </div>
                </div>
            }
        </ContainerOrden>

    </ContainerCarrito>
}

export default Cart;