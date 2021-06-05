const router = require('express').Router()
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.json({message: 'Auth Login!'});
})

// auth login
router.get('/logout', (req, res) => {
  res.json({message: 'Auth logout!'});
})

// auth login
router.get('/google', 
  passport.authenticate('google', {
    scope: ['profile']
  })
);

// auth redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.json({message: "redirecting"})
})

module.exports = router;