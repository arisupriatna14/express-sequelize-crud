const Model = require("../models");

class Controller {
  static dataTeacher() {
    return Model.Teacher.findAll({
      order: [["id", "ASC"]]
    });
  }

  static addTeacher(first_name, last_name, email) {
    let add = Model.Teacher.create({
      first_name: first_name,
      last_name: last_name,
      email: email
    });
    return add;
  }

  static findTeacher(id) {
    return Model.Teacher.findById(id);
  }

  static updateTeacher(id, first_name, last_name, email) {
    const dataUpdate = Model.Teacher.update(
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

  static deleteTeacher(id) {
    const deleted =  Model.Teacher.destroy({
      where: {
        id: id
      }
    });
    return deleted
  }
}

module.exports = Controller;
