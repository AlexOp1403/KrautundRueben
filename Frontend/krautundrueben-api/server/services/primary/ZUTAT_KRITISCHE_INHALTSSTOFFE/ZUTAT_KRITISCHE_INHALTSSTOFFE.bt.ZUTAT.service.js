const {
  BaseService
} = require('xc-core');

class ZUTATKritischeInhaltsstoffeBtZUTATService extends BaseService {

  constructor(app) {
    super(app);
    this.ZUTAT_KRITISCHE_INHALTSSTOFFE = app.$dbs.primary.ZUTAT_KRITISCHE_INHALTSSTOFFE;
  }

  async belongsTo(req, res) {
    return await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = ZUTATKritischeInhaltsstoffeBtZUTATService;