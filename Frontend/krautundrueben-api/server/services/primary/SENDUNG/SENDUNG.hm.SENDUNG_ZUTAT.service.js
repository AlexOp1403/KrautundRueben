const {
  BaseService
} = require('xc-core');

class SENDUNGHmSENDUNGZutatService extends BaseService {

  constructor(app) {
    super(app);
    this.SENDUNG = app.$dbs.primary.SENDUNG;
    this.SENDUNG_ZUTAT = app.$dbs.primary.SENDUNG_ZUTAT;
  }



  async read(req, res) {
    let data = await this.SENDUNG_ZUTAT.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.SENDUNG_ZUTAT.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.SENDUNG_ZUTAT.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.SENDUNG_ZUTAT.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.SENDUNG_ZUTAT.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.SENDUNG_ZUTAT.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.SENDUNG_ZUTAT.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.SENDUNG.hasManyChildren({
      child: 'SENDUNG_ZUTAT',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.SENDUNG.hasManyList({
      ...req.query,
      childs: `SENDUNG_ZUTAT`
    })
  }

}

module.exports = SENDUNGHmSENDUNGZutatService;