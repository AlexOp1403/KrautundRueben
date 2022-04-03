const {
  BaseRouter
} = require('xc-core');

class BESTELLUNGBtKUNDERouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BESTELLUNGMiddleware = app.$middlewares.primary.BESTELLUNGMiddleware;
    this.BESTELLUNGBtKUNDEService = app.$services.primary.BESTELLUNGBtKUNDEService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.BESTELLUNGBtKUNDEService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/BESTELLUNG*",this.BESTELLUNGMiddleware.default)
    router.get('/api/v1/BESTELLUNG/belongs/:parents', this.BESTELLUNGMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = BESTELLUNGBtKUNDERouter;