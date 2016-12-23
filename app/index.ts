import * as restify from 'restify';

// Init
const server = restify.createServer();
const port = process.env.PORT || 8080;

// Middlewares
server
	.use(restify.fullResponse())
	.use(restify.bodyParser());

// Routes
server.get('/', (req, res, next) => {
	res.send(200, {status: 'ok', message: 'success'});
	next();
});

// Start
server.listen(port, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('App is a ready at : ' + port);
    }
});