const {
  BaseModelSql
} = require('xc-data-mapper');

class LIEFERANT_SENDUNG extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./LIEFERANT_SENDUNG.meta.js')
    });

  }

}


module.exports = LIEFERANT_SENDUNG;