const {
  BaseService
} = require('xc-core');

class REZEPTINHALTService extends BaseService {

  constructor(app) {
    super(app);
    this.REZEPTINHALT = app.$dbs.primary.REZEPTINHALT;
  }

  async create(req, res) {
    let data = await this.REZEPTINHALT.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.REZEPTINHALT.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.REZEPTINHALT.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.REZEPTINHALT.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.REZEPTINHALT.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.REZEPTINHALT.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.REZEPTINHALT.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.REZEPTINHALT.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.REZEPTINHALT.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.REZEPTINHALT.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.REZEPTINHALT.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.REZEPTINHALT.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.REZEPTINHALT.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.REZEPTINHALT.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.REZEPTINHALT.delb(req.body);
    return data;
  }

}

module.exports = REZEPTINHALTService;