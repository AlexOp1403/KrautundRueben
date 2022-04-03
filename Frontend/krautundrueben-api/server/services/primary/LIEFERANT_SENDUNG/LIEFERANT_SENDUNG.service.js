const {
  BaseService
} = require('xc-core');

class LIEFERANTSendungService extends BaseService {

  constructor(app) {
    super(app);
    this.LIEFERANT_SENDUNG = app.$dbs.primary.LIEFERANT_SENDUNG;
  }

  async create(req, res) {
    let data = await this.LIEFERANT_SENDUNG.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.LIEFERANT_SENDUNG.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.LIEFERANT_SENDUNG.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.LIEFERANT_SENDUNG.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.LIEFERANT_SENDUNG.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.LIEFERANT_SENDUNG.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.LIEFERANT_SENDUNG.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.LIEFERANT_SENDUNG.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.LIEFERANT_SENDUNG.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.LIEFERANT_SENDUNG.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.LIEFERANT_SENDUNG.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.LIEFERANT_SENDUNG.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.LIEFERANT_SENDUNG.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.LIEFERANT_SENDUNG.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.LIEFERANT_SENDUNG.delb(req.body);
    return data;
  }

}

module.exports = LIEFERANTSendungService;