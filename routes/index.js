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
router.get('/register/', function(req, res, next){
  return res.render('register', {
    title: '用户注册'
  });
});

//使用个人邮箱登录
router.all('/own', function(req, res, next){
  return res.render('own', {
    title: '邮箱注册'
  });
});

//反馈
router.all('/feedback/', function(req, res, next){
  return res.render('feedback', {
    title: '意见反馈'
  });
});


//使用说明
router.get('/guide/', function(req , res, next){
  return res.render('guide',{
    title: '使用指南'
  });
});


//重置密码
router.all('/forget', function(req, res, next){
  return res.render('forget', {
    title: '忘记密码'
  });
});


//社区模块
router.get('/modules/', function(req, res, next){
  return res.render('modules/index', {
    title: '社区模块'
  });
});


//常见问题
router.get('/question/', function(req, res, next){
  return res.render('questions/index', {
    title: '常见问题'
  });
});


//项目案例
router.get('/example/', function(req, res, next){
  return res.render('examples/index', {
    title: '项目案例'
  });
});


router.get('/source/', function(req, res, next){
  return res.render('sources/index', {
    title: '参考资料'
  });
});
module.exports = router;
