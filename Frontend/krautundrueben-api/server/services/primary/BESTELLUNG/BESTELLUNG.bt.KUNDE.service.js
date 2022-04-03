const {
  BaseService
} = require('xc-core');

class BESTELLUNGBtKUNDEService extends BaseService {

  constructor(app) {
    super(app);
    this.BESTELLUNG = app.$dbs.primary.BESTELLUNG;
  }

  async belongsTo(req, res) {
    return await this.BESTELLUNG.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = BESTELLUNGBtKUNDEService;