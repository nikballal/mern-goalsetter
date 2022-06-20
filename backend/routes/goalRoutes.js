const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

//to protect the logguser's goals
const { protect } = require("../middleware/authMiddleware");

//replace the below routes with these
router.route("/").get(protect, getGoals).post(protect, setGoal); //protect all the goal routes
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

module.exports = router;
