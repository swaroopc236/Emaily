const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

app.get('/', (req, res) => {
	res.send({
		msg: 'Hello!',
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Serving on port ${PORT}...`);
});
