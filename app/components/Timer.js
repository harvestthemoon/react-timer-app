import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Timer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			timerStatus: 'stopped'
		};

		this.handleStart = this.handleStart.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.handleStart();
					break;
				case 'stopped':
					this.setState({
						count: 0
					});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
			}
		}
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = undefined;
	}

	handleStart() {
		this.timer = setInterval(() => {
			const newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	}

	handleStatusChange(newStatus) {
		this.setState({
			timerStatus: newStatus
		});
	}

	render() {
		const {count, timerStatus} = this.state;

		return (
			<div className="timer">
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count} />
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
			</div>
		);
	}
}