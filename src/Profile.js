import React from 'react'
import {Users} from './Users.js'

export class Profile extends React.Component {


    constructor() {
        super();
        this.border = {
            "border-style": "solid",
            "border-width": "1px",
            "border-color": "#990000"
        }
        this.profile = {
            "height": "200px",
            "width": "280px"
        }
    }

    render() {
        return (
            <section>
                <section>
                    <a href={this.props.avatar}></a>
                    <h1>{this.props.name}</h1>
                </section>
                <section>
                    {this.props.occupation}
                </section>
            </section>
        )
    }
}