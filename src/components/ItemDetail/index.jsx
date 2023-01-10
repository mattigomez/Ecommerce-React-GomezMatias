import React from 'react'

const ItemDetail = ({detail}) => {
    console.log(detail);
    return (
        <div>{detail.description}</div>
    )
}

export default ItemDetail