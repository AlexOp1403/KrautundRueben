const {
  BaseService
} = require('xc-core');

class SENDUNGService extends BaseService {

  constructor(app) {
    super(app);
    this.SENDUNG = app.$dbs.primary.SENDUNG;
  }

  async create(req, res) {
    let data = await this.SENDUNG.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.SENDUNG.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.SENDUNG.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.SENDUNG.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.SENDUNG.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.SENDUNG.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.SENDUNG.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.SENDUNG.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.SENDUNG.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.SENDUNG.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.SENDUNG.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.SENDUNG.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.SENDUNG.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.SENDUNG.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.SENDUNG.delb(req.body);
    return data;
  }

}

module.exports = SENDUNGService;