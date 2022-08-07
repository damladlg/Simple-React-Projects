import React, {createContext, useContext, useReducer} from "react";

export const TodoLayerContext = createContext();

//Provider oluşturduğum contexti bana sağlar. Contexti kullanmak isteyen diğer componentlere todoLayerı içerisinde tutmam gerekir.
export const TodoLayer=({initialState, reducer, children})=>{
    <TodoLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </TodoLayerContext.Provider>
}

//Providerı tüketmek için yöntem
export const useTodoLayerValue=()=>useContext(TodoLayerContext);