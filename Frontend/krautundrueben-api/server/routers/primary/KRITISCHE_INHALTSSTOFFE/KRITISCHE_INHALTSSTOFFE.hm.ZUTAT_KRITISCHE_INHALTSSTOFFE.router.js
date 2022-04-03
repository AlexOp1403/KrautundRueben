const {
  BaseRouter
} = require('xc-core');

class KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.KRITISCHEInhaltsstoffeMiddleware = app.$middlewares.primary.KRITISCHEInhaltsstoffeMiddleware;
    this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService = app.$services.primary.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/KRITISCHE_INHALTSSTOFFE*",this.KRITISCHEInhaltsstoffeMiddleware.default)

    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/has/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/findOne', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/groupby/:columnName',this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/distribution/:columnName',this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/distinct/:columnName',this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/aggregate/:columnName',this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/count', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk',this.KRITISCHEInhaltsstoffeMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk',this.KRITISCHEInhaltsstoffeMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk',this.KRITISCHEInhaltsstoffeMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id/exists', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeRouter;