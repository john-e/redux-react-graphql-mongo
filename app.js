const express = require('express');
const path = require('path');
const CONFIG = require('./config');
const bodyParser = require('body-parser');

const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const schema = require('./src/graphql');

let app = express();

app.use('/static', express.static('assets'));

app.get('/test', (req, res) => {
    res.send('sgsg');
    res.end();
});

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
//app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(CONFIG.PORT, () => {
  console.log('Server listening at http://localhost:'+CONFIG.PORT);
});