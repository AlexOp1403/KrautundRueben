const {
  BaseRouter
} = require('xc-core');

class LIEFERANTHmLIEFERANTSendungRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LIEFERANTMiddleware = app.$middlewares.primary.LIEFERANTMiddleware;
    this.LIEFERANTHmLIEFERANTSendungService = app.$services.primary.LIEFERANTHmLIEFERANTSendungService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('LIEFERANTHmLIEFERANTSendungRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.LIEFERANTHmLIEFERANTSendungService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/LIEFERANT*",this.LIEFERANTMiddleware.default)

    router.get('/api/v1/LIEFERANT/has/LIEFERANT_SENDUNG', this.LIEFERANTMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG', this.LIEFERANTMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG', this.LIEFERANTMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/findOne', this.LIEFERANTMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/groupby/:columnName',this.LIEFERANTMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/distribution/:columnName',this.LIEFERANTMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/distinct/:columnName',this.LIEFERANTMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/aggregate/:columnName',this.LIEFERANTMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/count', this.LIEFERANTMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/bulk',this.LIEFERANTMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/bulk',this.LIEFERANTMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/bulk',this.LIEFERANTMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/:id', this.LIEFERANTMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/:id', this.LIEFERANTMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/:id', this.LIEFERANTMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/LIEFERANT/:parentId/LIEFERANT_SENDUNG/:id/exists', this.LIEFERANTMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = LIEFERANTHmLIEFERANTSendungRouter;