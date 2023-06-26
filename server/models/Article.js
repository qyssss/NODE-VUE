const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: { type: String }, // 文章标题
    category: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
    detail: { type: String }
})

module.exports = mongoose.model('Article', schema)