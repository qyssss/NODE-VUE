const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String }, // 名称
    slides: [{
        image: { type: String }, // 图片
        url: { type: String } // 跳转地址
    }]
})

module.exports = mongoose.model('Slider', schema)