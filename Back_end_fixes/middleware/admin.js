module.exports = function (req, res, next) {
  //  req.user is set after the auth middleware
  //  this middleware is executed after the auth middleware so we can use the req.user
  if (!req.user.isAdmin) return res.status(403).send("Accedss Denied");
  //  ****** -> something missing
};
 