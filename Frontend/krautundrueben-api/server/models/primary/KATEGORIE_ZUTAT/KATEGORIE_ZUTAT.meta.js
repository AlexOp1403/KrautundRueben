module.exports = {
  tableName: 'KATEGORIE_ZUTAT',
  columns: [{
      columnName: 'KategorieNR',
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
  ],
  pks: [],
  hasMany: [],
  belongsTo: [{
    "constraintName": "kategorie_zutat_ibfk_1",
    "tableName": "KATEGORIE_ZUTAT",
    "columnName": "KategorieNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "ERNAEHRUNGSKATEGORIE",
    "referencedColumnName": "KategorieNR",
    "matchOption": "NONE",
    "updateRule": "RESTRICT",
    "deleteRule": "RESTRICT",
    "tableSchema": "krautundrueben"
  }, {
    "constraintName": "kategorie_zutat_ibfk_2",
    "tableName": "KATEGORIE_ZUTAT",
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