const {
  BaseRouter
} = require('xc-core');

class ERNAEHRUNGSKATEGORIERouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ERNAEHRUNGSKATEGORIEService = app.$services.primary.ERNAEHRUNGSKATEGORIEService;
    this.ERNAEHRUNGSKATEGORIEMiddleware = app.$middlewares.primary.ERNAEHRUNGSKATEGORIEMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ERNAEHRUNGSKATEGORIE*",this.ERNAEHRUNGSKATEGORIEMiddleware.default)

    router.get('/api/v1/ERNAEHRUNGSKATEGORIE', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ERNAEHRUNGSKATEGORIE', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/findOne', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/groupby/:columnName', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/distribution/:columnName', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/distinct/:columnName', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/aggregate/:columnName', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/count', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ERNAEHRUNGSKATEGORIE/bulk', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ERNAEHRUNGSKATEGORIE/bulk', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ERNAEHRUNGSKATEGORIE/bulk', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:id', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ERNAEHRUNGSKATEGORIE/:id', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ERNAEHRUNGSKATEGORIE/:id', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:id/exists', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ERNAEHRUNGSKATEGORIERouter;