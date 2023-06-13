//@desc     get goals
//@route    GET api/goals
//@access   private
const getGoals = (req, res) => {
    console.log(req.body)
  res.status(200).json({ message: "Get Goals" });
};

//@desc     set goals
//@route    POST api/goals
//@access   private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Post Goal" });
};

//@desc     update goals
//@route    PUT api/goals/:id
//@access   private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc     delete goals
//@route    DELETE api/goals
//@access   private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal};
