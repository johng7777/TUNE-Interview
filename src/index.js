import React from 'react'
import ReactDOM from 'react-dom'
import {Page} from './Page.js'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

ReactDOM.render(
    <Page msg="hello world" />,
    document.getElementById('root')
)