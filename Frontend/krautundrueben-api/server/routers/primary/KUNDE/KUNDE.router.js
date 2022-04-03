const {
  BaseRouter
} = require('xc-core');

class KUNDERouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.KUNDEService = app.$services.primary.KUNDEService;
    this.KUNDEMiddleware = app.$middlewares.primary.KUNDEMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.KUNDEService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.KUNDEService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.KUNDEService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.KUNDEService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.KUNDEService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.KUNDEService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.KUNDEService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.KUNDEService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.KUNDEService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.KUNDEService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.KUNDEService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.KUNDEService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.KUNDEService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.KUNDEService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.KUNDEService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/KUNDE*",this.KUNDEMiddleware.default)

    router.get('/api/v1/KUNDE', this.KUNDEMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/KUNDE', this.KUNDEMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/KUNDE/findOne', this.KUNDEMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/KUNDE/groupby/:columnName', this.KUNDEMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/KUNDE/distribution/:columnName', this.KUNDEMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/KUNDE/distinct/:columnName', this.KUNDEMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/KUNDE/aggregate/:columnName', this.KUNDEMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/KUNDE/count', this.KUNDEMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/KUNDE/bulk', this.KUNDEMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/KUNDE/bulk', this.KUNDEMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/KUNDE/bulk', this.KUNDEMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/KUNDE/:id', this.KUNDEMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/KUNDE/:id', this.KUNDEMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/KUNDE/:id', this.KUNDEMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/KUNDE/:id/exists', this.KUNDEMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = KUNDERouter;