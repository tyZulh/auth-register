const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = require('./env');
const handleRecordNotFoundError = require('./middlewares/handleRecordNotFoundError');
const handleUserAlreadyExistError = require('./middlewares/handleUserAlreadyExistError');
const handleUnauthorizedError = require('./middlewares/handleUnauthorizedError');
const handleInternalServerError = require('./middlewares/handleInternalServerError');

const app = express();

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app)

app.use(handleRecordNotFoundError)
app.use(handleUserAlreadyExistError)
app.use(handleUnauthorizedError)
app.use(handleInternalServerError)

app.listen(SERVER_PORT, () => {
  console.log(`server listening on : ${SERVER_PORT}`);
});
