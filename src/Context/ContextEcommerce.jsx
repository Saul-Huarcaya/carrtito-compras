import { createContext, useReducer } from "react";
import reducerEcommerce  from "../reducer/reducerEcommerce";

export const ContextEcommerce = createContext();

const initialState = {
    productos:[
        {
            id: "1",
            nombre:"Audifono Gaming X15 PRO Bluetooth",
            precio:129,
            img:"audifonos.jpg"
        },{
            id: "2",
            nombre:"Televisor Panasonic LCD 4K UHD Smart 43",
            precio:1299,
            img:"televisor.jpg"
        },{
            id:"3",
            nombre:"Smartphone Galaxy A23 128Gb 4Gb Single Sim Negro",
            precio:1049,
            img:"celular.jpg"
        },{
            id:"4",
            nombre:"Teclado gamer HyperX Alloy Origins 60 QWERTY HyperX Lineal Red inglés US color negro con luz RGB",
            precio:364,
            img:"teclado.jpg"
        }
    ],
    carrito:[],
};


export const ProviderEcommerce = ({children}) =>{

    const [data,dispatch] = useReducer(reducerEcommerce,initialState);

    return <ContextEcommerce.Provider value={{data,dispatch}}>
        {children}
    </ContextEcommerce.Provider>
}