const members = require('../../Members');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json(members));
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `no members with id of ${req.params.id}`});
  }
});
//create a member


router.post('/', (req, res) => {
  res.send(req.body);
})

module.exports = router;
