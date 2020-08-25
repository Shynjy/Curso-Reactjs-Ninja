'use strict'

// padrão ES6/2015
import Title from './app'

// const React = require('react')
import React from 'react'

// const  ReactDOM = require('react-dom')
import { render } from 'react-dom'

// padrão commonjs
// var Title = require('./app')

const Root = document.querySelector('[data-js="app"]')

// sem babel
// render(
//     React.createElement(Title),
//     Root
// )

// com babel-preset-react
render( <Title/>, Root )