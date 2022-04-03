const {
  BaseService
} = require('xc-core');

class LIEFERANTSendungBtSENDUNGService extends BaseService {

  constructor(app) {
    super(app);
    this.LIEFERANT_SENDUNG = app.$dbs.primary.LIEFERANT_SENDUNG;
  }

  async belongsTo(req, res) {
    return await this.LIEFERANT_SENDUNG.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = LIEFERANTSendungBtSENDUNGService;