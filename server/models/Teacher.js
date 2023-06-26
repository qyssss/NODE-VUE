const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String }, // 教师姓名
    pic: { type: String }, // 头像
    ad: { type: String }, // 个人广告
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Category" }], // 教师类别
    languages: {
        Chinese: { type: Number },
        French: { type: Number },
        Spanish: { type: Number },
        Russian: { type: Number },
        Other: { type: Number },
    }, // 能说的语言
    introduction: { type: String }, // 自我介绍
    course: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Course" }], // 推荐课程
    features: [{ type: String }], // 教师特征
})

module.exports = mongoose.model('Teacher', schema)