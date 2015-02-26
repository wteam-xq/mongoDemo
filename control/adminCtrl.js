var adminCtrol = {
}
var User = require('../models/User');

adminCtrol.userList = function(req, res) {
  User.fetch(function(err, users){
    if (err){
      console.log('查询异常');
    }else{
      res.render('admin/user_list', { 
        title: 'admin' ,
        users: users
      });
    }
  });
}
// 后台接口原数据显示
adminCtrol.testList = function(req, res) {
  User.fetch(function(err, users){
    if (err){
      console.log('查询异常');
    }else{
      res.send(users);
    }
  });
}


adminCtrol.addUser = function(req, res) {
  res.render('admin/user_add', { title: 'admin' });
}
// 提交新增用户请求
adminCtrol.addUserPost = function(req, res, next) {
  var userObj = {};
  userObj = {
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    hobby: req.body.hobby
  };
  User.createInfo(userObj, function(err, user){
    if (err){
      console.log('新增用户信息错误');
    }else{
      if (user && user.name){
        res.redirect('/admin/');
      }
    }
  });
}
// 修改用户信息
adminCtrol.updateUser = function(req, res) {
  var id = req.query.id;
  User.findById(id, function(err, user){
    if (err){
      console.log('根据Id查找用户信息，出错');
    }else{
      res.render('admin/user_update', {
        title: 'admin',
        user: user
      });
    }
  });
}
adminCtrol.updateUserPost = function(req, res) {
  var id = req.body.id;
  var user = {
    name: req.body.name,
    age: req.body.age,
    job: req.body.job,
    hobby: req.body.hobby
  };
  User.updateInfo(id, user, function(err, updateCount){
    if (err){
      console.log('更新用户信息，出错');
    }else{
      res.redirect('/admin/');
    }
  });
}
// 删除用户
adminCtrol.deleteUser = function(req, res) {
  var id = req.query.id;
  User.deleteInfo(id, function(err, updateCount){
    if (err){
      console.log('删除用户信息,出错');
    }else{
      res.redirect('/admin/');
    }
  });
}

module.exports = adminCtrol