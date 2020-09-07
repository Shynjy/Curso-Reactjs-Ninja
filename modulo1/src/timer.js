'use strict'

import React, { Component } from 'react'

let currentTime = 0

export default class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: currentTime
        }

        this.timer;
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            return this.setState({ time: this.state.time + 1})
        }, 1000);
    }

    componentWillUnmount() {
        currentTime = this.state.time
        clearInterval(this.timer)
    }

    componentWillReceiveProps (nextProps) {
        console.log('componentWillReceiveProps', this.props, nextProps.time);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return this.state.time !== nextState.time
    }

    render() {
        return ( <div>Timer: {this.state.time}</div> ) 
    }
}