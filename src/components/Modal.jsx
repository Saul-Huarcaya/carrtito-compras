

import styled from "styled-components";

const ModalContainer = styled.article`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(0, 0, 0,0.75);
    display: ${visible => visible ? "flex" : "none" };
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    position: relative;
    padding: 1rem;
    max-width: 500px;
    max-height: 600px;
    overflow-y: auto;
    background-color: white;
    color: black;
    border-radius: 6px;
    @media screen and (max-width:375px) {
        width: 260px;
        padding: 0.5rem;
    }
`;
const Close = styled.button`
    position: absolute;
    right: 1rem;
    top: 0.8rem;
    cursor: pointer;
    border: none;
    color: black;
    font-size: 1rem;
    transition: all 0.2s ease-in;
    
    &:hover{
        color: red;
    }

`;
function Modal({Modal,setModal,children}){

    const CloseModal = () => setModal(false);

    const CancelPropagation= (e) =>{
        e.stopPropagation();
    }
    return <ModalContainer visible={Modal} onClick={CloseModal}>
            <ModalContent onClick={CancelPropagation}>
                <Close onClick={CloseModal}>X</Close>
                {children}
            </ModalContent>
</ModalContainer>
}

export default Modal;