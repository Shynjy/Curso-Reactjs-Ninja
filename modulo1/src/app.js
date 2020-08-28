'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

import Button from './button'
import LikeButton from './like-button'

// var App = React.createClass({
//     render: function () {
//     return <div>
//       <Title name='Sônia' lastname='Pereira!'/>
//     </div>
//   }
// })

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Texto Teste',
      color: 'green'
    }
  }


  render() {
    return (
      <div>
        <Title name='David' lastname='Pereira!' />
        {/* exemplo de criação de keys 
        {['blue', 'red', 'green', 'yellow', 'black'].map(square => {
          return <Square key={square} color={square} />
        })}
        */}
        <div className='container' onClick={e => alert('clicou!')}>
          <Square color={ this.state.color } />
        </div>
        <div>
        {['red', 'blue', 'green'].map(color => 
            <Button key={color}
            handleClick={() => this.setState({ color })}>
              { color }
            </Button>
          )}
        </div>
        <div className='container'>
          <Button>Botão</Button>
        </div>
        {/* Esse botão é uma composição do botão padrão */}
        <div className='container'>
          <LikeButton />
        </div>
        <div className='container'
          onClick={() => this.setState({ text: `Texto clicado`})}>
          {this.state.text}
        </div>
        
      </div>
    )
  }
}

export default App