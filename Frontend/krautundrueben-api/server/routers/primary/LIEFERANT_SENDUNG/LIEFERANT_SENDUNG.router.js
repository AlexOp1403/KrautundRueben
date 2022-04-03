const {
  BaseRouter
} = require('xc-core');

class LIEFERANTSendungRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.LIEFERANTSendungService = app.$services.primary.LIEFERANTSendungService;
    this.LIEFERANTSendungMiddleware = app.$middlewares.primary.LIEFERANTSendungMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.LIEFERANTSendungService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.LIEFERANTSendungService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.LIEFERANTSendungService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.LIEFERANTSendungService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.LIEFERANTSendungService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.LIEFERANTSendungService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.LIEFERANTSendungService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.LIEFERANTSendungService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.LIEFERANTSendungService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.LIEFERANTSendungService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.LIEFERANTSendungService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.LIEFERANTSendungService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.LIEFERANTSendungService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.LIEFERANTSendungService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.LIEFERANTSendungService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/LIEFERANT_SENDUNG*",this.LIEFERANTSendungMiddleware.default)

    router.get('/api/v1/LIEFERANT_SENDUNG', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/LIEFERANT_SENDUNG', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/LIEFERANT_SENDUNG/findOne', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/LIEFERANT_SENDUNG/groupby/:columnName', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/LIEFERANT_SENDUNG/distribution/:columnName', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/LIEFERANT_SENDUNG/distinct/:columnName', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/LIEFERANT_SENDUNG/aggregate/:columnName', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/LIEFERANT_SENDUNG/count', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/LIEFERANT_SENDUNG/bulk', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/LIEFERANT_SENDUNG/bulk', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/LIEFERANT_SENDUNG/bulk', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/LIEFERANT_SENDUNG/:id', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/LIEFERANT_SENDUNG/:id', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/LIEFERANT_SENDUNG/:id', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/LIEFERANT_SENDUNG/:id/exists', this.LIEFERANTSendungMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = LIEFERANTSendungRouter;