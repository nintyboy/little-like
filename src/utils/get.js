const axios = require('axios');

const url = "https://symmetrical-palm-tree.herokuapp.com/api/url";

module.exports = {
	getData: function(importURL) {
		// const promise = new Promise((resolve, reject) => {
		console.log("URL:", importURL);
		return axios.post(url, {
				data: {
					url: importURL
				}
			})
			.then(function(response) {

				return response.data.data
			})
			.catch(function(error) {
				console.log("GET ERROR:", error);
			})


	}
}

// export default get;