const {
  BaseService
} = require('xc-core');

class KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService extends BaseService {

  constructor(app) {
    super(app);
    this.KRITISCHE_INHALTSSTOFFE = app.$dbs.primary.KRITISCHE_INHALTSSTOFFE;
    this.ZUTAT_KRITISCHE_INHALTSSTOFFE = app.$dbs.primary.ZUTAT_KRITISCHE_INHALTSSTOFFE;
  }



  async read(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'KRITISCHE_INHALTSSTOFFE',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'KRITISCHE_INHALTSSTOFFE',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'KRITISCHE_INHALTSSTOFFE',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'KRITISCHE_INHALTSSTOFFE',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'KRITISCHE_INHALTSSTOFFE',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'KRITISCHE_INHALTSSTOFFE',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.ZUTAT_KRITISCHE_INHALTSSTOFFE.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'KRITISCHE_INHALTSSTOFFE',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.KRITISCHE_INHALTSSTOFFE.hasManyChildren({
      child: 'ZUTAT_KRITISCHE_INHALTSSTOFFE',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.KRITISCHE_INHALTSSTOFFE.hasManyList({
      ...req.query,
      childs: `ZUTAT_KRITISCHE_INHALTSSTOFFE`
    })
  }

}

module.exports = KRITISCHEInhaltsstoffeHmZUTATKritischeInhaltsstoffeService;