const socketIo = require("socket.io");
const { SOCKET_ACTION } = require("../utils/enums")
const MongoModels = require("../app/mongo/db/models/index")

const Order = MongoModels.OrderModel;
let currentOrderList = []

const SaleSession = MongoModels.SaleSessionModel
let SaleSessionList = []

const getNonConfirmOrderList = async() =>{
  const listOrder = await Order.find({status: "Chưa duyệt"}).exec();
  currentOrderList = currentOrderList.concat(listOrder)
}

const getConfirmedOrderList = async() =>{
  const listOrder = await Order.find({status: "Đã duyệt"}).exec();
  currentOrderList = currentOrderList.concat(listOrder)
}

const getCancelledOrderList = async() =>{
  const listOrder = await Order.find({status: "Đã huỷ"}).exec();
  currentOrderList = currentOrderList.concat(listOrder)
}


const changeOrderStatus = async(orderId, status) => {
  const order = await Order.findOne({ _id: orderId});
  order.status = status;
  await order.save();
  return (order)
};

const insertOrder = async(data) => {
  let newOrder = new Order(data);
  await newOrder.save();
  return (newOrder)
};

getNonConfirmOrderList()
getConfirmedOrderList()
getCancelledOrderList()

console.log(currentOrderList)

const SocketServer = (server) => {
  const io = socketIo(server, {
      cors: {
        origin: '*',
      }
    });

  io.on('connection', (socket) => {

    io.sockets.emit('orderList-server', currentOrderList)

    socket.on('init-data', () =>{
      io.sockets.emit('receive-current-orders',currentOrderList)
    })
  
    socket.on('send-new-order', async(data) => {
      let newData = await insertOrder(data)
      currentOrderList = [...currentOrderList, newData] 
      io.sockets.emit('receive-current-orders',currentOrderList)
    })

    socket.on('change-order-status', async(data) => {
      let order = await changeOrderStatus(data.orderId, data.status)
      const findOrderIndex = currentOrderList.findIndex(order => order._id == data.orderId);
      currentOrderList = currentOrderList.slice(0,findOrderIndex).concat( order, currentOrderList.slice(findOrderIndex+1)) 
      io.sockets.emit('receive-current-orders',currentOrderList)
    })

  })

    
}
module.exports = SocketServer;
