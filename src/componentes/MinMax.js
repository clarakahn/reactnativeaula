import React from "react";
import {Text} from 'react-native'
import Estilo from "./Estilo";


export default (param) =>{
console.warn(param)
    return(
        <Text style= {Estilo.txtGrande}>
            O Valor X é Maior que o Y
        </Text>
        )
}
