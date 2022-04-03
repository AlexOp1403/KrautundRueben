const {
  BaseService
} = require('xc-core');

class LIEFERANTService extends BaseService {

  constructor(app) {
    super(app);
    this.LIEFERANT = app.$dbs.primary.LIEFERANT;
  }

  async create(req, res) {
    let data = await this.LIEFERANT.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.LIEFERANT.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.LIEFERANT.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.LIEFERANT.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.LIEFERANT.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.LIEFERANT.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.LIEFERANT.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.LIEFERANT.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.LIEFERANT.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.LIEFERANT.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.LIEFERANT.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.LIEFERANT.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.LIEFERANT.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.LIEFERANT.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.LIEFERANT.delb(req.body);
    return data;
  }

}

module.exports = LIEFERANTService;