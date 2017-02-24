import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0
		};

		this.handleSetCountdown = this.handleSetCountdown.bind(this);
	}

	handleSetCountdown = seconds => {
		console.log('seconds', seconds);
		this.setState({
			count: seconds
		});
	}

	render() {
		const {count} = this.state;
		
		return (
			<div className="countdown">
				<Clock totalSeconds={this.state.count} />
				<CountdownForm onSetCountdown={this.handleSetCountdown} />
			</div>
		);
	}
}