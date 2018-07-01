const routes     = require('express').Router();
const Controller = require('../controller/controllerStudent')

routes.get('/student', (req, res) => {
  Controller.dataStudent()
    .then(dataStudent => {
      res.render('./student/data_student', {dataStudent})
    })
    .catch(err => {
      console.log(err);
    })
})

routes.get('/student/add', (req, res) => {
  res.render('./student/add_student')
})
routes.post('/student/add', (req, res) => {
  Controller.addStudent(req.body.first_name, req.body.last_name, req.body.email)
    .then(() => {
      Controller.dataStudent()
        .then(dataStudent => {
          res.render("./student/add_student", {dataStudent})
        })
    })
    .catch(err => {
      console.log(err);
    })
})

routes.get('/student/edit/:id', (req, res) => {
  Controller.findStudent(req.params.id)
    .then(editStudent => {
      res.render('./student/edit_student', {editStudent})
    })
    .catch(err => {
      console.log(err);
    })
})

routes.post('/student/edit/:id', (req, res) => {
  Controller.updateStudent(req.params.id, req.body.first_name, req.body.last_name, req.body.email)
    .then(() => {
      Controller.dataStudent()
        .then(dataStudent => {
          res.render('./student/data_student', {dataStudent})
        })
        .catch(err => {
          console.log(err);
        })
    })
    .catch(err => {
      console.log(err);
    })
})

routes.get('/student/delete/:id', (req, res) => {
  Controller.findStudent(req.params.id)
    .then(deleteStudent => {
      res.render('./student/delete_student', {deleteStudent})
    })
    .catch(err => {
      console.log(err);
    })
})

routes.post('/student/delete/:id', (req, res) => {
  Controller.deleteStudent(req.params.id)
    .then(() => {
      Controller.dataStudent()
        .then(dataStudent => {
          res.render('./student/data_student', {dataStudent})
        })
        .catch(err => {
          console.log(err);
        })
    })
    .catch(err => {
      console.log(err);
    })
})

module.exports = routes