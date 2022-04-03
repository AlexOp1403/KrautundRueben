const {
  BaseModelSql
} = require('xc-data-mapper');

class BESTELLUNG extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./BESTELLUNG.meta.js')
    });

  }

}


module.exports = BESTELLUNG;