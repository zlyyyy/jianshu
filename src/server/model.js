const mongoose = require('mongoose')
//连接mongo，并且使用react这个集合，connect连接数据库
const DB_URL = 'mongodb://localhost:27017/jianshu'
mongoose.connect(DB_URL)

const models = {
  article:{
    'user':{ 'type':String, 'default':'admin' },
    'title':{ 'type':String, 'require':true },
    'time':{ 'type':Number, 'default':new Date().getTime() }
  }
}

//类似于mysql的表 mongo里有文档、字段的概念
//建表 定义文档模型，Schema和model新建模型
for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}