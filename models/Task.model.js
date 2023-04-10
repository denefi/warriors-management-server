const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, require: true },
  description: String,
  project: { type: Schema.Types.ObjectId, ref: "Project" },
});

const Task = model("Task", taskSchema);

module.exports = Task;
