const {
  BaseRouter
} = require('xc-core');

class KUNDEHmBESTELLUNGRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.KUNDEMiddleware = app.$middlewares.primary.KUNDEMiddleware;
    this.KUNDEHmBESTELLUNGService = app.$services.primary.KUNDEHmBESTELLUNGService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('KUNDEHmBESTELLUNGRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.KUNDEHmBESTELLUNGService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/KUNDE*",this.KUNDEMiddleware.default)

    router.get('/api/v1/KUNDE/has/BESTELLUNG', this.KUNDEMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/KUNDE/:parentId/BESTELLUNG', this.KUNDEMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/KUNDE/:parentId/BESTELLUNG', this.KUNDEMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/findOne', this.KUNDEMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/groupby/:columnName',this.KUNDEMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/distribution/:columnName',this.KUNDEMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/distinct/:columnName',this.KUNDEMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/aggregate/:columnName',this.KUNDEMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/count', this.KUNDEMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/KUNDE/:parentId/BESTELLUNG/bulk',this.KUNDEMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/KUNDE/:parentId/BESTELLUNG/bulk',this.KUNDEMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/KUNDE/:parentId/BESTELLUNG/bulk',this.KUNDEMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/:id', this.KUNDEMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/KUNDE/:parentId/BESTELLUNG/:id', this.KUNDEMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/KUNDE/:parentId/BESTELLUNG/:id', this.KUNDEMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/KUNDE/:parentId/BESTELLUNG/:id/exists', this.KUNDEMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = KUNDEHmBESTELLUNGRouter;