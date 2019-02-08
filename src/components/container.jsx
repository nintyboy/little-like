import React from "react";
import ReactDOM from "react-dom";
import styles from '../scss/components/player.scss';
import AudioPlayer from "react-h5-audio-player";


/*
	Styling
*/


class Template extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lead_image : this.props.content.lead_image_url,
			logo : this.props.content.logo
		}

		// console.log(this.state.lead_image);
		// this.bg = this.props.content. lead_image_url;
		this.bgIMG = {
			backgroundImage: `url(https://fillmurray.com/200/300);`
		}


	};
	/*
		Event handling
	*/
	handleClick(e) {
		e.preventDefault()
		alert("hello");

	};
	render() {
		const streamURL = this.props.content.URI;



		return <div className = "now_playing">
			<div className =  "now_playing__view" style={{backgroundImage: "url(" + this.state.lead_image + ")"}}>
				<div className = "now_playing__view__logo">
					<img src = {this.state.logo}/>
				</div>
				<div className = "now_playing__view__content">

					<ul>
						<li>
							<a href = "{this.props.content.url}">
								<h2>{this.props.content.domain}</h2>
							</a>
						</li>
						<li>
							<h1>{this.props.content.title}</h1>
						</li>
					</ul>
				</div>
			</div>
			<div className = "now_playing__player">
				<AudioPlayer
					autoPlay
					src = {streamURL}
					onPlay = {e => console.log("onPlay")}
				/>

			</div>
		</div>
	};


}

Template.propTypes = {}
Template.defaultProp = {}


export default Template;
