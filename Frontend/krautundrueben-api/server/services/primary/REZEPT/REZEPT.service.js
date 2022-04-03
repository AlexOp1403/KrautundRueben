const {
  BaseService
} = require('xc-core');

class REZEPTService extends BaseService {

  constructor(app) {
    super(app);
    this.REZEPT = app.$dbs.primary.REZEPT;
  }

  async create(req, res) {
    let data = await this.REZEPT.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.REZEPT.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.REZEPT.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.REZEPT.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.REZEPT.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.REZEPT.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.REZEPT.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.REZEPT.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.REZEPT.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.REZEPT.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.REZEPT.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.REZEPT.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.REZEPT.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.REZEPT.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.REZEPT.delb(req.body);
    return data;
  }

}

module.exports = REZEPTService;