const {
  BaseRouter
} = require('xc-core');

class BESTELLUNGRezeptBtREZEPTRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BESTELLUNGRezeptMiddleware = app.$middlewares.primary.BESTELLUNGRezeptMiddleware;
    this.BESTELLUNGRezeptBtREZEPTService = app.$services.primary.BESTELLUNGRezeptBtREZEPTService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.BESTELLUNGRezeptBtREZEPTService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/BESTELLUNG_REZEPT*",this.BESTELLUNGRezeptMiddleware.default)
    router.get('/api/v1/BESTELLUNG_REZEPT/belongs/:parents', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = BESTELLUNGRezeptBtREZEPTRouter;