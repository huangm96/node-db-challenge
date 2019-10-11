const express = require('express')

const projectsModel = require('./project-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
    projectsModel.findProjects().then(projects => {
      
        res.json(projects)
    }).catch(error => {
        res.status(500).json({
            message: "Failed to get projects list",error
        })
    })
})

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;

  projectsModel
    .findProjectById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/resources", (req, res) => {
  projectsModel
    .findResoureces()
    .then(resources => {
      res.json(resources);
    })
    .catch(error => {
      res.status(500).json({
        message: "Failed to get resources list",
        error
      });
    });
});

router.get("/projects/:id/tasks", (req, res) => {
  projectsModel
    .findTasksByProjectId(req.params.id)
      .then(tasks => {
          if (tasks) {
            res.json(tasks);
          } else {
              res.status(404).json({
                message: "Failed to get tasks list in this given id",
                error
              });
        }
      
    })
    .catch(error => {
      res.status(500).json({
        message: "Failed to get tasks list",
        error
      });
    });
});

router.get("/projects/:id/resources", (req, res) => {
  projectsModel
    .findResourcesByProjectId(req.params.id)
    .then(resources => {
      if (resources) {
        res.json(resources);
      } else {
        res.status(404).json({
          message: "Failed to get resources list in this given id",
          error
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Failed to get resources list",
        error
      });
    });
});



module.exports = router;