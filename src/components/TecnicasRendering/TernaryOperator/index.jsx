import React from 'react'

const TernaryOperator = ({condition}) => {
  return (
    condition ? <h1>La condicion es verdadera</h1> : <h1>La condicion es falsa</h1>
  )
}

export default TernaryOperator