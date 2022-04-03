const {
  BaseRouter
} = require('xc-core');

class REZEPTINHALTBtREZEPTRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.REZEPTINHALTMiddleware = app.$middlewares.primary.REZEPTINHALTMiddleware;
    this.REZEPTINHALTBtREZEPTService = app.$services.primary.REZEPTINHALTBtREZEPTService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.REZEPTINHALTBtREZEPTService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/REZEPTINHALT*",this.REZEPTINHALTMiddleware.default)
    router.get('/api/v1/REZEPTINHALT/belongs/:parents', this.REZEPTINHALTMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = REZEPTINHALTBtREZEPTRouter;