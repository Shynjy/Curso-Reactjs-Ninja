'use strict'

import React, { Component } from 'react'

export default class Button extends Component {
    render( ) {
        return <button onClick={ this.props.handleClick } style={{ marginTop: '10px ', marginBottom: '10px'}}>
            { this.props.children }
        </button>
    }
}

Button.defaultProps = {
    handleClick: e => alert('Botão padrão!')
}