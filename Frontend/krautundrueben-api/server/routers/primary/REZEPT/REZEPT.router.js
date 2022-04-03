const {
  BaseRouter
} = require('xc-core');

class REZEPTRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.REZEPTService = app.$services.primary.REZEPTService;
    this.REZEPTMiddleware = app.$middlewares.primary.REZEPTMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.REZEPTService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.REZEPTService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.REZEPTService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.REZEPTService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.REZEPTService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.REZEPTService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.REZEPTService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.REZEPTService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.REZEPTService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.REZEPTService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.REZEPTService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.REZEPTService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.REZEPTService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.REZEPTService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.REZEPTService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/REZEPT*",this.REZEPTMiddleware.default)

    router.get('/api/v1/REZEPT', this.REZEPTMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/REZEPT', this.REZEPTMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/REZEPT/findOne', this.REZEPTMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/REZEPT/groupby/:columnName', this.REZEPTMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/REZEPT/distribution/:columnName', this.REZEPTMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/REZEPT/distinct/:columnName', this.REZEPTMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/REZEPT/aggregate/:columnName', this.REZEPTMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/REZEPT/count', this.REZEPTMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/REZEPT/bulk', this.REZEPTMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/REZEPT/bulk', this.REZEPTMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/REZEPT/bulk', this.REZEPTMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/REZEPT/:id', this.REZEPTMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/REZEPT/:id', this.REZEPTMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/REZEPT/:id', this.REZEPTMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/REZEPT/:id/exists', this.REZEPTMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = REZEPTRouter;