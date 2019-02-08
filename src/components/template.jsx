import React from "react";
import ReactDOM from "react-dom";

class Template extends React.Component {
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

Template.propTypes = {}
Template.defaultProp = {}


export default Template;