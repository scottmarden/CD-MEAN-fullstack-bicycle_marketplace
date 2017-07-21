let controller = require('../controllers/controller.js');

module.exports = app => {
	app.post('/api/register', controller.register);
	app.post('/api/login', controller.login);
	app.get('/api/browse', controller.browse);
	// app.get('/api/listings', controller.listings);
	app.post('/api/createListing', controller.createListing);
	// app.get('/api/contact', controller.contact);
}
