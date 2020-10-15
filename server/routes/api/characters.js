const router = require('express').Router();
const controller = require('../../controllers');

router.route("/")
  .post(controller.Character.create);

// Matches with "/api/users/all"
router.route("/all")
  .get(controller.Character.findAll);

router.route("/:name")
.get(controller.Character.findByName);

router.route("/update/:id")
.put(controller.Character.update)

router.route("/delete/:name")
.get(controller.Character.delete);

module.exports = router;