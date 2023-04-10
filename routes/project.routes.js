// routes/project.routes.js

const router = require("express").Router();

// const mongoose = require("mongoose");

const Project = require("../models/Project.model");
const Task = require("../models/Task.model");

//  POST /api/projects  -  Creates a new project
router.post("/projects", (req, res, next) => {
  const { title, description } = req.body;

  Project.create({ title, description, tasks: [] })
    .then((response) => res.status(201).json(response))
    .catch((err) =>
      res.status(500).json({ message: "Error createing Project", error: err })
    );
});

module.exports = router;
