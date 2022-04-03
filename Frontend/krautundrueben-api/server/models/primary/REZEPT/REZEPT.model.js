const {
  BaseModelSql
} = require('xc-data-mapper');

class REZEPT extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./REZEPT.meta.js')
    });

  }

}


module.exports = REZEPT;