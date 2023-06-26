module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true, // 保留父路由器的必需参数值
    })
    // 数据库操作异步
    // 增
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 查全部
    router.get('/', async (req, res) => {
        const queryOpt = {}
        if (req.Model.modelName === 'Category') {
            queryOpt.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOpt).limit(15)
        res.send(items)
    })
    // 用id查单个
    router.get('/:id', async (req, res) => {
        const item = await req.Model.findById(req.params.id)
        res.send(item)
    })
    // 改
    router.put('/:id', async (req, res) => {
        const item = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(item)
    })
    // 删
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    // 统一处理 /admin/api/rest/ 开头的请求
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        // inflection将小写路由(resource)转为类名
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    // 上传图片处理
    const multer = require('multer');
    const upload = multer({ dest: __dirname + '/../../uploads' });
    app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
}