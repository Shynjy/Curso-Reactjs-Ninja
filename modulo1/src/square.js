'use strict'

import React, { Component } from 'react'

// const Square = ({ color }) => {
//    return <div style={{
//         height: '100px',
//         width: '100px',
//         backgroundColor: color
//     }}/>
// }

export default class Square extends Component {
    render( ) {
        return <div style={{
            height: '100px',
            width: '100px',
            backgroundColor: this.props.color
        }} />
    }
}

Square.defaultProps = {
    color: 'red'
}

// export default Square