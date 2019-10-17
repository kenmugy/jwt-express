const bcrypt = require('bcrypt');

const authRoute = User => {
  const router = require('express').Router();

  router.post('/register', async (req, res) => {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    const salt = bcrypt.genSalt(10);
    user.password = bcrypt.hash(req.body.password, salt);

    try {
      user = await user.save();
      res.json(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  return router;
};

module.exports = authRoute;
