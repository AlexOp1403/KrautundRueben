const {
  BaseRouter
} = require('xc-core');

class BESTELLUNGRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BESTELLUNGService = app.$services.primary.BESTELLUNGService;
    this.BESTELLUNGMiddleware = app.$middlewares.primary.BESTELLUNGMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BESTELLUNGService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BESTELLUNGService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BESTELLUNGService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BESTELLUNGService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BESTELLUNGService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BESTELLUNGService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BESTELLUNGService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BESTELLUNGService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BESTELLUNGService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BESTELLUNGService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BESTELLUNGService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BESTELLUNGService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BESTELLUNGService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BESTELLUNGService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BESTELLUNGService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/BESTELLUNG*",this.BESTELLUNGMiddleware.default)

    router.get('/api/v1/BESTELLUNG', this.BESTELLUNGMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/BESTELLUNG', this.BESTELLUNGMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/BESTELLUNG/findOne', this.BESTELLUNGMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/BESTELLUNG/groupby/:columnName', this.BESTELLUNGMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/BESTELLUNG/distribution/:columnName', this.BESTELLUNGMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/BESTELLUNG/distinct/:columnName', this.BESTELLUNGMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/BESTELLUNG/aggregate/:columnName', this.BESTELLUNGMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/BESTELLUNG/count', this.BESTELLUNGMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/BESTELLUNG/bulk', this.BESTELLUNGMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/BESTELLUNG/bulk', this.BESTELLUNGMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/BESTELLUNG/bulk', this.BESTELLUNGMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/BESTELLUNG/:id', this.BESTELLUNGMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/BESTELLUNG/:id', this.BESTELLUNGMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/BESTELLUNG/:id', this.BESTELLUNGMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/BESTELLUNG/:id/exists', this.BESTELLUNGMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BESTELLUNGRouter;