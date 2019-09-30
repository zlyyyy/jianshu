const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const model = require('./model');
const Article = model.getModel('article')
app.use(bodyParser());  // 解析request的body

const Router = require('koa-router')

const router = new Router({
  // 公共前缀
	prefix: '/api'
})
// 保存新增数据
router.get('/save', async (ctx, next) => {
  const { user, title, time } = ctx.query
  let result
	await Article.findOne({title},function(err,doc){
    if(doc){
      return result = {
        code: 201,
        data: [],
        message: '标题重复'
      }
    }
    const articleModel = new Article({ user, title, time })
    articleModel.save(articleModel, function(e, d){
      return result = {
        code: 200,
        data: d,
        message: '保存成功'
      }
    })
  })
	ctx.response.body = result
	return result
})
// 查询
router.get('/findlist', async (ctx, next) => {
  const { user='admin' } = ctx.query
  const data = await Article.find({user})
  let result = {
    code: 200,
    data,
    message: '查询成功'
  }
	ctx.response.body = result
	return result
})
// 删除
router.get('/delete', async (ctx, next) => {
  const { title} = ctx.query
  await Article.remove({title})
  let result = {
    code: 200,
    message: '删除成功'
  }
	ctx.response.body = result
	return result
})
app.use(router.routes());

app.listen(3001, () => {
  console.log('[demo] route-use-middleware is starting at port 3001')
})