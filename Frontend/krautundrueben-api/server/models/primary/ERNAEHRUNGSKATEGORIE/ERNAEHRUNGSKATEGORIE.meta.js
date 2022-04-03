module.exports = {
  tableName: 'ERNAEHRUNGSKATEGORIE',
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
      columnName: 'KategorieName',
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
  }],
  belongsTo: [],
  dbType: 'mysql'
}