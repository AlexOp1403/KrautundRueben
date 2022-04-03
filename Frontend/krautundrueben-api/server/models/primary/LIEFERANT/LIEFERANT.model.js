const {
  BaseModelSql
} = require('xc-data-mapper');

class LIEFERANT extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./LIEFERANT.meta.js')
    });

  }

}


module.exports = LIEFERANT;