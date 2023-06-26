const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String }, // 具体类别
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },  // 一级分类 ref - 实现关联查询
})

module.exports = mongoose.model('Category', schema)