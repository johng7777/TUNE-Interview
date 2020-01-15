import React from 'react'

export class Page extends React.Component {
    constructor() {
        super()

        this.template = false
        this.lazyLoad = true
        this.columns = {
            "number": 3,
            "width": "300px",
        }
    }
}