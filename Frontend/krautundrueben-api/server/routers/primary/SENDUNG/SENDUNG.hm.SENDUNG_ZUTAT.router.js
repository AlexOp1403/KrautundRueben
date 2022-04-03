const {
  BaseRouter
} = require('xc-core');

class SENDUNGHmSENDUNGZutatRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SENDUNGMiddleware = app.$middlewares.primary.SENDUNGMiddleware;
    this.SENDUNGHmSENDUNGZutatService = app.$services.primary.SENDUNGHmSENDUNGZutatService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('SENDUNGHmSENDUNGZutatRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.SENDUNGHmSENDUNGZutatService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/SENDUNG*",this.SENDUNGMiddleware.default)

    router.get('/api/v1/SENDUNG/has/SENDUNG_ZUTAT', this.SENDUNGMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT', this.SENDUNGMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT', this.SENDUNGMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/findOne', this.SENDUNGMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/groupby/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/distribution/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/distinct/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/aggregate/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/count', this.SENDUNGMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/bulk',this.SENDUNGMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/bulk',this.SENDUNGMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/bulk',this.SENDUNGMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/:id', this.SENDUNGMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/:id', this.SENDUNGMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/:id', this.SENDUNGMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/SENDUNG/:parentId/SENDUNG_ZUTAT/:id/exists', this.SENDUNGMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = SENDUNGHmSENDUNGZutatRouter;