var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: '小助手'
  });
});

//登录
router.all('/login/', function(req, res, next){
  return res.render('login', {
    title:'用户登录'
  });
});

//注册
router.all('/register/', function(req, res, next){
  return res.render('register', {
    title: '用户注册'
  });
});

//反馈
router.all('/feedback/', function(req, res, next){
  return res.render('feedback', {
    title: '意见反馈'
  });
});


router.get('/guide', function(req , res, next){
  return res.render('guide',{
    title: '使用指南'
  });
});

router.all('/forget', function(req, res, next){
  return res.render('forget', {
    title: '忘记密码'
  });
});

router.get('/modules/', function(req, res, next){
  return res.render('index', {
    title: '社区模块'
  });
});

router.get('/question/', function(req, res, next){
  return res.render('index', {
    title: '常见问题'
  });
});

router.get('/example/', function(req, res, next){
  return res.render('index', {
    title: '示例代码'
  });
});


router.get('/source/', function(req, res, next){
  return res.render('index', {
    title: '参考资料'
  });
});
module.exports = router;
