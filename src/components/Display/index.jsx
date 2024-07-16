import { useState } from "react";

const style = {
    borderStyle: "outset",
    padding: "10px",
    backgroundColor: "#444"
}


const Display = (props) => {
    const [aptoSalvo, setAptoSalvo] = useState(props.apto);

    return (
        <div style={style} onClick={() => setAptoSalvo(apto => {
            return { ...apto, ...{ promocao: 'Sem'} }
        })}>
            <p>Numero: { aptoSalvo.numero }</p>
            <p>Preço: { aptoSalvo.preco }</p>
            <p>Promocao: {aptoSalvo.promocao} </p>
        </div>
    )
}

export default Display;