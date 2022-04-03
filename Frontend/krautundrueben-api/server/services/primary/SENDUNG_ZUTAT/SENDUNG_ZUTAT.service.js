const {
  BaseService
} = require('xc-core');

class SENDUNGZutatService extends BaseService {

  constructor(app) {
    super(app);
    this.SENDUNG_ZUTAT = app.$dbs.primary.SENDUNG_ZUTAT;
  }

  async create(req, res) {
    let data = await this.SENDUNG_ZUTAT.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.SENDUNG_ZUTAT.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.SENDUNG_ZUTAT.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.SENDUNG_ZUTAT.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.SENDUNG_ZUTAT.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.SENDUNG_ZUTAT.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.SENDUNG_ZUTAT.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.SENDUNG_ZUTAT.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.SENDUNG_ZUTAT.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.SENDUNG_ZUTAT.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.SENDUNG_ZUTAT.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.SENDUNG_ZUTAT.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.SENDUNG_ZUTAT.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.SENDUNG_ZUTAT.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.SENDUNG_ZUTAT.delb(req.body);
    return data;
  }

}

module.exports = SENDUNGZutatService;