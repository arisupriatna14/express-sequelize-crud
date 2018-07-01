const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const port       = process.env.PORT || 4000

const routes        = require('./routes/index')
const routesTeacher = require('./routes/teacher')
const routesStudent = require('./routes/student')
const routesSubject = require('./routes/subject')

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.use(routes)
app.use(routesTeacher)
app.use(routesStudent)
app.use(routesSubject)

app.listen(port, (err) => {
  if (!err) {
    console.log(`Listening app on port http://localhost:${port}`);
  }
})