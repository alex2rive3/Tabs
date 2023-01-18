import { React, useState } from "react";
import "../App.css";
import { Container, A, Contenido, Botonera } from "./ComponentStyle";
const Pestañas = (props) => {
    const [tabs, setTabs] = useState([
        {
            content: "Hola soy la Pestaña uno",
            title: "Tab1",
            state: "",
        },
        {
            content: "Hola soy la Pestaña dos",
            title: "Tab2",
            state: "active",
        },
        {
            content: "Hola soy la Pestaña tres",
            title: "Tab3",
            state: "",
        },
    ]);

    const changeActive = (i) => {
        let newTabs = tabs.map((tab) => {
            tab.title === tabs[i].title
                ? (tab.state = "active")
                : (tab.state = "");
            return tab;
        });
        setTabs(newTabs);
    };

    return (
        <Container>
            <Botonera>
                {tabs.map((item, i) => (
                    <A
                        key={i}
                        className={item.state}
                        onClick={() => changeActive(i)}
                    >
                        {item.title}
                    </A>
                ))}
            </Botonera>
            <Contenido>
                {tabs
                    //filtramos para obtner solo el elemento que este clicckeado(este es el que tiene la clase active) y luedo por medio del map mostramos el contenido del mismo
                    .filter((item) => item.state === "active")
                    .map((item, i) => (
                        <p key={i}> {item.content} </p>
                    ))}
            </Contenido>
        </Container>
    );
};

export default Pestañas;
