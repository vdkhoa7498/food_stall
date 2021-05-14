const MongoModels = require("../db/models/index")

const Order = MongoModels.OrderModel;

const insertOrder = async(req, res) => {
    if (req) {
        const reqOrder = {
            customerId: req.body.customerId,
            customerInfo: req.body.customerInfo,
            note: req.body.note,
            shipper: req.body.shipper,
            status: req.body.status,
            purchase: req.body.purchase,
            total: req.body.total
        };
        let newOrder = new Order(reqOrder);
        await newOrder.save();
        res.send(newOrder);
    }
};

const getListOrder = async(req, res) => {
    
    const listOrder = await Order.find().exec();
    res.send(listOrder);

};

const getListOrderByStatus = async(req, res) =>{
    const reqStatus = req.query.status
    console.log('status: ',reqStatus)
    const listOrder = await Order.find({status: reqStatus}).exec();
    res.send(listOrder);
}

const findOrderById = async (req, res) => {
    const orderId = req.params.id;
    const order = await Order.findOne({
      _id: orderId
    }).exec();
  
    res.send(order);
  }

const deleteOrderByName = async(req, res) => {
    const listOrder = await Order.deleteOne({ _id: req.orderId }, function (err) {
        if (err) return handleError(err);
      });
    res.send(listOrder);

};

const updateOrderStatus = async(req, res) =>{
    const order = await Order.updateOne({ _id: req.params.id }, { status: req.body.status }, function(err, res) {});
}

module.exports = {
    insertOrder,
    getListOrder,
    deleteOrderByName,
    findOrderById,
    updateOrderStatus,
    getListOrderByStatus
}
