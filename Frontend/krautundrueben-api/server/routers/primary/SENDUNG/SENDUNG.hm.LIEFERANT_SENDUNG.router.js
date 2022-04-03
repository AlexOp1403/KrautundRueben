const {
  BaseRouter
} = require('xc-core');

class SENDUNGHmLIEFERANTSendungRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SENDUNGMiddleware = app.$middlewares.primary.SENDUNGMiddleware;
    this.SENDUNGHmLIEFERANTSendungService = app.$services.primary.SENDUNGHmLIEFERANTSendungService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('SENDUNGHmLIEFERANTSendungRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.SENDUNGHmLIEFERANTSendungService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/SENDUNG*",this.SENDUNGMiddleware.default)

    router.get('/api/v1/SENDUNG/has/LIEFERANT_SENDUNG', this.SENDUNGMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG', this.SENDUNGMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG', this.SENDUNGMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/findOne', this.SENDUNGMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/groupby/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/distribution/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/distinct/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/aggregate/:columnName',this.SENDUNGMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/count', this.SENDUNGMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/bulk',this.SENDUNGMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/bulk',this.SENDUNGMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/bulk',this.SENDUNGMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/:id', this.SENDUNGMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/:id', this.SENDUNGMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/:id', this.SENDUNGMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/SENDUNG/:parentId/LIEFERANT_SENDUNG/:id/exists', this.SENDUNGMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = SENDUNGHmLIEFERANTSendungRouter;