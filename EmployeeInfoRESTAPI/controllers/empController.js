const express = require('express');
var router = express.Router();

var { Employee } = require('../employeeModel/employee.js');
var ObjectId=require('mongoose').Types.ObjectId ;

//URL: localhost:8888/employees/list
router.get('/list', (req, res) => {
    Employee.find((err, docs) => {

        if (!err) {
            res.status(200).send(docs);
        }
        else {
            res.send(err);
            console.log('Error in Retrieving the List...Try Again!!!!' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with the given id :${ req.params.id } `);

    Employee.findById(req.params.id,(err,doc)=>{
          if(!err)
          {
              res.send(doc);
          }
          else
          {
              console.log('Error in Retrieving the Employee Record...Try Again!!!!' + JSON.stringify(err, undefined, 2));
          }
    });
});



  //URL: localhost:8888/employees/insert

  router.post('/insert', (req, res) => {
    var employee = new Employee({
        empId: req.body.empId,
        empFirstName:req.body.empFirstName,
        empMiddleName: req.body.empMiddleName,
        empLastName: req.body.empLastName,
        companyName: req.body.companyName,
        companyCity: req.body.companyCity,
        empAddress: req.body.empAddress,
        workdept: req.body.workdept,
        phoneNumber: req.body.phoneNumber,
        designation: req.body.designation,
        gender: req.body.gender,
        dateOfBirth:req.body.dateOfBirth ,
        hiredate:req.body.hiredate ,
        salary: req.body.salary
    });     
    employee.save((err,doc)=>{
        if(!err)
        {
          res.send(doc);
        }
        else
        {
            console.log('Error in Inserting the Data..'+JSON.stringify(err,undefined,2));
        }
    });
});


router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with the given id :${ req.params.id } `);

    var employee = {
        empId: req.body.empId,
        empFirstName:req.body.empFirstName,
        empMiddleName: req.body.empMiddleName,
        empLastName: req.body.empLastName,
        companyName: req.body.companyName,
        companyCity: req.body.companyCity,
        empAddress: req.body.empAddress,
        workdept: req.body.workdept,
        phoneNumber: req.body.phoneNumber,
        designation: req.body.designation,
        gender: req.body.gender,
        dateOfBirth:req.body.dateOfBirth ,
        hiredate:req.body.hiredate ,
        salary: req.body.salary
    };  

    Employee.findByIdAndUpdate(req.params.id,{$set:employee},{new:true},(err,doc)=>{
          if(!err)
          {
              res.send(doc);
          }
          else
          {
              console.log('Error in Updating the Employee Record...Try Again!!!!' + JSON.stringify(err, undefined, 2));
          }
    });
});

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No records with the given id :${ req.params.id }`);

    

    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err)
          {
              res.send(doc);
          }
          else
          {
              console.log('Error in Deleting the Employee Record...Try Again!!!!' + JSON.stringify(err, undefined, 2));
          }
    });
});

module.exports = router;