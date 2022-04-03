const {
  BaseRouter
} = require('xc-core');

class KATEGORIEZutatRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.KATEGORIEZutatService = app.$services.primary.KATEGORIEZutatService;
    this.KATEGORIEZutatMiddleware = app.$middlewares.primary.KATEGORIEZutatMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.KATEGORIEZutatService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.KATEGORIEZutatService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.KATEGORIEZutatService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.KATEGORIEZutatService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.KATEGORIEZutatService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.KATEGORIEZutatService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.KATEGORIEZutatService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.KATEGORIEZutatService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.KATEGORIEZutatService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.KATEGORIEZutatService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.KATEGORIEZutatService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.KATEGORIEZutatService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.KATEGORIEZutatService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.KATEGORIEZutatService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.KATEGORIEZutatService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/KATEGORIE_ZUTAT*",this.KATEGORIEZutatMiddleware.default)

    router.get('/api/v1/KATEGORIE_ZUTAT', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/KATEGORIE_ZUTAT', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/KATEGORIE_ZUTAT/findOne', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/KATEGORIE_ZUTAT/groupby/:columnName', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/KATEGORIE_ZUTAT/distribution/:columnName', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/KATEGORIE_ZUTAT/distinct/:columnName', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/KATEGORIE_ZUTAT/aggregate/:columnName', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/KATEGORIE_ZUTAT/count', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/KATEGORIE_ZUTAT/bulk', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/KATEGORIE_ZUTAT/bulk', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/KATEGORIE_ZUTAT/bulk', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/KATEGORIE_ZUTAT/:id', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/KATEGORIE_ZUTAT/:id', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/KATEGORIE_ZUTAT/:id', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/KATEGORIE_ZUTAT/:id/exists', this.KATEGORIEZutatMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = KATEGORIEZutatRouter;