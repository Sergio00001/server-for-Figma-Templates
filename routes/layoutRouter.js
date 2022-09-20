const Router = require('express')
const router = new Router
const layoutsController = require('../controllers/layoutsController')

router.post('/publish', layoutsController.create)
router.get('/', layoutsController.getAll)
router.get('/:id', layoutsController.getOne)

module.exports = router