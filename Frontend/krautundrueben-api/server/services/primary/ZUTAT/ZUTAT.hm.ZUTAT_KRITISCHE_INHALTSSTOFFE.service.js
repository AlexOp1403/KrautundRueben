const {
  BaseService
} = require('xc-core');

class ZUTATHmZUTATKritischeInhaltsstoffeService extends BaseService {

  constructor(app) {
    super(app);
    this.ZUTAT = app.$dbs.primary.ZUTAT;
    this.ZUTAT_KRITISCHE_INHALTSSTOFFE = app.$dbs.primary.ZUTAT_KRITISCHE_INHALTSSTOFFE;
  }



  async read(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'ZUTAT',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'ZUTAT',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'ZUTAT',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'ZUTAT',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'ZUTAT',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'ZUTAT',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'ZUTAT',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.ZUTAT.hasManyChildren({
      child: 'ZUTAT_KRITISCHE_INHALTSSTOFFE',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.ZUTAT.hasManyList({
      ...req.query,
      childs: `ZUTAT_KRITISCHE_INHALTSSTOFFE`
    })
  }

}

module.exports = ZUTATHmZUTATKritischeInhaltsstoffeService;