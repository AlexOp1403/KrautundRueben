const {
  BaseModelSql
} = require('xc-data-mapper');

class KATEGORIE_ZUTAT extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./KATEGORIE_ZUTAT.meta.js')
    });

  }

}


module.exports = KATEGORIE_ZUTAT;