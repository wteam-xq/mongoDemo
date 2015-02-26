var User = require('../models/User');
var webCtrol = {
}

webCtrol.index = function(req, res){
  User.fetch(function(err, users){
    if (err){
      console.log('查询异常');
    }else{
      res.render('index', { 
        title: 'Express' ,
        users: users
      });
    }
  });
}

module.exports = webCtrol