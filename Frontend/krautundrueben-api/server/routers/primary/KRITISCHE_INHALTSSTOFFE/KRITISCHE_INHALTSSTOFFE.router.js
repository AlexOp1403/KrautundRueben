const {
  BaseRouter
} = require('xc-core');

class KRITISCHEInhaltsstoffeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.KRITISCHEInhaltsstoffeService = app.$services.primary.KRITISCHEInhaltsstoffeService;
    this.KRITISCHEInhaltsstoffeMiddleware = app.$middlewares.primary.KRITISCHEInhaltsstoffeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.KRITISCHEInhaltsstoffeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/KRITISCHE_INHALTSSTOFFE*",this.KRITISCHEInhaltsstoffeMiddleware.default)

    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/KRITISCHE_INHALTSSTOFFE', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/findOne', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/groupby/:columnName', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/distribution/:columnName', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/distinct/:columnName', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/aggregate/:columnName', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/count', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/KRITISCHE_INHALTSSTOFFE/bulk', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/KRITISCHE_INHALTSSTOFFE/bulk', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/KRITISCHE_INHALTSSTOFFE/bulk', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:id', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/KRITISCHE_INHALTSSTOFFE/:id', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/KRITISCHE_INHALTSSTOFFE/:id', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/KRITISCHE_INHALTSSTOFFE/:id/exists', this.KRITISCHEInhaltsstoffeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = KRITISCHEInhaltsstoffeRouter;