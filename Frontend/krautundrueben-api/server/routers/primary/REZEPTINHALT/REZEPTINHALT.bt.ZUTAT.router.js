const {
  BaseRouter
} = require('xc-core');

class REZEPTINHALTBtZUTATRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.REZEPTINHALTMiddleware = app.$middlewares.primary.REZEPTINHALTMiddleware;
    this.REZEPTINHALTBtZUTATService = app.$services.primary.REZEPTINHALTBtZUTATService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.REZEPTINHALTBtZUTATService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/REZEPTINHALT*",this.REZEPTINHALTMiddleware.default)
    router.get('/api/v1/REZEPTINHALT/belongs/:parents', this.REZEPTINHALTMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = REZEPTINHALTBtZUTATRouter;