import React from 'react'
import ProfileChart from './ProfileChart.js'
import './Profile.css'

export class Profile extends React.Component {

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        console.log('profile', this.props)
        return (
            <section className="Profile-Properties">
                <section className="Profile-Name">
                    <img src={this.props.avatar} alt={this.props.name.split('')[0]} className="Profile-Pic" />
                    <section>
                        <span className="Profile-Name">{this.props.name}</span>
                        <section className="Occupation">
                            <span className="Occupation">{this.props.occupation}</span>
                        </section>
                    </section>
                </section>
                <section className="Profile-Content">
                    <section>
                        <ProfileChart data={this.props.data} />
                    </section>
                    <section className="Stats">
                        <section>
                            <section className="Impressions">{this.props.impressions}</section>
                            <section className="Wording">Impressions</section>
                        </section>
                        <section>
                            <section className="Conversions">{this.props.totalConversions}</section>
                            <section className="Wording">Conversions</section>
                        </section>
                        <section>
                            <section className="Revenue">${this.numberWithCommas(this.props.totalRevenue)}</section>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}