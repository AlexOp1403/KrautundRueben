const {
  BaseRouter
} = require('xc-core');

class ZUTATKritischeInhaltsstoffeBtKRITISCHEInhaltsstoffeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZUTATKritischeInhaltsstoffeMiddleware = app.$middlewares.primary.ZUTATKritischeInhaltsstoffeMiddleware;
    this.ZUTATKritischeInhaltsstoffeBtKRITISCHEInhaltsstoffeService = app.$services.primary.ZUTATKritischeInhaltsstoffeBtKRITISCHEInhaltsstoffeService;
    this._mapRoutes(app.$router);
  }


  async belongs(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeBtKRITISCHEInhaltsstoffeService.belongsTo(req, res);
    res.json(data);
  }

  _mapRoutes(router) {
    // router.all("/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE*",this.ZUTATKritischeInhaltsstoffeMiddleware.default)
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/belongs/:parents', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.belongs));
  }

}

module.exports = ZUTATKritischeInhaltsstoffeBtKRITISCHEInhaltsstoffeRouter;