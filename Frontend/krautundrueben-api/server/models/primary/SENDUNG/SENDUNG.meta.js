module.exports = {
  tableName: 'SENDUNG',
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
      columnName: 'Lieferdatum',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "45",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
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
  }, {
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
  }],
  belongsTo: [],
  dbType: 'mysql'
}