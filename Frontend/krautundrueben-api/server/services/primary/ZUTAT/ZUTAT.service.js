const {
  BaseService
} = require('xc-core');

class ZUTATService extends BaseService {

  constructor(app) {
    super(app);
    this.ZUTAT = app.$dbs.primary.ZUTAT;
  }

  async create(req, res) {
    let data = await this.ZUTAT.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.ZUTAT.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.ZUTAT.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.ZUTAT.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.ZUTAT.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.ZUTAT.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.ZUTAT.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.ZUTAT.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.ZUTAT.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.ZUTAT.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.ZUTAT.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.ZUTAT.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.ZUTAT.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.ZUTAT.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.ZUTAT.delb(req.body);
    return data;
  }

}

module.exports = ZUTATService;