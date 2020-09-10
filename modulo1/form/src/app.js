'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'valor inicial',
      checked: false,
      option: '3'
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.value} defaultValue='' onChange={(e) => {
            // console.log(e.target);
            this.setState({
              value: e.target.value
            })
          }} />
          <label>
            <input type='checkbox' value='1checkbox' checked={ this.state.checked } onChange={(e) => {
              this.setState({ checked: e.target.checked })
            }} />
            Checkbox
          </label>
          <labe>
             <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
          </labe>
          <labe>
             <input type='radio' name='rd' value='2' /> Radio 2
          </labe>
          <select value={ this.state.option } onChange={(e) => {
            this.setState({ option: e.target.value })
          }}>
              <option value='1' >Opção 1</option>
              <option value='2' >Opção 2</option>
              <option value='3' >Opção 3</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App