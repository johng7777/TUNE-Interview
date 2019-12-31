import React from 'react'

class Profile extends React.Component {
    constructor() {
        this.props.columns = {
            "number": 3,
            "width": "300px",
        }
        this.props.border = {
            "border-style": "solid",
            "border-width": "1px",
            "border-color": "#990000"
        }
        this.props.profile = {
            "height": "200px",
            "width": "280px"
        }
    }

    render() {
        return (
            <div>
                <div>
                    <a href={this.props.avatar}></a>
                    <h1>{this.props.name}</h1>
                </div>
                <div>
                    {this.props.occupation}
                </div>
            </div>
        )
    }
}