const authRoute = () => {
  const router = require('express').Router();

  router.post('/register', (req, res) => {
    res.send('register route');
  });

  return router;
};

module.exports = authRoute;
