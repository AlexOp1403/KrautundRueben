const {
  BaseModelSql
} = require('xc-data-mapper');

class KUNDE extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./KUNDE.meta.js')
    });

  }

}


module.exports = KUNDE;