module.exports = {
  tableName: 'BESTELLUNG_REZEPT',
  columns: [{
      columnName: 'BESTELLNR',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'REZEPTID',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      primaryKey: true,
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'STKZAHL',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [{
    "constraintName": "bestellung_rezept_ibfk_1",
    "tableName": "BESTELLUNG_REZEPT",
    "columnName": "BESTELLNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "BESTELLUNG",
    "referencedColumnName": "BESTELLNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }, {
    "constraintName": "bestellung_rezept_ibfk_2",
    "tableName": "BESTELLUNG_REZEPT",
    "columnName": "REZEPTID",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "REZEPT",
    "referencedColumnName": "REZEPTID",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  dbType: 'mysql'
}