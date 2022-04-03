module.exports = {
  tableName: 'SENDUNG_ZUTAT',
  columns: [{
      columnName: 'SendungsNR',
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
      columnName: 'ZutatenNR',
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
      columnName: 'Menge',
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
    "constraintName": "sendung_zutat_ibfk_1",
    "tableName": "SENDUNG_ZUTAT",
    "columnName": "SendungsNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "SENDUNG",
    "referencedColumnName": "SendungsNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }, {
    "constraintName": "sendung_zutat_ibfk_2",
    "tableName": "SENDUNG_ZUTAT",
    "columnName": "ZutatenNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "ZUTAT",
    "referencedColumnName": "ZUTATENNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  dbType: 'mysql'
}