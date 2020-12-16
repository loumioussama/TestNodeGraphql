var express = require('express');
var cors = require('cors')
var bodyParser = require("body-parser");
const { graphqlHTTP } = require('express-graphql');
var schema = require('./schema/schema')
var app = express();
const expressPlayground = require('graphql-playground-middleware-express').default

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true

}));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))


var db = require("./models/config.models");
db.sequelize.sync();

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });