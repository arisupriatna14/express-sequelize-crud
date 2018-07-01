const Model = require("../models");

class Controller {
  static dataSubject() {
    return Model.Subject.findAll({
      order: [["id", "ASC"]]
    });
  }

  static addSubject(subject_name) {
    let add = Model.Subject.create({
      subject_name: subject_name
    });
    return add;
  }

  static findSubject(id) {
    return Model.Subject.findById(id);
  }

  static updateSubject(id, subject_name) {
    const dataUpdate = Model.Subject.update(
      {
        subject_name: subject_name,
      },
      {
        where: {
          id: id
        }
      }
    );
    return dataUpdate;
  }

  static deleteSubject(id) {
    const deleted =  Model.Subject.destroy({
      where: {
        id: id
      }
    });
    return deleted
  }
}

module.exports = Controller;
