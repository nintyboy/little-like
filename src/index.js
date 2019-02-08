import React from "react";
import ReactDOM from "react-dom";
import {
	hot
} from 'react-hot-loader';



import HelloWorld from "./components/helloWorld"
import Template from "./components/template"


class App extends React.Component {
	render() {
		return <div >
			<
			HelloWorld / >
			<
			/div>;
	}
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render( < AppWithHot / > , mountNode);