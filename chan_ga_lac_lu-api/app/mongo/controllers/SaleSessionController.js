const MongoModels = require("../db/models/index")

const SaleSession = MongoModels.SaleSessionModel;

const insertSaleSession = async(req, res) => {
    if (req) {
        const reqSaleSession = {
            status: req.body.status,
            orderList: req.body.orderList,
        };
        let newSaleSession = new SaleSession(reqSaleSession);
        await newSaleSession.save();
        res.send(newSaleSession);
    }
};

const getListSaleSession = async(req, res) => {
    
    const listSaleSession = await SaleSession.find().exec();
    res.send(listSaleSession);

};

const getListSaleSessionByStatus = async(req, res) =>{
    const reqStatus = req.query.status
    const listSaleSession = await SaleSession.find({status: reqStatus}).exec();
    res.send(listSaleSession);
}

const findSaleSessionById = async (req, res) => {
    const SaleSessionId = req.params.id;
    const SaleSession = await SaleSession.findOne({
      _id: SaleSessionId
    }).exec();
  
    res.send(SaleSession);
  }

const deleteSaleSessionByName = async(req, res) => {
    const listSaleSession = await SaleSession.deleteOne({ _id: req.SaleSessionId }, function (err) {
        if (err) return handleError(err);
      });
    res.send(listSaleSession);

};

const updateSaleSessionStatus = async(req, res) =>{
    const SaleSession = await SaleSession.updateOne({ _id: req.params.id }, { status: req.body.status }, function(err, res) {});
}

module.exports = {
    insertSaleSession,
    getListSaleSession,
    deleteSaleSessionByName,
    findSaleSessionById,
    updateSaleSessionStatus,
    getListSaleSessionByStatus
}
