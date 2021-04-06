const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
// @route   POST api/users
// @desc    Registered User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('User route');
  }
);
module.exports = router;
