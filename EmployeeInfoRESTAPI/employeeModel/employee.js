const entityMongoose = require('mongoose');

var Employee = entityMongoose.model('Employee', {
    empId: { type: Number },
    empFirstName: { type: String },
    empMiddleName: { type: String },
    empLastName: { type: String },
    companyName: { type: String },
    companyCity: { type: String },
    empAddress: { type: String },
    workdept: { type: String },
    phoneNumber: { type: Number },
    designation: { type: String },
    gender: { type: String },
    dateOfBirth: { type: String },
    hiredate: { type: String },
    salary: { type: Number },

},'Employee_Personal_Info');

module.exports = { Employee };