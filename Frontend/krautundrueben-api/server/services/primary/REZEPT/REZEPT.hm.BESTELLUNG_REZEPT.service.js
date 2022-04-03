const {
  BaseService
} = require('xc-core');

class REZEPTHmBESTELLUNGRezeptService extends BaseService {

  constructor(app) {
    super(app);
    this.REZEPT = app.$dbs.primary.REZEPT;
    this.BESTELLUNG_REZEPT = app.$dbs.primary.BESTELLUNG_REZEPT;
  }



  async read(req, res) {
    let data = await this.BESTELLUNG_REZEPT.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.BESTELLUNG_REZEPT.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.BESTELLUNG_REZEPT.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.BESTELLUNG_REZEPT.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.BESTELLUNG_REZEPT.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.BESTELLUNG_REZEPT.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.BESTELLUNG_REZEPT.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'REZEPT',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.REZEPT.hasManyChildren({
      child: 'BESTELLUNG_REZEPT',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.REZEPT.hasManyList({
      ...req.query,
      childs: `BESTELLUNG_REZEPT`
    })
  }

}

module.exports = REZEPTHmBESTELLUNGRezeptService;