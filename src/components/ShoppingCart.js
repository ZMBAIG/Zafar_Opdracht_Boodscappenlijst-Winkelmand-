import React from "react"
import List from "./List"

function ShoppingCart(props) {
    return (
        <div className="shoppingcart-list">
            <h1>Winkelmand</h1>
            <button onClick={props.emptyCart}>Leeg de winkelmand</button>
            <List array={props.list} hasClickFunctionality={false} />
        </div>
    )
}

export default ShoppingCart