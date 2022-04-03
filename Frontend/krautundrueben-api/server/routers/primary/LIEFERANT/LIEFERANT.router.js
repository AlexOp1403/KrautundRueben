const {
  BaseRouter
} = require('xc-core');

class LIEFERANTRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LIEFERANTService = app.$services.primary.LIEFERANTService;
    this.LIEFERANTMiddleware = app.$middlewares.primary.LIEFERANTMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LIEFERANTService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LIEFERANTService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LIEFERANTService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LIEFERANTService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LIEFERANTService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LIEFERANTService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LIEFERANTService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LIEFERANTService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LIEFERANTService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LIEFERANTService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LIEFERANTService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LIEFERANTService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LIEFERANTService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LIEFERANTService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LIEFERANTService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/LIEFERANT*",this.LIEFERANTMiddleware.default)

    router.get('/api/v1/LIEFERANT', this.LIEFERANTMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/LIEFERANT', this.LIEFERANTMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/LIEFERANT/findOne', this.LIEFERANTMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/LIEFERANT/groupby/:columnName', this.LIEFERANTMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/LIEFERANT/distribution/:columnName', this.LIEFERANTMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/LIEFERANT/distinct/:columnName', this.LIEFERANTMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/LIEFERANT/aggregate/:columnName', this.LIEFERANTMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/LIEFERANT/count', this.LIEFERANTMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/LIEFERANT/bulk', this.LIEFERANTMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/LIEFERANT/bulk', this.LIEFERANTMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/LIEFERANT/bulk', this.LIEFERANTMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/LIEFERANT/:id', this.LIEFERANTMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/LIEFERANT/:id', this.LIEFERANTMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/LIEFERANT/:id', this.LIEFERANTMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/LIEFERANT/:id/exists', this.LIEFERANTMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LIEFERANTRouter;