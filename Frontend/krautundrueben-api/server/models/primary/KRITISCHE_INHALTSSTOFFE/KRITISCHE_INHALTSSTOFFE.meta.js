module.exports = {
  tableName: 'KRITISCHE_INHALTSSTOFFE',
  columns: [{
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
    {
      columnName: 'INHALTSSTOFFNAME',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
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
  belongsTo: [],
  dbType: 'mysql'
}