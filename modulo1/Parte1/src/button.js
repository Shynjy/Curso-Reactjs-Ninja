'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Button extends Component {
    render( ) {
        return <button onClick={ this.props.handleClick } style={{ marginTop: '10px ', marginBottom: '10px'}}>
            { this.props.children }
        </button>
    }
}

Button.defaultProps = {
    handleClick: e => alert('Botão padrão!')
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default Button