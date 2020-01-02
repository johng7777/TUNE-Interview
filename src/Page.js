import React from 'react'
import {Profile} from './Profile.js'

export class Page extends React.Component {
    constructor() {
        super();
        this.lazyLoad = true;
        this.columns = {
            "number": 3,
            "width": "300px",
        }
    }

    render() {
        return (
            <section>
                Hello Page
                <Profile />
            </section>
        )
    }
}