const {
  BaseRouter
} = require('xc-core');

class ZUTATHmSENDUNGZutatRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZUTATMiddleware = app.$middlewares.primary.ZUTATMiddleware;
    this.ZUTATHmSENDUNGZutatService = app.$services.primary.ZUTATHmSENDUNGZutatService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ZUTATHmSENDUNGZutatRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ZUTATHmSENDUNGZutatService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/ZUTAT*",this.ZUTATMiddleware.default)

    router.get('/api/v1/ZUTAT/has/SENDUNG_ZUTAT', this.ZUTATMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT', this.ZUTATMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT', this.ZUTATMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/findOne', this.ZUTATMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/groupby/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/distribution/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/distinct/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/aggregate/:columnName',this.ZUTATMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/count', this.ZUTATMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/bulk',this.ZUTATMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/bulk',this.ZUTATMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/bulk',this.ZUTATMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/:id', this.ZUTATMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/:id', this.ZUTATMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/:id', this.ZUTATMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ZUTAT/:parentId/SENDUNG_ZUTAT/:id/exists', this.ZUTATMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ZUTATHmSENDUNGZutatRouter;