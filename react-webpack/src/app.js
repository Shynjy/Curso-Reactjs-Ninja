'use strict'

// const React = require('react')
import React from 'react'

// sem babel
// let Title = React.createClass({
//     render: function () {
//         return React.createElement('h1', null, 'Título')
//     }
// })

// com babel-preset-react
let Title = React.createClass({
    render: function () {
        return <h1>Título</h1>
    }
})

// Padrão commonjs
// module.exports = Title

// ES6/2105
export default Title