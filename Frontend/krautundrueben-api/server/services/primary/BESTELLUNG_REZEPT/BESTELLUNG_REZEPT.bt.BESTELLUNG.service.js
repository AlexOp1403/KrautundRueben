const {
  BaseService
} = require('xc-core');

class BESTELLUNGRezeptBtBESTELLUNGService extends BaseService {

  constructor(app) {
    super(app);
    this.BESTELLUNG_REZEPT = app.$dbs.primary.BESTELLUNG_REZEPT;
  }

  async belongsTo(req, res) {
    return await this.BESTELLUNG_REZEPT.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = BESTELLUNGRezeptBtBESTELLUNGService;