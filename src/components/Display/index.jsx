import { useState } from "react";
import { useDispatch } from "react-redux";
import { selecionarPromocao } from "../../store/apto/aptoSlice";

const style = {
    borderStyle: "outset",
    padding: "10px",
    backgroundColor: "#444"
}


const Display = (props) => {
    /* const [aptoSalvo, setAptoSalvo] = useState(props.apto); */

   /*  const setPromocao = (apto) => {
        apto.temPromocao = !apto.temPromocao;

        if(!apto.temPromocao) return 'Sem';
        if(apto.preco < 1000) return 'Normal';
        if(apto.preco < 5000) return 'Plus';
        else return 'Super';
    }  */

    /* return (
        <div style={style} onClick={() => setAptoSalvo(apto => {
            return { ...apto, ...{ promocao: setPromocao(apto) } }
        })}>
            <p>Numero: { aptoSalvo.numero }</p>
            <p>Preço: { aptoSalvo.preco }</p>
            <p>Promocao: {aptoSalvo.promocao} </p>
        </div>
    ) */

    const dispatch = useDispatch();

    return (
        <div style={style} onClick={() => {
            dispatch(selecionarPromocao(props.apto))
        } }>
            <p>Numero: { props.apto.numero }</p>
            <p>Preço: { props.apto.preco }</p>
            <p>Promocao: { props.apto.promocao } </p>
        </div>
    )
}

export default Display;