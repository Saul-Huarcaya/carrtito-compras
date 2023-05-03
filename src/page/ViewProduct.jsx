import { useContext} from "react";
import { ContextEcommerce } from "../Context/ContextEcommerce";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import types from "../actions/actionsEcommerce";

const Product = styled.article`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 100%;
    @media screen and (max-width:375px) {
        width: 260px;
    }
    @media screen and (max-width:575px) {
        flex-direction:column;
        width: 100%;
    }
`;
const ContainerImg = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 150px;
    }
    @media screen and (min-width:576px) {
        
        max-width: 150px;
        
    }
`;
const ContainerOperation = styled.div`
    margin-top: 1rem;
    gap: 0.5rem;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ContainerData = styled.div`
    p:nth-child(1){
        font-weight: 600;
    }
    p:nth-child(2){
        font-size: 1.1rem;
    }
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-evenly;
`;
const Data = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p{
        color: red;
        font-size: 1.25rem;
    }
`;
const Logic = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
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
`;
const Cantidad = styled.span`
    text-align: center;
    width: 40px;
`;
const CloseProcess = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    button{
        border: none;
        cursor: pointer;
        background-color: white;
    }


    button:nth-child(1){
        font-size: 14px;
        transition: color 0.2s ease-in-out;
        color: #0d61bb;
    }
    button:nth-child(1):hover{
        text-decoration: underline;
    }

    button:nth-child(2){
        background-color: #0d61bb;
        color: white;
        padding: 0.5rem 1.25rem;
        border-radius: 16px;
        font-size: 1rem;
    }
    button:nth-child(2):hover{
        background-color: #007bff;
    }
    @media screen and (max-width:375px)  {
        gap: 0.5rem;
    }
`;
function ViewProduct({id,setModalAdd}){
    
    const {data , dispatch} = useContext(ContextEcommerce);
    const producto = data.productos.find((el) => el.id == id);
    const item = data.carrito.find((item)=> item.id == producto.id);

    const navegacion = useNavigate();
    
    const Home = () =>{
        navegacion("/");
        setModalAdd(false);
    }   
    const Cart = () =>{
        navegacion("/cart");
        setModalAdd(false);
    }
    const Decrecer = () =>{
        if(item){
            dispatch({type:types.DECREASE_ONE_PRODUCTO,payload:producto.id});
        }
    }
    return <Product>
                <ContainerImg>
                    <img src={`img/${producto.img}`} alt={producto.nombre} />
                </ContainerImg>
                <ContainerOperation>
                    <ContainerData>
                        <p>{producto.nombre}</p>
                        <Data>

                            <p>S/.{producto.precio}</p>
                            <Logic>
                                <button onClick={()=> dispatch({type:types.ADD_PRODUCTO,payload: producto.id})} >+</button>

                                <Cantidad>{(item)?item.cantidad:0}</Cantidad>

                                <button onClick={Decrecer} >-</button>
                            </Logic>
                        </Data>
                        
                    </ContainerData>

                    <CloseProcess>
                        <button onClick={Home} >seguir comprando</button>
                        <button onClick={Cart} >Ir al carrito</button>
                    </CloseProcess>

                </ContainerOperation>
            </Product>
}

export default ViewProduct;



