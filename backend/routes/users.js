var express = require('express');
var router = express.Router();

router.post('/signup', async (req, res) => {
  res.json({ success: true });
});

module.exports = router;
