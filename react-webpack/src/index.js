'use strict'

// const React = require('react')
import React from 'react'

// const  ReactDOM = require('react-dom')
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// padrão ES6/2015
import App from './app'

// padrão commonjs
// var Title = require('./app')

// sem babel
// render( React.createElement(Title), document.querySelector('[data-js="app"]') )

const rootapp = document.querySelector('[data-js="app"]')

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>, rootapp
    )
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default

        renderApp(NextApp)
    })
}
