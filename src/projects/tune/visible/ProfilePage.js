import React from 'react'
import {Page} from '../../../general/components/visible/pages/Page.js'
import {Users} from '../invisible/Users.js'
import {Profile} from './Profile.js'

export class ProfilePage extends Page {
    constructor() {
        super();

        this.users = new Users();

        this.pageStyleLeft = {
            "width": "50%",
            "float": "left"
        }
        this.pageStyleRight = {
            "width": "50%",
            "float": "right"
        }

        this.columnProperties = {
            "columnCount": "3",
            "columnWidth": "400px",
            "overflow": "auto"
        }

    }
    
    componentDidMount() {

        this.users.startProcessing().then(response => {
            this.setState(this.users)
            // get rid of original data, never will need it again
            this.users.cleanup()
        })
    }

    render() {
        return (
            <section style={this.columnProperties}>
                {this.users.getRecords().map((user, user_id) => (
                        <Profile 
                            key={user_id} 
                            avatar={user.avatar} 
                            occupation={user.occupation} 
                            name={user.name} 
                            impressions={user.history.totalImpressions} 
                            conversions={user.history.conversions} 
                            totalConversions={user.history.totalConversions} 
                            totalRevenue={Math.round(user.history.totalRevenue)}
                            data={user.history.conversions}
                        />
                ))}
            </section>
        )
    }
}