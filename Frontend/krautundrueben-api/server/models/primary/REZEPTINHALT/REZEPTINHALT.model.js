const {
  BaseModelSql
} = require('xc-data-mapper');

class REZEPTINHALT extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./REZEPTINHALT.meta.js')
    });

  }

}


module.exports = REZEPTINHALT;