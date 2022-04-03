const {
  BaseModelSql
} = require('xc-data-mapper');

class SENDUNG_ZUTAT extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./SENDUNG_ZUTAT.meta.js')
    });

  }

}


module.exports = SENDUNG_ZUTAT;