const {
  BaseRouter
} = require('xc-core');

class SENDUNGZutatBtZUTATRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SENDUNGZutatMiddleware = app.$middlewares.primary.SENDUNGZutatMiddleware;
    this.SENDUNGZutatBtZUTATService = app.$services.primary.SENDUNGZutatBtZUTATService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.SENDUNGZutatBtZUTATService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/SENDUNG_ZUTAT*",this.SENDUNGZutatMiddleware.default)
    router.get('/api/v1/SENDUNG_ZUTAT/belongs/:parents', this.SENDUNGZutatMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = SENDUNGZutatBtZUTATRouter;