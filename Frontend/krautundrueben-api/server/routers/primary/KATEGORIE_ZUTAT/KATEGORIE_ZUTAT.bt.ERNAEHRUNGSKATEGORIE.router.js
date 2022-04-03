const {
  BaseRouter
} = require('xc-core');

class KATEGORIEZutatBtERNAEHRUNGSKATEGORIERouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.KATEGORIEZutatMiddleware = app.$middlewares.primary.KATEGORIEZutatMiddleware;
    this.KATEGORIEZutatBtERNAEHRUNGSKATEGORIEService = app.$services.primary.KATEGORIEZutatBtERNAEHRUNGSKATEGORIEService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.KATEGORIEZutatBtERNAEHRUNGSKATEGORIEService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/KATEGORIE_ZUTAT*",this.KATEGORIEZutatMiddleware.default)
    router.get('/api/v1/KATEGORIE_ZUTAT/belongs/:parents', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = KATEGORIEZutatBtERNAEHRUNGSKATEGORIERouter;