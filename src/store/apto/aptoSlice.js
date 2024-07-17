import { createSlice } from "@reduxjs/toolkit";


const setPromocao = (apto) => {
    

    if(!apto.temPromocao) return 'Sem';
    if(apto.preco < 1000) return 'Normal';
    if(apto.preco < 5000) return 'Plus';
    else return 'Super';
} 

const initialState = [];

const aptoSlice = createSlice({
    name: 'aptos',
    initialState,
    reducers: {
        salvarApto: (state, action) => {
            return [ ...state, { ...action.payload, ...{ promocao: setPromocao(action.payload)}} ]
        },
        selecionarPromocao: (state, action) => {
            const apto = state.find(apto => apto.numero === action.payload.numero);
            apto.temPromocao = !apto.temPromocao;

            apto.promocao = setPromocao(apto);
        }
    },
});

export const { salvarApto, selecionarPromocao } = aptoSlice.actions;

export default aptoSlice.reducer;