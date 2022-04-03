const {
  BaseRouter
} = require('xc-core');

class REZEPTINHALTRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.REZEPTINHALTService = app.$services.primary.REZEPTINHALTService;
    this.REZEPTINHALTMiddleware = app.$middlewares.primary.REZEPTINHALTMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.REZEPTINHALTService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.REZEPTINHALTService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.REZEPTINHALTService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.REZEPTINHALTService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.REZEPTINHALTService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.REZEPTINHALTService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.REZEPTINHALTService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.REZEPTINHALTService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.REZEPTINHALTService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.REZEPTINHALTService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.REZEPTINHALTService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.REZEPTINHALTService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.REZEPTINHALTService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.REZEPTINHALTService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.REZEPTINHALTService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/REZEPTINHALT*",this.REZEPTINHALTMiddleware.default)

    router.get('/api/v1/REZEPTINHALT', this.REZEPTINHALTMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/REZEPTINHALT', this.REZEPTINHALTMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/REZEPTINHALT/findOne', this.REZEPTINHALTMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/REZEPTINHALT/groupby/:columnName', this.REZEPTINHALTMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/REZEPTINHALT/distribution/:columnName', this.REZEPTINHALTMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/REZEPTINHALT/distinct/:columnName', this.REZEPTINHALTMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/REZEPTINHALT/aggregate/:columnName', this.REZEPTINHALTMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/REZEPTINHALT/count', this.REZEPTINHALTMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/REZEPTINHALT/bulk', this.REZEPTINHALTMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/REZEPTINHALT/bulk', this.REZEPTINHALTMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/REZEPTINHALT/bulk', this.REZEPTINHALTMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/REZEPTINHALT/:id', this.REZEPTINHALTMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/REZEPTINHALT/:id', this.REZEPTINHALTMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/REZEPTINHALT/:id', this.REZEPTINHALTMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/REZEPTINHALT/:id/exists', this.REZEPTINHALTMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = REZEPTINHALTRouter;