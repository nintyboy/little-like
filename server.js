const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

/*----------
INITIALISE APP
------------*/

app.use(express.static(__dirname + '/dist'));


/*----------
Setup Routes
------------*/
//send every page to 'index.html'
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT);

console.log('Server running on port: ' + PORT);