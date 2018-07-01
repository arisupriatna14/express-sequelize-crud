const Model = require("../models");

class Controller {
  static dataStudent() {
    return Model.Student.findAll({
      order: [["id", "ASC"]]
    });
  }

  static addStudent(first_name, last_name, email) {
    let add = Model.Student.create({
      first_name: first_name,
      last_name: last_name,
      email: email
    });
    return add;
  }

  static findStudent(id) {
    return Model.Student.findById(id);
  }

  static updateStudent(id, first_name, last_name, email) {
    const dataUpdate = Model.Student.update(
      {
        first_name: first_name,
        last_name: last_name,
        email: email
      },
      {
        where: {
          id: id
        }
      }
    );
    return dataUpdate;
  }

  static deleteStudent(id) {
    const deleted =  Model.Student.destroy({
      where: {
        id: id
      }
    });
    return deleted
  }
}

module.exports = Controller;
