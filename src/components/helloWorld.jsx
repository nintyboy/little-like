import React from "react";
import ReactDOM from "react-dom";
import Container from "./container";
import Now_playing from "./now_playing"
const get = require('../utils/get.js')


class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			url: 'https://www.polygon.com/2019/1/4/18168810/carmen-sandiego-animated-series-netflix-release-date'
		}
	};
	handleChange(e) {
		this.setState({
			url: e.target.value
		})
	}
	handleSearch(e) {
		e.preventDefault();
		var that = this;
		this.setState({
			isLoading: true
		})
		get.getData(this.state.url).then(function(data) {
			console.log(data.domain)
			that.setState({
				data,
				isLoading: false

			})
		}, function(errorMessage) {
			alert(errorMessage);
		})

	};
	render() {
			var {
				isLoading,
				url,
				data
			} = this.state;

			function renderWindow() {
				if (isLoading) {
					return <h3 > Fetching... < /h3>
				} else if (url && data) {
					return <Container content = {
						data
					}
					/>
				}
			}


			return <div className = "container" >
				<form className = "import_module"
					onSubmit = { this.handleSearch.bind(this)} >

				<input type = "text"
					value = {this.state.url}
					onChange = {this.handleChange.bind(this)}
				/>
				<p> {this.state.url} </p>
				<input type = "submit"
					value = "Get Website"
				/>
				</form>
			
				{renderWindow()}
			</div> ;
		};
}


export default HelloWorld;
