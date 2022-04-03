const {
  BaseService
} = require('xc-core');

class SENDUNGHmLIEFERANTSendungService extends BaseService {

  constructor(app) {
    super(app);
    this.SENDUNG = app.$dbs.primary.SENDUNG;
    this.LIEFERANT_SENDUNG = app.$dbs.primary.LIEFERANT_SENDUNG;
  }



  async read(req, res) {
    let data = await this.LIEFERANT_SENDUNG.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.LIEFERANT_SENDUNG.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.LIEFERANT_SENDUNG.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.LIEFERANT_SENDUNG.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.LIEFERANT_SENDUNG.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.LIEFERANT_SENDUNG.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.LIEFERANT_SENDUNG.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'SENDUNG',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.SENDUNG.hasManyChildren({
      child: 'LIEFERANT_SENDUNG',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.SENDUNG.hasManyList({
      ...req.query,
      childs: `LIEFERANT_SENDUNG`
    })
  }

}

module.exports = SENDUNGHmLIEFERANTSendungService;