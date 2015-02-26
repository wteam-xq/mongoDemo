var express = require('express');
var router = express.Router();
var adminControl = require('../control/adminCtrl');

/* GET users listing. */
router.get('/', adminControl.userList);
router.get('/test', adminControl.testList);

/*users add. */
router.route('/user/add')
.get(adminControl.addUser)
.post(adminControl.addUserPost);

/*users update. */
router.route('/user/update')
.get(adminControl.updateUser)
.post(adminControl.updateUserPost);

/*users delete */
router.get('/user/delete', adminControl.deleteUser);

module.exports = router;
