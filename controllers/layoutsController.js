const ApiError = require('../error/ApiError')
const { Layout } = require('../models/models')
const uuid = require('uuid')
const path = require('path')


class LayoutsController {
    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit

        const layouts = await Layout.findAndCountAll({ limit, offset })
        return res.json(layouts)
    }

    async getOne(req, res) {
        const { id } = req.params
        const layout = await Layout.findOne(
            { where: { id } }
        )
        return res.json(layout)
    }

    async create(req, res, next) {
        try {
            const { title, type, difficulty } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const layout = await Layout.create({ title, type, difficulty, img: fileName })

            return res.json(layout)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new LayoutsController()