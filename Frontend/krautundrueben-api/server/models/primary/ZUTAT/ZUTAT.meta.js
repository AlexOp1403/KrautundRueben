module.exports = {
  tableName: 'ZUTAT',
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
      columnName: 'BEZEICHNUNG',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'EINHEIT',
      type: 'string',
      dataType: 'varchar',
      data_type_x_precision: "25",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'NETTOPREIS',
      type: 'decimal',
      dataType: 'decimal',
      data_type_x_precision: "10",
      data_type_x_scale: 2,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'BESTAND',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'LIEFERANT',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'KALORIEN',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "11",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'KOHLENHYDRATE',
      type: 'decimal',
      dataType: 'decimal',
      data_type_x_precision: "10",
      data_type_x_scale: 2,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'PROTEIN',
      type: 'decimal',
      dataType: 'decimal',
      data_type_x_precision: "10",
      data_type_x_scale: 2,
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [{
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
  }, {
    "constraintName": "rezeptinhalt_ibfk_2",
    "tableName": "REZEPTINHALT",
    "columnName": "ZUTATENNR",
    "positionInUniqueConstraint": 1,
    "referencedTableName": "ZUTAT",
    "referencedColumnName": "ZUTATENNR",
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
  }, {
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
  }],
  belongsTo: [],
  dbType: 'mysql'
}