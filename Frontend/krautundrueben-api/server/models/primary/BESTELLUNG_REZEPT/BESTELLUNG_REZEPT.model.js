const {
  BaseModelSql
} = require('xc-data-mapper');

class BESTELLUNG_REZEPT extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./BESTELLUNG_REZEPT.meta.js')
    });

  }

}


module.exports = BESTELLUNG_REZEPT;