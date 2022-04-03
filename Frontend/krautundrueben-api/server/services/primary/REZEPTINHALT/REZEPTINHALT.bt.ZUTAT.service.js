const {
  BaseService
} = require('xc-core');

class REZEPTINHALTBtZUTATService extends BaseService {

  constructor(app) {
    super(app);
    this.REZEPTINHALT = app.$dbs.primary.REZEPTINHALT;
  }

  async belongsTo(req, res) {
    return await this.REZEPTINHALT.belongsTo({
      ...req.params,
      ...req.query
    })
  }

}

module.exports = REZEPTINHALTBtZUTATService;