const {
  BaseService
} = require('xc-core');

class ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService extends BaseService {

  constructor(app) {
    super(app);
    this.ERNAEHRUNGSKATEGORIE = app.$dbs.primary.ERNAEHRUNGSKATEGORIE;
    this.KATEGORIE_ZUTAT = app.$dbs.primary.KATEGORIE_ZUTAT;
  }



  async read(req, res) {
    let data = await this.KATEGORIE_ZUTAT.readByFk({
      parentId: req.params.parentId,
      parentTableName: 'ERNAEHRUNGSKATEGORIE',
      id: req.params.id
    });
    return data
  }

  async update(req, res) {
    let data = await this.KATEGORIE_ZUTAT.updateByFk({
      parentId: req.params.parentId,
      parentTableName: 'ERNAEHRUNGSKATEGORIE',
      id: req.params.id,
      data: req.body
    });
    return data
  }

  async delete(req, res) {
    let data = await this.KATEGORIE_ZUTAT.delByFk({
      parentId: req.params.parentId,
      parentTableName: 'ERNAEHRUNGSKATEGORIE',
      id: req.params.id
    });
    return data
  }

  async create(req, res) {
    let data = await this.KATEGORIE_ZUTAT.insertByFk({
      parentId: req.params.parentId,
      parentTableName: 'ERNAEHRUNGSKATEGORIE',
      data: req.body
    });
    return data
  }

  async findOne(req, res) {
    let data = await this.KATEGORIE_ZUTAT.findOneByFk({
      parentId: req.params.parentId,
      parentTableName: 'ERNAEHRUNGSKATEGORIE',
      ...req.query
    });
    return data
  }

  async count(req, res) {
    let data = await this.KATEGORIE_ZUTAT.countByFk({
      parentId: req.params.parentId,
      parentTableName: 'ERNAEHRUNGSKATEGORIE',
      ...req.query
    });
    return data
  }

  async exists(req, res) {
    let data = await this.KATEGORIE_ZUTAT.existsByFk({
      parentId: req.params.parentId,
      parentTableName: 'ERNAEHRUNGSKATEGORIE',
      id: req.params.id,
      ...req.query
    });
    return data
  }




  async list(req, res) {
    let data = await this.ERNAEHRUNGSKATEGORIE.hasManyChildren({
      child: 'KATEGORIE_ZUTAT',
      ...req.params,
      ...req.query
    })
    return data;
  }

  async hasManyList(req, res) {
    return await this.ERNAEHRUNGSKATEGORIE.hasManyList({
      ...req.query,
      childs: `KATEGORIE_ZUTAT`
    })
  }

}

module.exports = ERNAEHRUNGSKATEGORIEHmKATEGORIEZutatService;