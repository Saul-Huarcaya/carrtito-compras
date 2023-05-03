import { useContext, useState } from "react";
import { ContextEcommerce } from "../Context/ContextEcommerce";
import types from "../actions/actionsEcommerce";
import styled from "styled-components";
import Modal from "../components/Modal";
import ViewProduct from "./ViewProduct";


const Main = styled.div`
    margin-top: 6rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width:540px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width:768px) {
        padding-left:1rem ;
        padding-right: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width:940px) {
        padding-left:1rem ;
        padding-right: 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
    }
`;
const CardProducto = styled.div`
    background-color: white;
    padding: 0.8rem;
    border-radius: 10px;
    display: flex;
`;
const Product = styled.div`
    display: flex;
    flex-direction: column;
    flex: 100%;
`;
const ContainerImg = styled.div`
    display: flex;
    flex: 100%;
    align-items: center;
    justify-content: center;
`;
const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-weight: 600;
    span{
        font-weight: 500;
        color: #db0909;
        font-size: 1.1rem;
    }
`;
const ButtonAdd = styled.button`
    border: none;
    background-color: #0d61bb;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 0.25rem;
    font-size: 1.1rem;
    width: 100%;
    
    &:hover{
        cursor: pointer;
        background-color: #007bff;
    }
`;
function Products(){
    const {data,dispatch} = useContext(ContextEcommerce);
    const [modalAdd,setModalAdd] = useState(false);
    const [idProduct,setIdProduct] = useState(0);

    const AddProduct = (id) =>{
        setIdProduct(id);
        setModalAdd(true);
        dispatch({type:types.ADD_PRODUCTO,payload:id})
    }

    return(<Main className="container">
            {
                data.productos.map((producto) => 
                <CardProducto key={producto.id}>
                    <Product>
                        <ContainerImg>
                            <img src={`img/${producto.img}`}  alt={producto.nombre} />
                        </ContainerImg>
                        <ContainerContent>
                            <p>{producto.nombre}</p>
                            <p>Precio: <span>S/.{producto.precio}</span></p>
                            <ButtonAdd onClick={()=> AddProduct(producto.id)}
                            >Añadir al Carrito</ButtonAdd>  
                        </ContainerContent>
                    </Product>
                </CardProducto>)
            }
            {
                modalAdd && <Modal modal={modalAdd} setModal={setModalAdd}>
                    <ViewProduct id={idProduct} setModalAdd={setModalAdd} />
                </Modal>
            }
    </Main>)
}
export default Products;