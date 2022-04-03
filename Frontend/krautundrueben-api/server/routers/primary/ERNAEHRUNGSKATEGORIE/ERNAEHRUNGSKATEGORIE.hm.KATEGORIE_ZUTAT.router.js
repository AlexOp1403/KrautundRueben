const {
  BaseRouter
} = require('xc-core');

class ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ERNAEHRUNGSKATEGORIEMiddleware = app.$middlewares.primary.ERNAEHRUNGSKATEGORIEMiddleware;
    this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService = app.$services.primary.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService;
    this._mapRoutes(app.$router);
  }

  get router() {
    return this._router;
  }

  middleware(req, res, next) {
    console.log('ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatRouter Middleware');
    next();
  }

  async create(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.create(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.read(req, res);
    res.json(data);
  }


  async update(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.delete(req, res);
    res.json(data);
  }


  async findOne(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.findOne(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.exists(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.count(req, res);
    res.json(data);
  }

  async list(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.list(req, res);
    res.json(data);
  }

  async hasManyList(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService.hasManyList(req, res);
    res.json(data);
  }

  _mapRoutes(router) {

    // router.all("/api/v1/ERNAEHRUNGSKATEGORIE*",this.ERNAEHRUNGSKATEGORIEMiddleware.default)

    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/has/KATEGORIE_ZUTAT', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.hasManyList));
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.list));

    router.post('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/findOne', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.findOne))
    //router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/groupby/:columnName',this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.groupBy))
    //router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/distribution/:columnName',this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.distribution))
    //router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/distinct/:columnName',this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.distinct))
    //router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/aggregate/:columnName',this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/count', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.count));
    //router.post('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/bulk',this.ERNAEHRUNGSKATEGORIEMiddleware.default,this.catchErr(this.createb))
    //router.put('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/bulk',this.ERNAEHRUNGSKATEGORIEMiddleware.default,this.catchErr(this.updateb))
    //router.delete('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/bulk',this.ERNAEHRUNGSKATEGORIEMiddleware.default,this.catchErr(this.deleteb))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/:id', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/:id', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/:id', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ERNAEHRUNGSKATEGORIE/:parentId/KATEGORIE_ZUTAT/:id/exists', this.ERNAEHRUNGSKATEGORIEMiddleware.default, this.catchErr(this.exists))

  }
}

module.exports = ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatRouter;