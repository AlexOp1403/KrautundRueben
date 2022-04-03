const {
  BaseModelSql
} = require('xc-data-mapper');

class KRITISCHE_INHALTSSTOFFE extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./KRITISCHE_INHALTSSTOFFE.meta.js')
    });

  }

}


module.exports = KRITISCHE_INHALTSSTOFFE;