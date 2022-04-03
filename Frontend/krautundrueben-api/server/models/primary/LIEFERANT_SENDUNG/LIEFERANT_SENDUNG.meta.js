module.exports = {
  tableName: 'LIEFERANT_SENDUNG',
  columns: [{
      columnName: 'LIEFERANTENNR',
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
  ],
  pks: [],
  hasMany: [],
  belongsTo: [{
    "constraintName": "lieferant_sendung_ibfk_1",
    "tableName": "LIEFERANT_SENDUNG",
    "columnName": "LIEFERANTENNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "LIEFERANT",
    "referencedColumnName": "LIEFERANTENNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }, {
    "constraintName": "lieferant_sendung_ibfk_2",
    "tableName": "LIEFERANT_SENDUNG",
    "columnName": "SendungsNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "SENDUNG",
    "referencedColumnName": "SendungsNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  dbType: 'mysql'
}