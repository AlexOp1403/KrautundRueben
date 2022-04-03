const {
  BaseService
} = require('xc-core');

class ERNAEHRUNGSKATEGORIEService extends BaseService {

  constructor(app) {
    super(app);
    this.ERNAEHRUNGSKATEGORIE = app.$dbs.primary.ERNAEHRUNGSKATEGORIE;
  }

  async create(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.delb(req.body);
    return data;
  }

}

module.exports = ERNAEHRUNGSKATEGORIEService;