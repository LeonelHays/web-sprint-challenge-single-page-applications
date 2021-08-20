import React from "react"

export default function List(props) {
    const { details } = props

    if (!details) {
        return <h3>Working fetching Order&apos; details...</h3>
    }

    return (
        <div className='list container'>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            <p>Toppings: {details.toppings}</p>
            <p>Substitute: {details.substitute}</p>
            <p>Instructions: {details.instructions}</p>
        </div>
    )
}