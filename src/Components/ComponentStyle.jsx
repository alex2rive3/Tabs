import styled from "styled-components";
const Container = styled.div`
    margin: 15px auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 300px;
`;
const Botonera = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const A = styled.a`
    background-color: lightgrey;
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
`;
const Contenido = styled.p`
    border: 2px solid black;
    margin-top: 16px;
    border-radius: 20px;
`;
export { Container, A, Contenido, Botonera };
