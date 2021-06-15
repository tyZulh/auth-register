const {
  getAll,
  getOneById,
  createOne,
  authentication
} = require('../models/users');

const handlePost = async (req, res) => {
  const result = await createOne(req.body);
  res.status(201).json(result);
}

const handleGetAll = async (req, res) => {
  const result = await getAll();
  res.status(200).json(result)
}

const handleGetOne = async (req, res) => {
  const result = await getOneById(req.params.id);
  res.status(200).json(result)
}

const handleAuthenticate = async (req, res) => {
  const token = await authentication(req.body);
  res.set('AccessToken', token)
  res.set('Access-Control-Expose-Headers', 'AccessToken')
  res.status(200).send()
}

module.exports = {
  handlePost,
  handleGetAll,
  handleGetOne,
  handleAuthenticate
}
