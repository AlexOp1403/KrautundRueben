module.exports = {
  tableName: 'REZEPT',
  columns: [{
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
      columnName: 'REZEPTNAME',
      type: 'string',
      dataType: 'varchar',
      notNull: true,
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
  }, {
    "constraintName": "rezeptinhalt_ibfk_1",
    "tableName": "REZEPTINHALT",
    "columnName": "REZEPTID",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "REZEPT",
    "referencedColumnName": "REZEPTID",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  belongsTo: [],
  dbType: 'mysql'
}