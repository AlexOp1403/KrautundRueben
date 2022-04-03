const {
  BaseRouter
} = require('xc-core');

class BESTELLUNGHmBESTELLUNGRezeptRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BESTELLUNGMiddleware = app.$middlewares.primary.BESTELLUNGMiddleware;
    this.BESTELLUNGHmBESTELLUNGRezeptService = app.$services.primary.BESTELLUNGHmBESTELLUNGRezeptService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('BESTELLUNGHmBESTELLUNGRezeptRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.BESTELLUNGHmBESTELLUNGRezeptService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/BESTELLUNG*",this.BESTELLUNGMiddleware.default)

    router.get('/api/v1/BESTELLUNG/has/BESTELLUNG_REZEPT', this.BESTELLUNGMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT', this.BESTELLUNGMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT', this.BESTELLUNGMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/findOne', this.BESTELLUNGMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/groupby/:columnName',this.BESTELLUNGMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/distribution/:columnName',this.BESTELLUNGMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/distinct/:columnName',this.BESTELLUNGMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/aggregate/:columnName',this.BESTELLUNGMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/count', this.BESTELLUNGMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/bulk',this.BESTELLUNGMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/bulk',this.BESTELLUNGMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/bulk',this.BESTELLUNGMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/:id', this.BESTELLUNGMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/:id', this.BESTELLUNGMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/:id', this.BESTELLUNGMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/BESTELLUNG/:parentId/BESTELLUNG_REZEPT/:id/exists', this.BESTELLUNGMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = BESTELLUNGHmBESTELLUNGRezeptRouter;