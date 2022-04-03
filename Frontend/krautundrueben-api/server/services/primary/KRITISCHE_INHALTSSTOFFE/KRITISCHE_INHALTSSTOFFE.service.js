const {
  BaseService
} = require('xc-core');

class KRITISCHEInhaltsstoffeService extends BaseService {

  constructor(app) {
    super(app);
    this.KRITISCHE_INHALTSSTOFFE = app.$dbs.primary.KRITISCHE_INHALTSSTOFFE;
  }

  async create(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.delb(req.body);
    return data;
  }

}

module.exports = KRITISCHEInhaltsstoffeService;