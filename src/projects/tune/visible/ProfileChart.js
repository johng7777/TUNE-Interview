import React, { PureComponent } from 'react';
import { 
    AreaChart, 
    Area,
    Tooltip
 } from 'recharts';
 
export default class ProfileChart extends PureComponent {

    convertToArray = () => {
        var conversions = []

        for (var key of Object.keys(this.props.data)) {
            conversions.push(this.props.data[key])
        }

        return conversions
    }

	render() {
        console.log('data', this.convertToArray(this.props.data))
		return (
			<div>
				<AreaChart
					width={325}
					height={120}
					data={this.convertToArray(this.props.data)}
					syncId="anyId"
					margin={{
						top: 10, right: 25, left: 20, bottom: 10,
					}}
				>
					<Tooltip />
					<Area type="monotone" dataKey="conversions" stroke="#8884d8" fill="#8884d8" />
				</AreaChart>
			</div>
		);
	}
}
