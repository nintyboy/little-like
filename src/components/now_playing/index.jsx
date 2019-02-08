import React from "react";
import ReactDOM from "react-dom";
import styles from '../../scss/components/player.scss';

class Now_playing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}

	};
	handleClick(e) {
		e.preventDefault()
		alert("hello");

	};
	render() {
		return <h1 onClick = {
			this.handleClick.bind(this)
		} > hello, < /h1>
	};


}

Now_playing.propTypes = {}
Now_playing.defaultProp = {}


export default Now_playing;