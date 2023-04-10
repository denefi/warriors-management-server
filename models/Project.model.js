const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

const Project = model("Project", ProjectSchema);
