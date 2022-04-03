const {
  BaseService
} = require('xc-core');

class KATEGORIEZutatService extends BaseService {

  constructor(app) {
    super(app);
    this.KATEGORIE_ZUTAT = app.$dbs.primary.KATEGORIE_ZUTAT;
  }

  async create(req, res) {
    let data = await this.KATEGORIE_ZUTAT.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.KATEGORIE_ZUTAT.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.KATEGORIE_ZUTAT.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.KATEGORIE_ZUTAT.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.KATEGORIE_ZUTAT.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.KATEGORIE_ZUTAT.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.KATEGORIE_ZUTAT.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.KATEGORIE_ZUTAT.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.KATEGORIE_ZUTAT.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.KATEGORIE_ZUTAT.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.KATEGORIE_ZUTAT.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.KATEGORIE_ZUTAT.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.KATEGORIE_ZUTAT.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.KATEGORIE_ZUTAT.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.KATEGORIE_ZUTAT.delb(req.body);
    return data;
  }

}

module.exports = KATEGORIEZutatService;