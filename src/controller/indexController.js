const path = require('path')



const indexController = async (req, res) => {
	
	// res.sendFile(path.join(__dirname, '../../public/index.html'))
	res.sendFile('index.html');
	res.end();
}


module.exports = indexController