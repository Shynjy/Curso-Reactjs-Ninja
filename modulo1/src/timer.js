'use strict'

import React, { Component } from 'react'

export default class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }

        this.timer;
    }
    render() {
        return ( <div>Timer: {this.state.time}</div> ) 
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            return this.setState({ time: this.state.time + 1})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
}