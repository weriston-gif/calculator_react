import React from "react";
import Button from '../componets/button.css'

/*If ternario verifica se o item tem alguma propriedade para usa sua estilização particular
condicional de classe*/
export default props => {
    /* Concatenando minha classe com as classes criadas */
    let classes = "btnCalculator "
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            onClick={() => props.click && props.click(
                props.label
            )}
            className={classes}>
                {props.label}
        </button >
    )
}