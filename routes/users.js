var express = require('express');
var router = express.Router();

function fetchUserPasswordFromDB(user){
  return 'password';
}

function isAuthenticated(user, password){
  if (password == fetchUserPasswordFromDB(user)){
    return true;
  }else{
    return false;
  }
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  if (isAuthenticated(req.params.userID, requ.params.password)){
    res.send('respond with a resource');
  }
});

module.exports = router;
