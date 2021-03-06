import React from "react"

function ListItem(props) {
    if (props.onClick) {
        return (
            <li onClick={() => { props.onClick(props.value) }}>{props.value}</li>
        )
    } else {
        return (
            <li>{props.value} Hoeveelheid: {props.amount}</li>
        )
    }
}

export default ListItem