const router = require('express').Router();
const controller = require('../../controllers');

// Matches with "/api/users"
router.route("/")
  .post(controller.User.create);

// Matches with "/api/users/all"
router.route("/all")
  .get(controller.User.findAll);
    
router.route("/:username")
  .get(controller.User.findByName);

module.exports = router;