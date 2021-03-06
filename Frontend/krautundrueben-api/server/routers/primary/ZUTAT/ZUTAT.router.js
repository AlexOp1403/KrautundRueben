const {
  BaseRouter
} = require('xc-core');

class ZUTATRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZUTATService = app.$services.primary.ZUTATService;
    this.ZUTATMiddleware = app.$middlewares.primary.ZUTATMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ZUTATService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ZUTATService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ZUTATService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ZUTATService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ZUTATService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ZUTATService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ZUTATService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ZUTATService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ZUTATService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ZUTATService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ZUTATService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ZUTATService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ZUTATService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ZUTATService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ZUTATService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ZUTAT*",this.ZUTATMiddleware.default)

    router.get('/api/v1/ZUTAT', this.ZUTATMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ZUTAT', this.ZUTATMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ZUTAT/findOne', this.ZUTATMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ZUTAT/groupby/:columnName', this.ZUTATMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ZUTAT/distribution/:columnName', this.ZUTATMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ZUTAT/distinct/:columnName', this.ZUTATMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ZUTAT/aggregate/:columnName', this.ZUTATMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ZUTAT/count', this.ZUTATMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ZUTAT/bulk', this.ZUTATMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ZUTAT/bulk', this.ZUTATMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ZUTAT/bulk', this.ZUTATMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ZUTAT/:id', this.ZUTATMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ZUTAT/:id', this.ZUTATMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ZUTAT/:id', this.ZUTATMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ZUTAT/:id/exists', this.ZUTATMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ZUTATRouter;