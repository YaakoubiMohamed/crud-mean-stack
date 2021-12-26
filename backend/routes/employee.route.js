const express = require('express')
const router = express.Router()

const  { 
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee 
} = require('../controllers/employee.controller')

router.get('/', getEmployees)

router.get('/:employeeID', getEmployee)

router.post('/', createEmployee) 

router.put('/:employeeID', updateEmployee) 

router.delete('/:employeeID', deleteEmployee)

module.exports = router