const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const {
  handleGetAll,
  handlePost,
  handleGetOne,
  handleAuthenticate
} = require('../controllers/users');
const isTokenValid = require('../middlewares/isTokenValid');

router.get('/', isTokenValid, handleGetAll);
router.post('/', asyncHandler(handlePost))
router.get('/:id', isTokenValid, asyncHandler(handleGetOne))
router.post('/login', asyncHandler(handleAuthenticate))

module.exports = router