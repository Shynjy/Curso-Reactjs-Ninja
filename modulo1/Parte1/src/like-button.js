'use strict'

import React, { Component } from 'react'

import Button from './button'

export default class LikeButton extends Component {
    render () {
        return <Button handleClick={e => alert('Like!')}>Curtir</Button>
    }
}