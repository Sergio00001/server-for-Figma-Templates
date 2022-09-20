const Router = require('express')
const router = new Router
const layoutsRouter = require('./layoutRouter')

router.use('/layouts', layoutsRouter)

module.exports = router