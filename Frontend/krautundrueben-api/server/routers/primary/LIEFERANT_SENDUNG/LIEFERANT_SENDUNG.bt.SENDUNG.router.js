const {
  BaseRouter
} = require('xc-core');

class LIEFERANTSendungBtSENDUNGRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LIEFERANTSendungMiddleware = app.$middlewares.primary.LIEFERANTSendungMiddleware;
    this.LIEFERANTSendungBtSENDUNGService = app.$services.primary.LIEFERANTSendungBtSENDUNGService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.LIEFERANTSendungBtSENDUNGService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/LIEFERANT_SENDUNG*",this.LIEFERANTSendungMiddleware.default)
    router.get('/api/v1/LIEFERANT_SENDUNG/belongs/:parents', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = LIEFERANTSendungBtSENDUNGRouter;