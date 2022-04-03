const {
  BaseRouter
} = require('xc-core');

class REZEPTHmREZEPTINHALTRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.REZEPTMiddleware = app.$middlewares.primary.REZEPTMiddleware;
    this.REZEPTHmREZEPTINHALTService = app.$services.primary.REZEPTHmREZEPTINHALTService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('REZEPTHmREZEPTINHALTRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.REZEPTHmREZEPTINHALTService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/REZEPT*",this.REZEPTMiddleware.default)

    router.get('/api/v1/REZEPT/has/REZEPTINHALT', this.REZEPTMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT', this.REZEPTMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/REZEPT/:parentId/REZEPTINHALT', this.REZEPTMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/findOne', this.REZEPTMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/groupby/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/distribution/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/distinct/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/aggregate/:columnName',this.REZEPTMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/count', this.REZEPTMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/REZEPT/:parentId/REZEPTINHALT/bulk',this.REZEPTMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/REZEPT/:parentId/REZEPTINHALT/bulk',this.REZEPTMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/REZEPT/:parentId/REZEPTINHALT/bulk',this.REZEPTMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/:id', this.REZEPTMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/REZEPT/:parentId/REZEPTINHALT/:id', this.REZEPTMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/REZEPT/:parentId/REZEPTINHALT/:id', this.REZEPTMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/REZEPT/:parentId/REZEPTINHALT/:id/exists', this.REZEPTMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = REZEPTHmREZEPTINHALTRouter;