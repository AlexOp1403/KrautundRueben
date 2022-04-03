const {
  BaseRouter
} = require('xc-core');

class BESTELLUNGRezeptRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BESTELLUNGRezeptService = app.$services.primary.BESTELLUNGRezeptService;
    this.BESTELLUNGRezeptMiddleware = app.$middlewares.primary.BESTELLUNGRezeptMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BESTELLUNGRezeptService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BESTELLUNGRezeptService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BESTELLUNGRezeptService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BESTELLUNGRezeptService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BESTELLUNGRezeptService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BESTELLUNGRezeptService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BESTELLUNGRezeptService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BESTELLUNGRezeptService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BESTELLUNGRezeptService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BESTELLUNGRezeptService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BESTELLUNGRezeptService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BESTELLUNGRezeptService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BESTELLUNGRezeptService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BESTELLUNGRezeptService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BESTELLUNGRezeptService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/BESTELLUNG_REZEPT*",this.BESTELLUNGRezeptMiddleware.default)

    router.get('/api/v1/BESTELLUNG_REZEPT', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/BESTELLUNG_REZEPT', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/BESTELLUNG_REZEPT/findOne', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/BESTELLUNG_REZEPT/groupby/:columnName', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/BESTELLUNG_REZEPT/distribution/:columnName', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/BESTELLUNG_REZEPT/distinct/:columnName', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/BESTELLUNG_REZEPT/aggregate/:columnName', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/BESTELLUNG_REZEPT/count', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/BESTELLUNG_REZEPT/bulk', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/BESTELLUNG_REZEPT/bulk', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/BESTELLUNG_REZEPT/bulk', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/BESTELLUNG_REZEPT/:id', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/BESTELLUNG_REZEPT/:id', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/BESTELLUNG_REZEPT/:id', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/BESTELLUNG_REZEPT/:id/exists', this.BESTELLUNGRezeptMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BESTELLUNGRezeptRouter;