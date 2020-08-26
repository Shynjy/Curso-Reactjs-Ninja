'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

// var App = React.createClass({
//     render: function () {
//     return <div>
//       <Title name='Sônia' lastname='Pereira!'/>
//     </div>
//   }
// })

class App extends Component {
  render() {
    return (
      <div>
        <Title name='David' lastname='Pereira!' />
        {['blue', 'red', 'green', 'yellow', 'black'].map(square => {
          return <Square key={square} color={square} />
        })}
      </div>
    )
  }
}

export default App