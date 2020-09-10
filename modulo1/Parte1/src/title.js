'use strict'

import React from 'react'

// componente em função pura
const Title = props => (
  <h1>Olá {`${props.name} ${props.lastname}`}</h1>
)

// CREATECLASS

// var Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: 'sem sobrenome'
//     }
//   },

//   render: function () {
//     return <h1>Olá { this.props.name + ' ' + this.props.lastname } </h1>
//   }
// })

// FUNÇÃO PURA
Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'sem sobrenome!'
}


export default Title