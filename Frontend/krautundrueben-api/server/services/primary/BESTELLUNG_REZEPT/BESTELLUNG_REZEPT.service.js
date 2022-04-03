const {
  BaseService
} = require('xc-core');

class BESTELLUNGRezeptService extends BaseService {

  constructor(app) {
    super(app);
    this.BESTELLUNG_REZEPT = app.$dbs.primary.BESTELLUNG_REZEPT;
  }

  async create(req, res) {
    let data = await this.BESTELLUNG_REZEPT.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.BESTELLUNG_REZEPT.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.BESTELLUNG_REZEPT.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.BESTELLUNG_REZEPT.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.BESTELLUNG_REZEPT.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.BESTELLUNG_REZEPT.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.BESTELLUNG_REZEPT.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.BESTELLUNG_REZEPT.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.BESTELLUNG_REZEPT.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.BESTELLUNG_REZEPT.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.BESTELLUNG_REZEPT.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.BESTELLUNG_REZEPT.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.BESTELLUNG_REZEPT.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.BESTELLUNG_REZEPT.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.BESTELLUNG_REZEPT.delb(req.body);
    return data;
  }

}

module.exports = BESTELLUNGRezeptService;