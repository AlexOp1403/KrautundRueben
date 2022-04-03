const {
  BaseRouter
} = require('xc-core');

class KATEGORIEZutatBtZUTATRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.KATEGORIEZutatMiddleware = app.$middlewares.primary.KATEGORIEZutatMiddleware;
    this.KATEGORIEZutatBtZUTATService = app.$services.primary.KATEGORIEZutatBtZUTATService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.KATEGORIEZutatBtZUTATService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/KATEGORIE_ZUTAT*",this.KATEGORIEZutatMiddleware.default)
    router.get('/api/v1/KATEGORIE_ZUTAT/belongs/:parents', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = KATEGORIEZutatBtZUTATRouter;