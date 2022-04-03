const {
  BaseService
} = require('xc-core');

class KUNDEService extends BaseService {

  constructor(app) {
    super(app);
    this.KUNDE = app.$dbs.primary.KUNDE;
  }

  async create(req, res) {
    let data = await this.KUNDE.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.KUNDE.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.KUNDE.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.KUNDE.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.KUNDE.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.KUNDE.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.KUNDE.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.KUNDE.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.KUNDE.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.KUNDE.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.KUNDE.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.KUNDE.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.KUNDE.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.KUNDE.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.KUNDE.delb(req.body);
    return data;
  }

}

module.exports = KUNDEService;