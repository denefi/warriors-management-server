const { Schema } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, require: true },
  description: String,
  project: { type: Schema.Types.ObjectId, ref: "Project" },
});
