const routes            = require('express').Router()
const ControllerTeacher = require('../controller/controllerTeacher')

routes.get('/teacher', (req, res) => {
  ControllerTeacher.dataTeacher()
    .then(dataTeacher => {
      res.render('./teacher/data_teacher', {dataTeacher})
    })
    .catch(errDataTeacher => {
      console.log(errDataTeacher);
    })
})

routes.get('/teacher/add', (req, res) => {
  res.render('./teacher/add_teacher')
})

routes.post('/teacher/add', (req, res) => {
  ControllerTeacher.addTeacher(req.body.first_name, req.body.last_name, req.body.email)
    .then(() => {
      ControllerTeacher.dataTeacher()
        .then(dataTeacher => {
          res.render("./teacher/add_teacher", {dataTeacher})
        })
    })
    .catch(err => {
      console.log(err);
    })
})

routes.get('/teacher/edit/:id', (req, res) => {
  ControllerTeacher.findTeacher(req.params.id)
    .then(editTeacher => {
      res.render('./teacher/edit_teacher', {editTeacher})
    })
    .catch(err => {
      console.log(err);
    })
})

routes.post('/teacher/edit/:id', (req, res) => {
  ControllerTeacher.updateTeacher(req.params.id, req.body.first_name, req.body.last_name, req.body.email)
    .then(() => {
      ControllerTeacher.dataTeacher()
        .then(dataTeacher => {
          res.render('./teacher/data_teacher', {dataTeacher})
        })
        .catch(err => {
          console.log(err);
        })
    })
    .catch(err => {
      console.log(err);
    })
})

routes.get('/teacher/delete/:id', (req, res) => {
  ControllerTeacher.findTeacher(req.params.id)
    .then(deleteTeacher => {
      res.render('./teacher/delete_teacher', {deleteTeacher})
    })
    .catch(err => {
      console.log(err);
    })
})

routes.post('/teacher/delete/:id', (req, res) => {
  ControllerTeacher.deleteTeacher(req.params.id)
    .then(() => {
      ControllerTeacher.dataTeacher()
        .then(dataTeacher => {
          res.render('./teacher/data_teacher', {dataTeacher})
        })
        .catch(err => {
          console.log(err); 
        })
    })
})

module.exports = routes