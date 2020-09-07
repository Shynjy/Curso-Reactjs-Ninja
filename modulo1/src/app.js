'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

import Button from './button'
import LikeButton from './like-button'

import Timer from './timer'

// var App = React.createClass({
//     render: function () {
//     return <div>
//       <Title name='Sônia' lastname='Pereira!'/>
//     </div>
//   }
// })

class App extends Component {
  constructor() {
    console.log('constructor');
    super()
    this.state = {
      text: 'Texto Teste',
      color: 'green',
      showTimer: true,
      time: 0
    }
  }

  componentWillMount () {
    console.log('componenteWillMount');
  }

  componentDidMount () {
    console.log('componenteDidMount');
  }


  render() {
    console.log('render');
    return (
      <div>
        <Title name='David' lastname='Pereira!' />
        {this.state.showTimer && <Timer time={this.state.time} />}
        <Button handleClick={() => this.setState({ showTimer: !this.state.showTimer})}>
            Show / hide timer
        </Button>
        <Timer time={this.state.time} />
        <Button handleClick={() => this.setState({ time: this.state.time + 10})}>
           Change props
        </Button>
        <div className='container' onClick={e => alert('clicou!')}>
          <Square color={ this.state.color } />
        </div>
        <div>
        {['red', 'blue', 'green', 'yellow'].map(color => 
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