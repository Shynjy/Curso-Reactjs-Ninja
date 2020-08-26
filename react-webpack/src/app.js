'use strict'

// const React = require('react')
import React from '../node_modules/react/react'

// sem babel
// let Title = React.createClass({
//     render: function () {
//         return React.createElement('h1', null, 'Título')
//     }
// })

// com babel-preset-react
const App = React.createClass({
    render: function () {
        return <div>Aplicação</div>
    }
})

// Padrão commonjs
// module.exports = Title

// ES6/2105
export default App