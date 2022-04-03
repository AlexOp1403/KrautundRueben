const {
  BaseModelSql
} = require('xc-data-mapper');

class ERNAEHRUNGSKATEGORIE extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ERNAEHRUNGSKATEGORIE.meta.js')
    });

  }

}


module.exports = ERNAEHRUNGSKATEGORIE;