module.exports = {
  tableName: 'ZUTAT_KRITISCHE_INHALTSSTOFFE',
  columns: [{
      columnName: 'ZUTATENNR',
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
      columnName: 'INHALTSSTOFFNR',
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
    "constraintName": "zutat_kritische_inhaltsstoffe_ibfk_1",
    "tableName": "ZUTAT_KRITISCHE_INHALTSSTOFFE",
    "columnName": "ZUTATENNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "ZUTAT",
    "referencedColumnName": "ZUTATENNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }, {
    "constraintName": "zutat_kritische_inhaltsstoffe_ibfk_2",
    "tableName": "ZUTAT_KRITISCHE_INHALTSSTOFFE",
    "columnName": "INHALTSSTOFFNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "KRITISCHE_INHALTSSTOFFE",
    "referencedColumnName": "INHALTSSTOFFNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }],
  dbType: 'mysql'
}