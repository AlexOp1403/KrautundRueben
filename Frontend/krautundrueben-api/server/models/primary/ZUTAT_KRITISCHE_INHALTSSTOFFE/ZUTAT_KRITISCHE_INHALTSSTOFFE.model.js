const {
  BaseModelSql
} = require('xc-data-mapper');

class ZUTAT_KRITISCHE_INHALTSSTOFFE extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ZUTAT_KRITISCHE_INHALTSSTOFFE.meta.js')
    });

  }

}


module.exports = ZUTAT_KRITISCHE_INHALTSSTOFFE;