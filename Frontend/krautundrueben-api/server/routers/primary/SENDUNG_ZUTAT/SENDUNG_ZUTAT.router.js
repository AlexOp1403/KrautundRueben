const {
  BaseRouter
} = require('xc-core');

class SENDUNGZutatRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SENDUNGZutatService = app.$services.primary.SENDUNGZutatService;
    this.SENDUNGZutatMiddleware = app.$middlewares.primary.SENDUNGZutatMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.SENDUNGZutatService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.SENDUNGZutatService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.SENDUNGZutatService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.SENDUNGZutatService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.SENDUNGZutatService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.SENDUNGZutatService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.SENDUNGZutatService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.SENDUNGZutatService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.SENDUNGZutatService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.SENDUNGZutatService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.SENDUNGZutatService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.SENDUNGZutatService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.SENDUNGZutatService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.SENDUNGZutatService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.SENDUNGZutatService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/SENDUNG_ZUTAT*",this.SENDUNGZutatMiddleware.default)

    router.get('/api/v1/SENDUNG_ZUTAT', this.SENDUNGZutatMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/SENDUNG_ZUTAT', this.SENDUNGZutatMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/SENDUNG_ZUTAT/findOne', this.SENDUNGZutatMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/SENDUNG_ZUTAT/groupby/:columnName', this.SENDUNGZutatMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/SENDUNG_ZUTAT/distribution/:columnName', this.SENDUNGZutatMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/SENDUNG_ZUTAT/distinct/:columnName', this.SENDUNGZutatMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/SENDUNG_ZUTAT/aggregate/:columnName', this.SENDUNGZutatMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/SENDUNG_ZUTAT/count', this.SENDUNGZutatMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/SENDUNG_ZUTAT/bulk', this.SENDUNGZutatMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/SENDUNG_ZUTAT/bulk', this.SENDUNGZutatMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/SENDUNG_ZUTAT/bulk', this.SENDUNGZutatMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/SENDUNG_ZUTAT/:id', this.SENDUNGZutatMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/SENDUNG_ZUTAT/:id', this.SENDUNGZutatMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/SENDUNG_ZUTAT/:id', this.SENDUNGZutatMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/SENDUNG_ZUTAT/:id/exists', this.SENDUNGZutatMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = SENDUNGZutatRouter;