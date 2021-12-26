
// Employee model
let Employee = require('../models/Employee');

const getEmployees = ((req, res) => {
    Employee.find({})
        .then(result => res.status(200).json( result ))
        .catch(error => res.status(500).json({msg: error}))
})

const getEmployee = ((req, res) => {
    Employee.findOne({ _id: req.params.employeeID })
        .then(result => res.status(200).json(result))
        .catch(() => res.status(404).json({msg: 'Employee not found'}))
})

const createEmployee = ((req, res) => {
    Employee.create(req.body)
        .then(result => res.status(200).json( result ))
        .catch((error) => res.status(500).json({msg:  error }))
})

const updateEmployee = ((req, res) => {
    Employee.findOneAndUpdate({ _id: req.params.employeeID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json( result ))
        .catch((error) => res.status(404).json({msg: 'Employee not found' }))
})

const deleteEmployee = ((req, res) => {
    Employee.findOneAndDelete({ _id: req.params.employeeID })
        .then(result => res.status(200).json(result ))
        .catch((error) => res.status(404).json({msg: 'Employee not found' }))
})

module.exports = {
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}