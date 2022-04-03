const {
  BaseModelSql
} = require('xc-data-mapper');

class SENDUNG extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./SENDUNG.meta.js')
    });

  }

}


module.exports = SENDUNG;