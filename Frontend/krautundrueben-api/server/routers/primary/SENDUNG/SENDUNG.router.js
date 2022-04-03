const {
  BaseRouter
} = require('xc-core');

class SENDUNGRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SENDUNGService = app.$services.primary.SENDUNGService;
    this.SENDUNGMiddleware = app.$middlewares.primary.SENDUNGMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.SENDUNGService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.SENDUNGService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.SENDUNGService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.SENDUNGService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.SENDUNGService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.SENDUNGService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.SENDUNGService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.SENDUNGService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.SENDUNGService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.SENDUNGService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.SENDUNGService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.SENDUNGService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.SENDUNGService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.SENDUNGService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.SENDUNGService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/SENDUNG*",this.SENDUNGMiddleware.default)

    router.get('/api/v1/SENDUNG', this.SENDUNGMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/SENDUNG', this.SENDUNGMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/SENDUNG/findOne', this.SENDUNGMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/SENDUNG/groupby/:columnName', this.SENDUNGMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/SENDUNG/distribution/:columnName', this.SENDUNGMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/SENDUNG/distinct/:columnName', this.SENDUNGMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/SENDUNG/aggregate/:columnName', this.SENDUNGMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/SENDUNG/count', this.SENDUNGMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/SENDUNG/bulk', this.SENDUNGMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/SENDUNG/bulk', this.SENDUNGMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/SENDUNG/bulk', this.SENDUNGMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/SENDUNG/:id', this.SENDUNGMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/SENDUNG/:id', this.SENDUNGMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/SENDUNG/:id', this.SENDUNGMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/SENDUNG/:id/exists', this.SENDUNGMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = SENDUNGRouter;