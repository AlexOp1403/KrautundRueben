const {
  BaseService
} = require('xc-core');

class KATEGORIEZutatBtERNAEHRUNGSKATEGORIEService extends BaseService {

  constructor(app) {
    super(app);
    this.KATEGORIE_ZUTAT = app.$dbs.primary.KATEGORIE_ZUTAT;
  }

  async belongsTo(req, res) {
    return await this.KATEGORIE_ZUTAT.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = KATEGORIEZutatBtERNAEHRUNGSKATEGORIEService;