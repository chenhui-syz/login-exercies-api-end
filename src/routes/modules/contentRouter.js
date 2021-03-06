import Router from 'koa-router'
import contentController from '@/api/ContentController'

const router = new Router()

router.prefix('/content')
// 上传图片
router.post('/upload', contentController.uploadImg)

// 获取文章列表
router.get('/list', contentController.getPostList)

// 发表新帖
router.post('/add', contentController.addPost)


export default router