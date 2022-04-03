const {
  BaseRouter
} = require('xc-core');

class REZEPTHmBESTELLUNGRezeptRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.REZEPTMiddleware = app.$middlewares.primary.REZEPTMiddleware;
    this.REZEPTHmBESTELLUNGRezeptService = app.$services.primary.REZEPTHmBESTELLUNGRezeptService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('REZEPTHmBESTELLUNGRezeptRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.REZEPTHmBESTELLUNGRezeptService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/REZEPT*",this.REZEPTMiddleware.default)

    router.get('/api/v1/REZEPT/has/BESTELLUNG_REZEPT', this.REZEPTMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT', this.REZEPTMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT', this.REZEPTMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/findOne', this.REZEPTMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/groupby/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/distribution/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/distinct/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/aggregate/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/count', this.REZEPTMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/bulk',this.REZEPTMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/bulk',this.REZEPTMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/bulk',this.REZEPTMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/:id', this.REZEPTMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/:id', this.REZEPTMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/:id', this.REZEPTMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/REZEPT/:parentId/BESTELLUNG_REZEPT/:id/exists', this.REZEPTMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = REZEPTHmBESTELLUNGRezeptRouter;