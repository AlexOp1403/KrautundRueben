const {
  BaseRouter
} = require('xc-core');

class ZUTATHmZUTATKritischeInhaltsstoffeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZUTATMiddleware = app.$middlewares.primary.ZUTATMiddleware;
    this.ZUTATHmZUTATKritischeInhaltsstoffeService = app.$services.primary.ZUTATHmZUTATKritischeInhaltsstoffeService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ZUTATHmZUTATKritischeInhaltsstoffeRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ZUTATHmZUTATKritischeInhaltsstoffeService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/ZUTAT*",this.ZUTATMiddleware.default)

    router.get('/api/v1/ZUTAT/has/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.ZUTATMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.ZUTATMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.ZUTATMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/findOne', this.ZUTATMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/groupby/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/distribution/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/distinct/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/aggregate/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/count', this.ZUTATMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk',this.ZUTATMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk',this.ZUTATMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk',this.ZUTATMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.ZUTATMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.ZUTATMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.ZUTATMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ZUTAT/:parentId/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id/exists', this.ZUTATMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ZUTATHmZUTATKritischeInhaltsstoffeRouter;