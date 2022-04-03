const {
  BaseRouter
} = require('xc-core');

class ZUTATHmREZEPTINHALTRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZUTATMiddleware = app.$middlewares.primary.ZUTATMiddleware;
    this.ZUTATHmREZEPTINHALTService = app.$services.primary.ZUTATHmREZEPTINHALTService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ZUTATHmREZEPTINHALTRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ZUTATHmREZEPTINHALTService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/ZUTAT*",this.ZUTATMiddleware.default)

    router.get('/api/v1/ZUTAT/has/REZEPTINHALT', this.ZUTATMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT', this.ZUTATMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/ZUTAT/:parentId/REZEPTINHALT', this.ZUTATMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/findOne', this.ZUTATMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/groupby/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/distribution/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/distinct/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/aggregate/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/count', this.ZUTATMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/ZUTAT/:parentId/REZEPTINHALT/bulk',this.ZUTATMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/ZUTAT/:parentId/REZEPTINHALT/bulk',this.ZUTATMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/ZUTAT/:parentId/REZEPTINHALT/bulk',this.ZUTATMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/:id', this.ZUTATMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ZUTAT/:parentId/REZEPTINHALT/:id', this.ZUTATMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ZUTAT/:parentId/REZEPTINHALT/:id', this.ZUTATMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ZUTAT/:parentId/REZEPTINHALT/:id/exists', this.ZUTATMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ZUTATHmREZEPTINHALTRouter;