const {
  BaseRouter
} = require('xc-core');

class ZUTATKritischeInhaltsstoffeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZUTATKritischeInhaltsstoffeService = app.$services.primary.ZUTATKritischeInhaltsstoffeService;
    this.ZUTATKritischeInhaltsstoffeMiddleware = app.$middlewares.primary.ZUTATKritischeInhaltsstoffeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ZUTATKritischeInhaltsstoffeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE*",this.ZUTATKritischeInhaltsstoffeMiddleware.default)

    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/findOne', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/groupby/:columnName', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/distribution/:columnName', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/distinct/:columnName', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/aggregate/:columnName', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/count', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/bulk', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ZUTAT_KRITISCHE_INHALTSSTOFFE/:id/exists', this.ZUTATKritischeInhaltsstoffeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ZUTATKritischeInhaltsstoffeRouter;