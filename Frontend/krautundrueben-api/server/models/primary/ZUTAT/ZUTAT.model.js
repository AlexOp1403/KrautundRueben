const {
  BaseModelSql
} = require('xc-data-mapper');

class ZUTAT extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ZUTAT.meta.js')
    });

  }

}


module.exports = ZUTAT;