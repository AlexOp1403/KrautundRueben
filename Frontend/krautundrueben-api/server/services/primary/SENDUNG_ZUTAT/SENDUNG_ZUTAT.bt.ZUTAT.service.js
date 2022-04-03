const {
  BaseService
} = require('xc-core');

class SENDUNGZutatBtZUTATService extends BaseService {

  constructor(app) {
    super(app);
    this.SENDUNG_ZUTAT = app.$dbs.primary.SENDUNG_ZUTAT;
  }

  async belongsTo(req, res) {
    return await this.SENDUNG_ZUTAT.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = SENDUNGZutatBtZUTATService;