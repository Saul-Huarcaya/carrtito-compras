import { AiOutlineShoppingCart} from "react-icons/ai";
import {  useContext } from "react";
import { ContextEcommerce } from "../Context/ContextEcommerce";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
const ContainerNavbar = styled.header`
    background-color: black;
    color: white;
    height: 5rem;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
`;
const Navbar = styled.nav`
    width: 100%;
    display: flex;
    height: inherit;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-right: 1rem;
    max-width: 1024px;
    position: relative;  
`;
const Logo = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    
    &:hover{
        transition: background-color 0.2s ease-in;
        background-color: #007bff;
        border-radius: 40px;
    }
`;
const ButtonCart = styled.button`
    border: none;
    background-color: #007bff;
    color: white ;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in;
    position: static;
    border: 2px solid transparent;
    
    &:hover{
        border: 2px solid white;
    }
`;
const Counter = styled.div`
    top: 10px;
    right: 0;
    height: 10px;
    width: 10px;
    background-color: red;
    position: absolute;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: white;
    border-radius: 50%;
`; 

function Nav(){
    const navegacion = useNavigate();
    const {data} = useContext(ContextEcommerce);

    const cantidad = (data.carrito.length > 0) && data.carrito.map(el => el.cantidad)
    .reduce((acumulador,valor)=> acumulador + valor);

    return <ContainerNavbar>
        
        <Navbar>

            <Logo onClick={()=> navegacion("/")} >
                <h2>Store</h2>
            </Logo>

            <ButtonCart onClick={()=> navegacion("/cart")}>
                <AiOutlineShoppingCart/>
                {
                    data.carrito.length > 0 && <Counter>{cantidad}</Counter>
                }
            </ButtonCart>

        </Navbar>

    </ContainerNavbar>
}

export default Nav;