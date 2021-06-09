const express = require('express');
const router = express.Router();
const Customer = require('../models/customer.model');

router.get('/', (req,res) => {
    Customer.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', (req,res) => {
    Customer.findById(req.params.id)
        .then(customer => res.json(customer))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const balance = req.body.balance;

    const newCustomer = new Customer({
        name: name,
        email: email,
        balance: balance
    })

    newCustomer.save()
        .then(() => res.json('customer added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.put('/update/:id', (req,res) => {
    Customer.findById(req.params.id)
        .then(customer => {
            customer.name = req.body.name;
            customer.email = req.body.email;
            customer.balance = req.body.balance;

            customer.save()
                .then(() => res.json('Updated!'))
                .catch(err => res.status(400).json('Error:' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;