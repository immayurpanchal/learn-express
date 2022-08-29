const express = require('express');
const app = express();
const port = process.env.PORT || 1234;

app.get('/', (req, res) => {
	res.json({ name: 'mayur', address: 'idar' });
});

app.get('/coin', (req, res) => {
	res.json({ name: 'bitcoin', price: 123.456 });
});

app.get('/data', (req, res) => {
	res.json([{ name: 'bitcoin' }, { name: 'dogecoin' }]);
});

// if you reach till here, means no route has matched
app.get('*', (req, res) => {
	res.status(169).json({ ans: 'route not found' });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
