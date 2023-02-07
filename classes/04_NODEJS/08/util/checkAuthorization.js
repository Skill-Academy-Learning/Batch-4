function checkAuthorization(err, userInfo) {
  console.log("--------", err, userInfo);
}

/*function checkAuthorization(role) {
  return function (req, res) {
    console.log("--------", role, req.url, res);
  };
  
}*/

module.exports = checkAuthorization;
