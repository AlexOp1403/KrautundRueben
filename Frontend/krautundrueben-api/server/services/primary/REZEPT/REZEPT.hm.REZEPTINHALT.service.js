const {
  BaseService
} = require('xc-core');

class REZEPTHmREZEPTINHALTService extends BaseService {

  constructor(app) {
    super(app);
    this.REZEPT = app.$dbs.primary.REZEPT;
    this.REZEPTINHALT = app.$dbs.primary.REZEPTINHALT;
  }



  async read(req, res) {
    let data = await this.REZEPTINHALT.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.REZEPTINHALT.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.REZEPTINHALT.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.REZEPTINHALT.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.REZEPTINHALT.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.REZEPTINHALT.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.REZEPTINHALT.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.REZEPT.hasManyChildren({
      child: 'REZEPTINHALT',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.REZEPT.hasManyList({
      ...req.query,
      childs: `REZEPTINHALT`
    })
  }

}

module.exports = REZEPTHmREZEPTINHALTService;