const MongoModels = require("../db/models/index")
const ObjectId = require('mongodb').ObjectID;
const Customer = MongoModels.CustomerModel;

const insertCustomer = async(req, res) => {
    if (req) {
        const reqCustomer = {
            customerName: req.body.customerName,
            customerPhone: req.body.customerPhone,
            facebookId: req.body.facebookId,
            customerAddress: req.body.customerAddress,
        };
        let newCustomer = new Customer(reqCustomer);
        await newCustomer.save();
        res.send(newCustomer);
    }
};

const getListCustomer = async(req, res) => {
    const listCustomer = await Customer.find().exec();
    res.send(listCustomer);

};

const findCustomerById = async (req, res) => {
    const customerId = req.params.id;
    const customer = await Customer.findOne({
      _id: customerId
    }).exec();
  
    res.send(customer);
  }

const deleteCustomerById = async(req, res) => {
    const listCustomer = await Customer.deleteOne({ _id: req.params.id }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
    res.send(listCustomer);

};

module.exports = {
    insertCustomer,
    getListCustomer,
    findCustomerById,
    deleteCustomerById
}
