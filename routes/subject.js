const routes            = require('express').Router()
const ControllerSubject = require('../controller/controllerSubject')

routes.get('/subject', (req, res) => {
  ControllerSubject.dataSubject()
    .then(dataSubject => {
      res.render('./subject/data_subject', {dataSubject})
    })
    .catch(err => {
      console.log(err);
    })
})

routes.get('/subject/add', (req, res) => {
  res.render('./subject/add_subject')
})

routes.post('/subject/add', (req, res) => {
  ControllerSubject.addSubject(req.body.subject_name)
    .then(() => {
      res.render('./subject/add_subject')
    })
    .catch(err => console.log(err))
})

routes.get('/subject/edit/:id', (req, res) => {
  ControllerSubject.findSubject(req.params.id)
    .then(editSubject => {
      res.render('./subject/edit_subject', {editSubject})
    })
    .catch(err => console.log(err))
})

routes.post('/subject/edit/:id', (req, res) => {
  ControllerSubject.updateSubject(req.params.id, req.body.subject_name)
    .then(() => {
      ControllerSubject.dataSubject()
        .then(dataSubject => {
          res.render('./subject/data_subject', {dataSubject})
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

routes.get('/subject/delete/:id', (req, res) => {
  ControllerSubject.findSubject(req.params.id) 
    .then(deleteSubject => {
      res.render('./subject/delete_subject', {deleteSubject})
    })
    .catch(err => console.log(err))
})

routes.post('/subject/delete/:id', (req, res) => {
  ControllerSubject.deleteSubject(req.params.id)
    .then(() => {
      ControllerSubject.dataSubject()
        .then(dataSubject => {
          res.render('./subject/data_subject', {dataSubject})
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})

module.exports = routes

module.exports = routes