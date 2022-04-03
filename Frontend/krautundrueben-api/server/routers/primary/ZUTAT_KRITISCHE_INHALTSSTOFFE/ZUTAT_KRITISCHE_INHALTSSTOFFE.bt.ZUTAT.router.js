const {
  BaseRouter
} = require('xc-core');

class ZUTATKritischeInhaltsstoffeBtZUTATRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZUTATKritischeInhaltsstoffeMiddleware = app.$middlewares.primary.ZUTATKritischeInhaltsstoffeMiddleware;
    this.ZUTATKritischeInhaltsstoffeBtZUTATService = app.$services.primary.ZUTATKritischeInhaltsstoffeBtZUTATService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeBtZUTATService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE*",this.ZUTATKritischeInhaltsstoffeMiddleware.default)
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/belongs/:parents', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = ZUTATKritischeInhaltsstoffeBtZUTATRouter;