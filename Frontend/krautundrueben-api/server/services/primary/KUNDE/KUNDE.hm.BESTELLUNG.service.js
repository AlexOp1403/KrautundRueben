const {
  BaseService
} = require('xc-core');

class KUNDEHmBESTELLUNGService extends BaseService {

  constructor(app) {
    super(app);
    this.KUNDE = app.$dbs.primary.KUNDE;
    this.BESTELLUNG = app.$dbs.primary.BESTELLUNG;
  }



  async read(req, res) {
    let data = await this.BESTELLUNG.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'KUNDE',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.BESTELLUNG.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'KUNDE',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.BESTELLUNG.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'KUNDE',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.BESTELLUNG.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'KUNDE',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.BESTELLUNG.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'KUNDE',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.BESTELLUNG.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'KUNDE',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.BESTELLUNG.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'KUNDE',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.KUNDE.hasManyChildren({
      child: 'BESTELLUNG',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.KUNDE.hasManyList({
      ...req.query,
      childs: `BESTELLUNG`
    })
  }

}

module.exports = KUNDEHmBESTELLUNGService;